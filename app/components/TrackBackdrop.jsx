import { TRACKS } from "../data/tracks"

// Faint circuit outlines behind the whole page, like a topographic map, with cars lapping each one.
const PLACE = {
  Spa: "translate(30 40) scale(0.6)",
  Monza: "translate(1230 30) scale(0.5) rotate(18 290 500)",
  Suzuka: "translate(760 600) scale(0.55)",
  Silverstone: "translate(240 590) scale(0.3)",
  Monaco: "translate(980 40) scale(0.28)",
  Interlagos: "translate(1380 560) scale(0.3)",
  Austin: "translate(640 30) scale(0.3)",
  Miami: "translate(440 770) scale(0.3)",
  "Las Vegas": "translate(1090 300) scale(0.26)",
  Singapore: "translate(20 690) scale(0.22)",
}
const LAP = { Spa: 22, Monza: 15, Suzuka: 19, Silverstone: 17, Monaco: 12, Interlagos: 14, Austin: 18, Miami: 11, "Las Vegas": 13, Singapore: 16 } // seconds per lap
const COLORS = ["#e10600", "#3f6874", "#f59e0b", "#2563eb", "#16a34a", "#7c3aed"]
const CARS = 3

export default function TrackBackdrop() {
  return (
    <svg className="tracks" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {Object.entries(TRACKS).map(([name, t], n) => (
        <g key={name} transform={PLACE[name]}>
          <path d={t.d} fill="none" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" />
          {Array.from({ length: CARS }, (_, i) => (
            <circle key={i} className="car" r="12" fill={COLORS[(i + n) % COLORS.length]}>
              {/* Negative begin offsets spread the field around the lap from the first frame */}
              <animateMotion dur={`${LAP[name]}s`} begin={`${-(i * LAP[name]) / CARS}s`} repeatCount="indefinite" path={t.d} />
            </circle>
          ))}
        </g>
      ))}
    </svg>
  )
}
