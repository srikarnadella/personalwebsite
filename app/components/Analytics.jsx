"use client"
import { useEffect } from "react"
import posthog from "posthog-js"

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY

// Cookieless PostHog (memory persistence, no replay) plus one delegated click listener.
export default function PostHog() {
  useEffect(() => {
    if (!key) return
    posthog.init(key, {
      api_host: "https://us.i.posthog.com",
      persistence: "memory",
      disable_session_recording: true,
      autocapture: false,
    })
    const onClick = (e) => {
      const a = e.target.closest?.("a[href]")
      if (!a) return
      const href = a.getAttribute("href")
      const name = /\.pdf$/i.test(href) ? "resume_click"
        : href.startsWith("mailto:") ? "email_click"
        : a.host && a.host !== location.host ? "outbound_click" : null
      if (name) posthog.capture(name, { href, text: a.textContent.trim().slice(0, 60) })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
  return null
}
