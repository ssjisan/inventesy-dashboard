import React from "react";
import { useLocation } from "react-router";

export default function DailySales() {
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
        d="M15.5833 15.5833H5.95825L4.12492 2.75H1.83325"
        stroke={pathname === "/daily-sales" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.38672 4.58325H19.2498L16.4998 12.8333H5.56529"
        stroke={pathname === "/daily-sales" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.24984 19.2499C9.26239 19.2499 10.0832 18.4291 10.0832 17.4166C10.0832 16.404 9.26239 15.5833 8.24984 15.5833C7.23731 15.5833 6.4165 16.404 6.4165 17.4166C6.4165 18.4291 7.23731 19.2499 8.24984 19.2499Z"
        stroke={pathname === "/daily-sales" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5833 19.2499C16.5959 19.2499 17.4167 18.4291 17.4167 17.4166C17.4167 16.404 16.5959 15.5833 15.5833 15.5833C14.5708 15.5833 13.75 16.404 13.75 17.4166C13.75 18.4291 14.5708 19.2499 15.5833 19.2499Z"
        stroke={pathname === "/daily-sales" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
