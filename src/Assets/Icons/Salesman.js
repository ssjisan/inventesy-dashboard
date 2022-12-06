import React from "react";
import { useLocation } from "react-router";

export default function Salesman() {
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
        d="M14.6667 13.75H7.33341C5.30837 13.75 3.66675 15.3917 3.66675 17.4167V19.25H11.0001H18.3334V17.4167C18.3334 15.3917 16.6918 13.75 14.6667 13.75Z"
        stroke={pathname === "/salesman" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0002 10.0833C13.0252 10.0833 14.6668 8.44171 14.6668 6.41667C14.6668 4.39162 13.0252 2.75 11.0002 2.75C8.97512 2.75 7.3335 4.39162 7.3335 6.41667C7.3335 8.44171 8.97512 10.0833 11.0002 10.0833Z"
        stroke={pathname === "/salesman" ? "#F53062" : "#757575"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
