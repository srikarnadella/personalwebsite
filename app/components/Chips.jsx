import Image from "next/image"

// Tech name -> icon file in /public/icons. Anything without one shows as a plain pill.
const ICONS = {
  "Java": "java", "Spring Boot": "spring", "Python": "python", "AWS SageMaker": "aws", "React": "react",
  "MongoDB": "mongodb", "TypeScript": "typescript", "Node.js": "nodejs", "SQLite": "sqlite", "PyTorch": "pytorch",
  "Streamlit": "streamlit", "Supabase": "supabase", "Vite": "vite", "GitHub Actions": "githubactions",
  "pandas": "pandas", "scikit-learn": "scikitlearn",
}

export default function Chips({ stack }) {
  return (
    <ul className="chips">
      {stack.split(" · ").map((c) => (
        <li key={c}>
          {ICONS[c] && <Image src={`/icons/${ICONS[c]}.svg`} alt="" width={16} height={16} />}
          {c}
        </li>
      ))}
    </ul>
  )
}
