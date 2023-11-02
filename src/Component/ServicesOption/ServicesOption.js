import React, { useState } from "react";
import style from "./ServicesOption.module.css";

function ServicesOption({ title, options, arrow }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={isHovered ? style.active : style.notActive}
      onMouseEnter={handleHover}
    
    >
      {arrow} {title}
      {isHovered && (
        <div className={style.servicesDiv} >
          <ul   onMouseLeave={handleLeave}>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default function ServicesOptionList() {
  const serviceOptions = [
    {
      title: "Construction",
      options: [
        "sachin",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Creative & Cultural Fields ",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Education",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Engineering & Scientific",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Food Service",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Hospitality Travel & Transportation",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Information Technology (IT) ",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Law Enforcement & Emergency Services",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    // Add more items here
    {
      title: "Law Enforcement & Emergency Services",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    // Add more items here
  ];

  return (
    <div className={style.main}>
      <ul>
        {serviceOptions.map((item, index) => (
          <ServicesOption
            key={index}
            title={item.title}
            options={item.options}
            arrow={item.arrow}
          />
        ))}
      </ul>
    </div>
  );
}
