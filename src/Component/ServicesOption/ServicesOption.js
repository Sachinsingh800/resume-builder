import React, { useState } from "react";
import style from "./ServicesOption.module.css";

function ServicesOption({ title, options }) {
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
      onMouseLeave={handleLeave}
    >
     {title}
      {isHovered && (
        <div className={style.servicesDiv} onMouseLeave={handleLeave}>
          <span className={style.arrow}>◀</span>
          <ul>
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
      title: "Software Developer 1",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
        "Option 11",
        "Option 12",
        "Option 13",
        "Option 14",
        "Option 15",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 2",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 3",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 4",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 5",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 6",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
    },
    {
      title: "Software Developer 7",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
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
          />
        ))}
      </ul>
    </div>
  );
}
