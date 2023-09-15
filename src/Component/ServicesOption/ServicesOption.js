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
      onMouseLeave={handleLeave}
    >
      {arrow} {title}
      {isHovered && (
        <div className={style.servicesDiv} onMouseLeave={handleLeave}>
          {/* <span className={style.arrow}>{arrow}</span> */}
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
      title: "Software Developer 2",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Software Developer 3",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Software Developer 4",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Software Developer 5",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Software Developer 6",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        // Add more options here
      ],
      arrow: "▶",
    },
    {
      title: "Software Developer 7",
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
