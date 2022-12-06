import React from "react";
import { useLocation } from "react-router";

export default function Reports() {
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
        d="M7.33325 15.5833H14.6666"
        stroke={pathname === "/report" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33325 11.9167H12.8333"
        stroke={pathname === "/report" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.24992 4.125H4.58325V19.25H17.4166V4.125H13.7499"
        stroke={pathname === "/report" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 2.75H8.25V4.125V5.5H13.75V4.125V2.75Z"
        stroke={pathname === "/report" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
