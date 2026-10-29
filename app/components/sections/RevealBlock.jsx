"use client"

import useReveal from "../../hooks/useReveal"

// Marks a block visible once it scrolls in; children with `.rv` (and a `--i`
// stagger index) rise in one after another.
export default function RevealBlock({ as: Tag = "div", id, className = "", children, ...rest }) {
  const [ref, isVisible] = useReveal()
  return (
    <Tag id={id} ref={ref} className={`${className} ${isVisible ? "is-visible" : ""}`} {...rest}>
      {children}
    </Tag>
  )
}
