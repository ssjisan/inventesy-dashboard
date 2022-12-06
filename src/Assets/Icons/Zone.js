import React from "react";
import { useLocation } from "react-router";

export default function Zone() {
  const { pathname } = useLocation();

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 2.75V17.4167"
        stroke={pathname === "/zone" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.25 4.58325V19.2499"
        stroke={pathname === "/zone" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.75 2.75L8.25 4.58333L13.75 2.75L19.25 4.58333V19.25L13.75 17.4167L8.25 19.25L2.75 17.4167V2.75Z"
        stroke={pathname === "/zone" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
