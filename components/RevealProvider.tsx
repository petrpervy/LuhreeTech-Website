"use client";
import { useEffect } from "react";
import { mountReveals } from "../app/reveal";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    mountReveals();
  }, []);

  return <>{children}</>;
}
