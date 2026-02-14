import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Image as ImageIcon, ChevronRight, ChevronLeft, Gift } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useRef } from "react";


// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


interface PinData {
  src: string;
  position: string; // Tailwind position classes
  size: string;     // Tailwind width/height
  rotation: string; // Tailwind rotate class
  pinColor?: string; // optional pin head color
}

// Page Data Interface
interface PageData {
  id: number;
  text: string;
  placeholderLabel: string;
  content: string;
  bgImage: string;
  pins?: PinData[];

  pinImage?: string; // NEW
   pinImagePosition?: string; // Tailwind classes like "top-4 right-4"
}


const pages: PageData[] = [
  { 
    id: 1, 
    text: "❤️ Happy Valentine's Day! 💜", 
    placeholderLabel: "Cover Image",
    content: "",
    bgImage: "/src/styles/assets/flower5.jpg",
     pinImage: "/src/styles/assets/pin2.jpg",
      pins: [
    {
      src: "/src/styles/assets/flower1.jpg",
      position: "top-10 right-10",
      size: "w-20 h-20",
      rotation: "rotate-6",
      pinColor: "bg-red-400"
    },
    {
      src: "/src/styles/assets/flower3.jpg",
      position: "bottom-40 right-6",
      size: "w-16 h-16",
      rotation: "-rotate-12",
      pinColor: "bg-yellow-400"
    },
    {
      src: "/src/styles/assets/flower4.jpg",
      position: "top-30 left-2",
      size: "w-20 h-20",
      rotation: "rotate-3",
      pinColor: "bg-pink-400"
    }
  ]
  },
  { 
    id: 2, 
    text: "", 
    placeholderLabel: "Sweet Memory",
    content: "HAShaha hi hello ako pala eto ang your not so secret admirer/mego_nako_nah nga si axel the great. I just want to greet you happy valentine's day kay trip ra nako. Bitaw in all seriousness, I'd like to express my sincere gratitude for your existence through this sloppy digital card. Watch me cook ehehe",
    bgImage: "/src/styles/assets/paper1.jpg",
     pinImage: "/src/styles/assets/page2bg.jpg",
    pins: [
  {
    src: "/src/styles/assets/page2pin.jpg",
    position: "top-10 right-4",
    size: "w-20 h-20",
    rotation: "-rotate-12",
    pinColor: "bg-purple-400"
  },
  {
    src: "/src/styles/assets/will1.jpg",
    position: "bottom-30 left-8",
    size: "w-25 h-25",
    rotation: "rotate-6",
    pinColor: "bg-yellow-400"
  },
  {
    src: "/src/styles/assets/mike1.jpg",
    position: "bottom-30 right-6",
    size: "w-20 h-20",
    rotation: "-rotate-3",
    pinColor: "bg-red-400"
  }
]


  },
  { 
    id: 3, 
    text: "", 
    placeholderLabel: "",
    content: "First of all, thank u for being there, ur presence means so much to me. Every time naa ka it makes me happy hehehhaha. Lowkey lang pero you really make my days better. Even simple convos mean a lot to me hehe. Please take care of yourself always and always remember to SYBAU Stay Young Beautiful and Unique! :))",
    bgImage: "/src/styles/assets/paper1.jpg",
     pinImage: "/src/styles/assets/page3bg.jpg",
     pins: [
  {
    src: "/src/styles/assets/dust2.jpg",
    position: "top-6 left-10",
    size: "w-16 h-16",
    rotation: "rotate-12",
    pinColor: "bg-blue-400"
  },
  {
    src: "/src/styles/assets/max1.jpg",
    position: "top-12 right-8",
    size: "w-20 h-20",
    rotation: "-rotate-6",
    pinColor: "bg-pink-400"
  },
  {
    src: "/src/styles/assets/dust1.jpg",
    position: "bottom-27 right-10",
    size: "w-26 h-26",
    rotation: "rotate-3",
    pinColor: "bg-yellow-400"
  }
]


  },
  { 
    id: 4, 
    text: "", 
    placeholderLabel: "Dream Big",
    content: "Sunod kay thank you kay comfortable ra kas akoa (i think haha) eventhough kabalo ka nga i have feelings for you gahahah after all we're Friends, right? and pasensya talaga dae if im annoying usahay ana kase ko kung komprtable na sa tawo huhu, kung uban pa to wa na FO na, I guess ur rare talaga eh. ekaw na gud na.",
    bgImage: "/src/styles/assets/paper1.jpg",
     pinImage: "/src/styles/assets/court-jester-dancing.gif",
     pins: [
  {
    src: "/src/styles/assets/pin1.jpg",
    position: "top-8 left-6",
    size: "w-20 h-20",
    rotation: "-rotate-3",
    pinColor: "bg-red-400"
  },
  {
    src: "/src/styles/assets/dust3.jpg",
    position: "bottom-30 left-30",
    size: "w-20 h-20",
    rotation: "rotate-12",
    pinColor: "bg-purple-400"
  },
  {
    src: "/src/styles/assets/flower3.jpg",
    position: "top-14 right-6",
    size: "w-20 h-20",
    rotation: "-rotate-6",
    pinColor: "bg-pink-400"
  }

]

  },
  { 
    id: 5, 
    text: "", 
    placeholderLabel: "Signature",
    content: "HAHAHHA che let me tell you you are super amaaazing!!! (kabalo na dapat ka ana). I really like your interests and  thankfully we share some of those. I appreciate every small ideas and concept that we share. Even the small things feel special if it is with you. And if ever tagaan kog chance to talk about it with you, Forever is not enough. ",
    bgImage: "/src/styles/assets/paper1.jpg",
     pinImage: "/src/styles/assets/lego.gif",
     pins: [
  {
    src: "/src/styles/assets/geto1.jpg",
    position: "top-6 right-10",
    size: "w-20 h-20",
    rotation: "rotate-6",
    pinColor: "bg-yellow-400"
  },
  {
    src: "/src/styles/assets/loak1.jpg",
    position: "bottom-80 left-6",
    size: "w-20 h-20",
    rotation: "-rotate-12",
    pinColor: "bg-blue-400"
  },
  {
    src: "/src/styles/assets/gojo1.jpg",
    position: "bottom-30 right-4",
    size: "w-20 h-20",
    rotation: "rotate-3",
    pinColor: "bg-red-400"
  }
]


  },
    {
    id: 6,
    text: "",
    placeholderLabel: "Secret",
    content: "Okay fine… aminado ko hahah maybe I like you more than I planned to. It wasn’t supposed to be like this. I was just supposed to admire you quietly, joke around, and stay safe. But here I am, caring a little too much and smiling a little too often hohay.",
    bgImage: "/src/styles/assets/paper1.jpg",
    pinImage: "/src/styles/assets/nayeon.gif",
    pins: [
  {
    src: "/src/styles/assets/flower9.jpg",
    position: "top-8 left-8",
    size: "w-16 h-16",
    rotation: "rotate-12",
    pinColor: "bg-pink-400"
  },
  {
    src: "/src/styles/assets/flower6.jpg",
    position: "top-12 right-6",
    size: "w-20 h-20",
    rotation: "-rotate-6",
    pinColor: "bg-yellow-400"
  },
  {
    src: "/src/styles/assets/flower7.jpg",
    position: "bottom-30 right-8",
    size: "w-20 h-20",
    rotation: "rotate-3",
    pinColor: "bg-purple-400"
  }
]


  },

    {
    id: 7,
    text: "",
    placeholderLabel: "Secret",
    content: "Before we finish this little thing, I just wanna say… I may sometimes not show it but I really appreciate you. Like, honestly, you make even the dumbest days better just by being you. Every chat, every laugh, every random moment, it means a lot to me. No matter what, I hope we stay friends, because having you around is seriously the best think i could whish for.",
    bgImage: "/src/styles/assets/paper1.jpg",
    pinImage: "/src/styles/assets/apprec.jpg",
    pins: [
  {
    src: "/src/styles/assets/flower10.jpg",
    position: "top-60 left-8",
    size: "w-16 h-16",
    rotation: "rotate-12",
    pinColor: "bg-pink-400"
  },
  {
    src: "/src/styles/assets/flower11.jpg",
    position: "top-12 right-6",
    size: "w-20 h-20",
    rotation: "-rotate-6",
    pinColor: "bg-yellow-400"
  }
]


  },

   {
    id: 8,
    text: "",
    placeholderLabel: "Secret",
    content: "Oel ngati kameie.",
    bgImage: "/src/styles/assets/paper1.jpg",
     pinImage: "/src/styles/assets/quar.jpg",
    pins: [
  // {
  //   src: "/src/styles/assets/flower9.jpg",
  //   position: "top-8 left-8",
  //   size: "w-16 h-16",
  //   rotation: "rotate-12",
  //   pinColor: "bg-pink-400"
  // },
  {
    src: "/src/styles/assets/quar.jpg",
    position: "top-12 right-6",
    size: "w-27 h-27",
    rotation: "-rotate-6",
    pinColor: "bg-yellow-400"
  },
  // {
  //   src: "/src/styles/assets/flower7.jpg",
  //   position: "bottom-30 right-8",
  //   size: "w-20 h-20",
  //   rotation: "rotate-3",
  //   pinColor: "bg-purple-400"
  // }
]
  },

   {
    id: 9,
    text: "",
    placeholderLabel: "Secret",
   content: "\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n",
    bgImage: "/src/styles/assets/CHE.png",
    pins: [
  // {
  //   src: "/src/styles/assets/flower9.jpg",
  //   position: "top-8 left-8",
  //   size: "w-16 h-16",
  //   rotation: "rotate-12",
  //   pinColor: "bg-pink-400"
  // },
  {
    src: "/src/styles/assets/page9pin.jpg",
    position: "top-5 right-6",
    size: "w-20 h-20",
    rotation: "-rotate-6",
    pinColor: "bg-yellow-400"
  },
  {
    src: "/src/styles/assets/dog.jpg",
    position: "bottom-20 left-3",
    size: "w-20 h-20",
    rotation: "rotate-3",
    pinColor: "bg-purple-400"
  }
]
  },
];

type Stage = 'intro' | 'rotating' | 'stopping' | 'reveal';

export function Flipbook() {
  const [expandedMessage, setExpandedMessage] = useState<PageData | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [stage, setStage] = useState<Stage>('intro');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sequence Controller
  useEffect(() => {
    if (stage === 'rotating') {
      // Rotate for 4 seconds then stop (Slower, longer rotation)
      const timer = setTimeout(() => {
        setStage('stopping');
      }, 4000);
      return () => clearTimeout(timer);
    }
    if (stage === 'stopping') {
      // Pause for a moment (1s) before explosion
      const timer = setTimeout(() => {
        setStage('reveal');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    
    <div 
  style={{ backgroundImage: "url(src/styles/assets/bg3.jpg)" }}
  className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-purple-100 p-4 font-sans overflow-hidden relative"
>
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Sparkles (Background) */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {Array.from({ length: 16 }).map((_, i) => (
    <Sparkle key={i} id={`s${i}`} delay={Math.random() * 4} size={16 + Math.random() * 12} />
  ))}
</div>


      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="z-50 flex flex-col items-center justify-center gap-6 cursor-pointer"
         onClick={() => {
  setStage('rotating');

  if (audioRef.current) {
    audioRef.current.volume = 0.5; // optional
    audioRef.current.play().catch(() => {});
  }
}}

          >
             <motion.div 
               animate={{ 
                 y: [0, -10, 0],
                 rotate: [0, 5, -5, 0],
                 scale: [1, 1.1, 1]
               }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="p-6 rounded-full bg-purple-500/10 border border-purple-400/30 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.4)]"
             >
                <Gift size={48} className="text-purple-300" />
             </motion.div>
             
             <div className="text-center space-y-2">
               <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                 Click for a surprise ✨
               </h1>
               <p className="text-purple-300/60 text-sm tracking-widest uppercase">
                 Tap to open
               </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

     <AnimatePresence>
  {expandedMessage && (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setExpandedMessage(null)} // click outside to close
    >
     <motion.div
  className="relative max-w-xl w-full p-8 rounded-xl shadow-2xl overflow-y-auto bg-cover bg-center"
  style={{ backgroundImage: `url(${expandedMessage.bgImage})` }}
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.8 }}
  onClick={(e) => e.stopPropagation()}
>
  {/* Soft purple overlay like polaroid */}
  <div className="absolute inset-0 bg-purple-500/5 rounded-xl" />

  {/* Close Button */}
  <button
    onClick={() => setExpandedMessage(null)}
    className="absolute top-4 right-4 text-purple-900 hover:text-purple-700 text-xl font-bold z-20"
  >
    ✕
  </button>

  {/* Modal Content */}
  <div className="relative z-10 flex gap-6 items-center">

  {/* LEFT SIDE — TEXT */}
  <div className="flex-1">
    <h2 className="handwritten-title text-xl font-bold mb-4 text-purple-900 italic">
      {expandedMessage.text}
    </h2>

    <p className="text-purple-900/80 font-serif leading-relaxed italic">
      "{expandedMessage.content}"
    </p>
  </div>

  {/* RIGHT SIDE — PINNED IMAGE */}
  {expandedMessage.pinImage && (
    <div className="relative w-40 h-48 bg-white border-4 border-white shadow-xl rotate-3 rounded-sm">

      <img
        src={expandedMessage.pinImage}
        alt="Pinned memory"
        className="w-full h-full object-cover rounded-sm"
      />

      {/* Pin Head */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full shadow-md flex items-center justify-center">
        <div className="w-1 h-1 bg-white/60 rounded-full ml-1 mb-1" />
      </div>

    </div>
  )}

</div>

</motion.div>

    </motion.div>
  )}
</AnimatePresence>



      {/* Persistent Animated Div (The "Surprise" Box) */}
      {stage !== 'intro' && (
        <>
          <motion.div
          className={cn(
  "fixed z-40 flex items-center justify-center rounded-2xl overflow-hidden"
  // "bg-purple-500/10 backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,0.3)]"
)}

            initial={{ 
              top: '50%', 
              left: '50%', 
              x: '-50%', 
              y: '-50%', 
              width: 200, 
              height: 200,
              rotate: 0,
              scale: 0
            }}
           animate={{
  scale: stage === 'reveal' ? 1 : 1,
  rotate: [0, 360], // spin from 0° → 360°
  top: stage === 'reveal' ? '40px' : '50%',
  left: stage === 'reveal' ? '40px' : '50%',
  x: stage === 'reveal' ? '0%' : '-50%',
  y: stage === 'reveal' ? '0%' : '-50%',
  width: stage === 'reveal' ? 70 : 260,
  height: stage === 'reveal' ? 70 : 260,
  borderRadius: stage === 'reveal' ? '50%' : '16px',
}}
transition={{
  rotate: { repeat: Infinity, duration: 4, ease: "linear" },
  default: { duration: 1.5, ease: [0.34, 1.56, 0.64, 1] },
}}
          >
           <img
    src="src/styles/assets/flower2.png"
    alt="Logo"
  className={cn(
    "w-full h-full object-contain transition-all duration-500",
    stage === "reveal" ? "p-1" : "p-4"
  )}
/>
          </motion.div>

          {/* Rose Explosion */}
          {stage === 'reveal' && (
            <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
               {Array.from({ length: 40 }).map((_, i) => (
                 <RoseParticle key={i} index={i} total={40} />
               ))}
            </div>
          )}
        </>
      )}

      {/* Main Flipbook Card */}
      <AnimatePresence>
        {stage === 'reveal' && (
          <motion.div
            key="card-container"
            className="flex flex-col items-center justify-center z-10 w-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            {/* Main Card Container with Perspective */}
            <div className="relative w-full max-w-[340px] aspect-[3/4] perspective-[1500px] rotate-[-3deg]">
              {pages.map((page, index) => (
                <FlipPage 
                  key={page.id} 
                  data={page} 
                  index={index} 
                  currentPage={currentPage}
                  zIndex={pages.length - index}
                  onNext={handleNext}
                  onExpand={setExpandedMessage} // NEW
                />
              ))}
            </div>

            {/* Navigation / Pagination */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex flex-col items-center gap-4"
            >
              <div className="flex gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      i === currentPage 
                        ? "bg-purple-400 scale-125 shadow-[0_0_10px_rgba(192,132,252,0.6)]" 
                        : "bg-purple-900/50 hover:bg-purple-700"
                    )}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-6 text-purple-300">
                <button 
                  onClick={handlePrev}
                  disabled={currentPage === 0}
                  className="p-3 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <span className="text-sm font-medium tracking-widest uppercase opacity-70">
                  {currentPage + 1} / {pages.length}
                </span>
                <button 
                  onClick={handleNext}
                  disabled={currentPage === pages.length - 1}
                  className="p-3 rounded-full hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <audio
  ref={audioRef}
  src="/music/greenday.mp3"
  loop
/>

    </div>
  );
}

function RoseParticle({ index, total }: { index: number, total: number }) {
  // Random angle and distance
  const angle = (Math.random() * 360) * (Math.PI / 180);
  const distance = 200 + Math.random() * 500; // Fly out between 200px and 700px
  
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;
  
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        x: tx, 
        y: ty, 
        opacity: [0, 1, 1, 0], 
        scale: [0, 1.5, 0.5],
        rotate: Math.random() * 720
      }}
      transition={{ 
        duration: 3 + Math.random() * 2, 
        ease: "easeOut",
        times: [0, 0.1, 0.8, 1] 
      }}
      className="absolute text-2xl"
    >
      🌹
    </motion.div>
  )
}

function FlipPage({ data, index, currentPage, zIndex, onNext, onExpand}: { 
  data: PageData; 
  index: number; 
  currentPage: number; 
  zIndex: number;
  onNext: () => void;
  onExpand: (page: PageData) => void; // NEW
 
}) {
  const isFlipped = index < currentPage;
  
  return (
    <motion.div
  onClick={() => { if (index === currentPage) onNext() }}
  className={cn(
    "absolute inset-0 w-full h-full cursor-pointer",
    "border border-white/10 rounded-[32px]",
    "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.6)]",
    "[backface-visibility:hidden] overflow-hidden origin-left"
  )}
  style={{ 
    zIndex,
    transformStyle: "preserve-3d",
    backgroundImage: `url(/src/styles/assets/pagebg.jpg)`, // <-- single bg
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  animate={{
    rotateY: isFlipped ? -180 : 0,
    x: isFlipped ? -40 : 0, 
    rotateZ: index === currentPage ? 0 : (index - currentPage) * 1.5,
    scale: index === currentPage ? 1 : 0.95 + (0.01 * (pages.length - index)),
  }}
  transition={{
    type: "spring",
    stiffness: 45,
    damping: 18,
    mass: 1.2,
    restDelta: 0.001
  }}
>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
      
      {/* Decorative Pinned Image Corners */}
     {/* Dynamic Pins */}
{data.pins?.map((pin, i) => (
  <div
    key={i}
    className={cn(
      "absolute bg-white/5 border-4 border-white shadow-lg z-10 flex items-center justify-center rounded-sm",
      pin.position,
      pin.size,
      pin.rotation
    )}
  >
    <div className="w-full h-full overflow-hidden rounded-sm">
      <img
        src={pin.src}
        alt="Pinned"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Pin Head */}
    <div
      className={cn(
        "absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center",
        pin.pinColor || "bg-red-400"
      )}
    >
      <div className="w-1 h-1 bg-white/60 rounded-full ml-1 mb-1" />
    </div>
  </div>
))}


      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center p-8 gap-8">
        
        {/* Main Note Card */}
        <div className="relative group cursor-pointer transform rotate-1 transition-transform hover:scale-[1.02] hover:rotate-0 duration-300">
           {/* Tape element */}
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 backdrop-blur-sm transform -rotate-2 z-20 shadow-sm" />
           
           <div className={cn(
             "w-64 h-64 bg-white p-3 shadow-xl rounded-sm flex flex-col gap-2",
             "transform transition-all"
           )}>
             {/* Text Content Area inside the Polaroid */}
            <div
  className="flex-1 p-6 overflow-hidden relative rounded-sm flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${data.bgImage})` }}
  onClick={(e) => {
    e.stopPropagation(); // prevent triggering page flip

     if (index !== 0) {    // <-- only allow expanding if NOT the first page
      onExpand(data);
     }
  }}
>


                <div className="absolute inset-0 bg-purple-500/5" />
            <p
  className={cn(
    "relative z-10 text-purple-900/80 font-serif leading-relaxed text-center italic",
    data.content.length > 150 ? "text-xs" : "text-sm"
  )}
>
  "{data.content}"
</p>

             </div>
             
             {/* Caption space on polaroid */}
             <div className="h-6 flex items-center justify-center">
                <div className="h-2 w-1/3 bg-purple-100 rounded-full" />
             </div>
           </div>
        </div>

        {/* Heading Text Content */}
        <div className="text-center space-y-4 max-w-[280px] z-10">
  <h2 className="handwritten-title text-3xl text-pink-200 leading-tight tracking-wide drop-shadow-[0_3px_20px_rgba(255,192,203,0.8)]">

            {data.text}
          </h2>
          <p className="text-purple-200/80 text-sm font-medium">
             Tap to flip ✨
          </p>
        </div>

      </div>

      {/* Edge Highlight (Spine) */}
      <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-gradient-to-r from-white/10 to-transparent" />
      
      {/* Shine Effect on turn */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 pointer-events-none"
        animate={{ opacity: isFlipped ? [0, 1, 0] : 0 }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );

  
}



// Sparkle Component
function Sparkle({ delay = 0, size = 16, id }: { delay?: number; size?: number; id: string }) {
  const top = Math.random() * 100;  // 0% - 100%
  const left = Math.random() * 100; // 0% - 100%

  // Optional: random color
  const colors = ['text-purple-400', 'text-pink-400', 'text-violet-400', 'text-purple-300', 'text-purple-200', 'text-pink-300'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className={`absolute ${color}`}
      style={{ top: `${top}%`, left: `${left}%` }}
      animate={{
        scale: [0, 1.2, 0],
        opacity: [0, 1, 0],
        rotate: [0, 45, 90],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <Sparkles size={size} />
    </motion.div>
  );
}


