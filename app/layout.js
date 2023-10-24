import { Dosis, EB_Garamond } from "next/font/google";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dosis",
});

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-ebgaramond",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dosis.variable} ${eb_garamond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
