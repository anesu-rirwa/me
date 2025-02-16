import localFont from "next/font/local";
import { JetBrains_Mono } from "@next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ['100', '300', '400', '500', '700', '900'],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Anesu Rirwa",
  description: "Anesu Rirwa Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
