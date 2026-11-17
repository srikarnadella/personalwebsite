// The SN monogram, drawn as strokes so it renders the same everywhere (no font needed).
export function SnMark({ px }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <svg width={px} height={px} viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#3f6874" />
        <circle cx="256" cy="256" r="222" fill="none" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="10" />
        <circle cx="256" cy="256" r="176" fill="none" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="8" />
        <path d="M 214 176 C 206 142 176 130 146 130 C 106 130 80 154 80 186 C 80 222 110 234 150 245 C 196 258 230 272 230 312 C 230 350 198 372 156 372 C 116 372 84 352 74 314" fill="none" stroke="#ffffff" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="290,134 336,134 400,264 400,134 446,134 446,372 400,372 336,242 336,372 290,372" fill="#ffffff" />
      </svg>
    </div>
  );
}
