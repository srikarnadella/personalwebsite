import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const description = "Software engineer and CS and Business student at UVA, building around F1 telemetry, market data and ML. Looking for new grad software engineering roles.";

export const metadata = {
  metadataBase: new URL("https://srikarnadella.com"),
  title: "Srikar Nadella | Software Engineer",
  description,
  openGraph: { title: "Srikar Nadella | Software Engineer", description, type: "website", siteName: "Srikar Nadella" },
  twitter: { card: "summary_large_image", title: "Srikar Nadella | Software Engineer", description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Reveal styles only hide content once this has run, so the page reads fine without script */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
