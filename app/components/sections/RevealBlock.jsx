"use client"

import useReveal from "../../hooks/useReveal"

export default function RevealBlock({ as: Tag = "div", id, className = "", children }) {
  const [ref, isVisible] = useReveal()
  return (
    <Tag id={id} ref={ref} className={`${className} reveal ${isVisible ? "is-visible" : ""}`}>
      {children}
    </Tag>
  )
}
