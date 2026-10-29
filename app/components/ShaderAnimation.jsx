"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation({ className, style, pulseRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform vec3 ripple; // click position in uv space, and seconds since the click

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

        // A click sends a soft swell outward: it pushes the rings out where it passes
        // instead of tearing the picture, and fades as it travels
        float r = length(uv - ripple.xy);
        float swell = exp(-pow((r - ripple.z * 0.9) * 4.0, 2.0)) * exp(-ripple.z * 1.1);
        float field = length(uv) - swell * 0.09;

        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - field + mod(uv.x+uv.y, 0.2));
          }
        }

        color *= 1.0 + swell * 0.6;
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      ripple: { value: new THREE.Vector3(0, 0, 99) },
    }

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    // The shader is per-pixel heavy, so a full Retina canvas is what made it stutter
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%"
    container.appendChild(renderer.domElement)

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight, false)
      renderer.getDrawingBufferSize(uniforms.resolution.value)
    }
    onResize()
    window.addEventListener("resize", onResize)

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Places the latest click in shader space, once per click rather than every frame
    let placedPulse = null
    const placePulse = (pulse) => {
      const rect = container.getBoundingClientRect()
      const res = uniforms.resolution.value
      const scale = res.x / rect.width
      const px = (pulse.x - rect.left) * scale
      const py = (rect.bottom - pulse.y) * scale
      const m = Math.min(res.x, res.y)
      uniforms.ripple.value.x = (px * 2 - res.x) / m
      uniforms.ripple.value.y = (py * 2 - res.y) / m
      placedPulse = pulse
    }

    let frame = 0
    let last = performance.now()
    const tick = (now) => {
      frame = requestAnimationFrame(tick)
      // Real seconds, capped, so a dropped frame never makes the lines jump
      const dt = Math.min((now - last) / 1000, 1 / 20)
      last = now

      const pulse = pulseRef?.current
      if (pulse && pulse !== placedPulse) placePulse(pulse)
      const age = pulse ? (now - pulse.t) / 1000 : 99
      uniforms.ripple.value.z = age

      // A gentle surge that eases back, instead of stepping the speed up and down
      uniforms.time.value += dt * 3.6 * (1 + 0.9 * Math.exp(-age * 2.2))
      renderer.render(scene, camera)
    }

    // Only run while the hero is on screen and the tab is visible
    let onScreen = true
    const start = () => {
      if (frame || reduceMotion || !onScreen || document.hidden) return
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }
    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      onScreen ? start() : stop()
    })
    observer.observe(container)
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener("visibilitychange", onVisibility)

    renderer.render(scene, camera)
    start()

    return () => {
      stop()
      observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", onResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [pulseRef])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ background: "#000", overflow: "hidden", ...style }}
    />
  )
}
