import { SUMMARY } from "../../data/site-content"
import RevealBlock from "./RevealBlock"

export default function DetailsSection() {
  return (
    <RevealBlock as="div" className="max-w-2xl">
      <p className="text-sm leading-relaxed text-slate-500">{SUMMARY}</p>
    </RevealBlock>
  )
}
