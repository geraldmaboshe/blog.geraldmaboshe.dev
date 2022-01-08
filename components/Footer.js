import React, { Component } from "react";

export function Footer() {
  const date = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="text-center">
      <p>Happy {weekDays[date.getDay()]}!</p>
      <p>&copy; {date.getFullYear()}. Gerald Maboshe</p>
    </div>
  );
}

export default Footer;
