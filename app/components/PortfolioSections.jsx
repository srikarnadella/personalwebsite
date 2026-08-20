import ExperienceSection from "./sections/ExperienceSection"
import ProjectsSection from "./sections/ProjectsSection"
import DetailsSection from "./sections/DetailsSection"

export default function PortfolioSections() {
  return (
    <section className="pt-20 sm:pt-28">
      <ProjectsSection />
      <ExperienceSection />
      <DetailsSection />
    </section>
  )
}
