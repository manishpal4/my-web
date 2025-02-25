"use client";
import React from "react";

export default function ImageCard() {
  return (
    <div className="px-7 landscape:flex items-center justify-between py-10 bg-black landscape:h-1/2">
      <div className="mb-10 mr-10">
        <h1 className="text-8xl font-light text-white font-f2">
          Some
          <span className="font-f1 text-8xl font-light">
            <br />
            Glimpses
          </span>
        </h1>
      </div>

      <div className="flex-cols landscape:flex">
        <div className="px-3 py-3">
          <iframe
            src="https://www.behance.net/embed/project/211545055?ilo0=1"
            height="316"
            width="100%"
            allow="clipboard-write"
            title="Behance Project 1"
          ></iframe>
        </div>

        <div className="px-3 py-3">
          <iframe
            src="https://www.behance.net/embed/project/218633515?ilo0=1"
            height="316"
            width="100%"
            allow="clipboard-write"
            title="Behance Project 2"
          ></iframe>
        </div>

        <div className="px-3 py-3">
          <iframe
            src="https://www.behance.net/embed/project/218711963?ilo0=1"
            height="316"
            width="100%"
            allow="clipboard-write"
            title="Behance Project 3"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
