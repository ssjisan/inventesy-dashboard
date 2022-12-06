import React from "react";
import { useLocation } from "react-router";

export default function Dashboard() {
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
        d="M3 5C3 3.89543 3.89543 3 5 3H7.28572C8.39029 3 9.28571 3.89543 9.28571 5V5.19048C9.28571 6.29505 8.39028 7.19048 7.28571 7.19048H5C3.89543 7.19048 3 6.29505 3 5.19048V5Z"
        stroke={pathname === "/" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 11.8096C3 10.705 3.89543 9.80957 5 9.80957H7.28572C8.39029 9.80957 9.28571 10.705 9.28571 11.8096V16.1905C9.28571 17.2951 8.39028 18.1905 7.28571 18.1905H5C3.89543 18.1905 3 17.2951 3 16.1905V11.8096Z"
        stroke={pathname === "/" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9043 5C11.9043 3.89543 12.7997 3 13.9043 3H16.19C17.2946 3 18.19 3.89543 18.19 5V9.38095C18.19 10.4855 17.2946 11.381 16.19 11.381H13.9043C12.7997 11.381 11.9043 10.4855 11.9043 9.38095V5Z"
        stroke={pathname === "/" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9043 16C11.9043 14.8954 12.7997 14 13.9043 14H16.19C17.2946 14 18.19 14.8954 18.19 16V16.1905C18.19 17.295 17.2946 18.1905 16.19 18.1905H13.9043C12.7997 18.1905 11.9043 17.295 11.9043 16.1905V16Z"
        stroke={pathname === "/" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
