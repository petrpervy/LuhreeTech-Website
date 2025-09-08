import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import "./globals.css"
import RevealProvider from "@/components/RevealProvider"

const display = Plus_Jakarta_Sans({ subsets:["latin"], variable:"--font-display" })
const sans = Inter({ subsets:["latin"], variable:"--font-sans" })

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <RevealProvider>
          {children}
        </RevealProvider>
      </body>
    </html>
  );
}