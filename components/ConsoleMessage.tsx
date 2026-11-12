"use client"; // the console belongs to the browser, so this runs there

import { useEffect } from "react";
import { site } from "@/lib/site";

export default function ConsoleMessage() {
  useEffect(() => {
    // %c = "apply the next style string to the text after this". The text after the second %c is plain.
    console.log(
      `%cLooking under the hood?%c I'm ${site.name}, a full-stack web developer. If you like what you see, get in touch: ${site.email}`,
      "color: #2f6bff; font-weight: bold; font-size: 14px;", // style for the first part: your accent blue, bold
      "font-size: 13px;" // style for the rest
    );
  }, []);

  return null; // draws nothing on the page
}