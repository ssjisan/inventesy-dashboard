import React from "react";
import { useLocation } from "react-router";

export default function Items() {
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
        d="M9.5 12.25H13.1667"
        stroke={pathname=== "/product" ? "#F53062" : "#757575" }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.7503 8.58325V18.6666H4.91699V8.58325"
        stroke={pathname=== "/product" ? "#F53062" : "#757575" }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.75 4H4.91667C4.41041 4 4 4.41041 4 4.91667V7.66667C4 8.17292 4.41041 8.58333 4.91667 8.58333H17.75C18.2563 8.58333 18.6667 8.17292 18.6667 7.66667V4.91667C18.6667 4.41041 18.2563 4 17.75 4Z"
        stroke={pathname=== "/product" ? "#F53062" : "#757575" }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
