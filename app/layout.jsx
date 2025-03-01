import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

//componnetes
import Header from "@/components/ui/Header";
import PageTransition from "../components/ui/PageTansition";
import StairTransition from "@/components/ui/StairTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Jeferson Portfolio",
  description: "Frontend Developer",
  icons: {
    icon: "/myfavicon.ico", // ✅ Forma correcta
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
