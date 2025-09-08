"use client";
import { useEffect } from "react";
import { mountReveals } from "./reveal";
import "./globals.css"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"

const display = Plus_Jakarta_Sans({ subsets:["latin"], variable:"--font-display" })
const sans = Inter({ subsets:["latin"], variable:"--font-sans" })

export default function RootLayout({children}:{children:React.ReactNode}){
  useEffect(()=>{ mountReveals(); },[]);
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}