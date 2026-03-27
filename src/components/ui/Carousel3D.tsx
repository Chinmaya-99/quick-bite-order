import { useState } from "react";
import {foodItems} from "../../assets/cardfood"

export default function Carousel3D() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="w-full h-[350px] flex items-center justify-center overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute"
        style={{
          width: "100px",
          height: "150px",
          top: "25%",
          left: "calc(50% - 50px)",
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          animation: "rotate 20s linear infinite",
          animationPlayState: paused ? "paused" : "running",

        }}
      >
        {foodItems.map((items, i) => (
          <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            key={i}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${(360 / 10) * i}deg) translateZ(250px)`,
            }}
          >
                <div className="card rounded-xl overflow-hidden border-2 relative">

                  <img
                    src={items.img}
                    className="w-full h-full object-cover"
                    alt={items.name}
                  />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}