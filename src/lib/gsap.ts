"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Enregistrement unique des plugins GSAP, avant tout useGSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const AVEC_ANIMATIONS = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
