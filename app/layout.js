import { Bricolage_Grotesque, Onest } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth", "opsz"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Srikar Nadella",
  description: "Software engineer and CS student at UVA. Projects in F1 telemetry, market data, fintech and ML.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${onest.variable}`} suppressHydrationWarning>
      <head>
        {/* Reveal styles only hide content once this has run, so the page reads fine without script */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
