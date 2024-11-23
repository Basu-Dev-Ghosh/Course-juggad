import React, { useEffect, useRef } from "react";

interface AnimationProps {
  colors?: string[];
  delay?: number;
  duration?: number;
  type?: string;
}

const VideoLoadingAnimation: React.FC<AnimationProps> = ({
  colors = ["rgb(208, 184, 236)"],
  delay = 120,
  duration = 600,
  type = "all",
}) => {
  const bars = useRef<Array<HTMLDivElement | null>>([]);
  const l1bars = useRef<Array<HTMLDivElement | null>>([]);
  const l2bars = useRef<Array<HTMLDivElement | null>>([]);
  const leftBars = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const animate = (
      barRef: React.MutableRefObject<(HTMLDivElement | null)[]>,
      count: number
    ) => {
      barRef.current.forEach((bar, index) => {
        if (bar) {
          setTimeout(() => {
            bar.style.opacity = "1";
            bar.style.backgroundColor = colors[index % colors.length];

            // Fade out after 'duration'
            setTimeout(() => {
              bar.style.opacity = "0";
            }, duration);
          }, index * delay); // Stagger the animation for each bar
        }
      });
    };

    // Animate both sets of bars
    animate(bars, 8);
    animate(leftBars, 2);
    animate(l1bars, 1);
    animate(l2bars, 1);

    // Set up an interval to repeat the animation
    const interval = setInterval(() => {
      animate(bars, 8);
      animate(leftBars, 2);
      animate(l1bars, 1);
      animate(l2bars, 1);
    }, delay * Math.max(bars.current.length, leftBars.current.length) + duration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [colors, delay, duration]);

  if (type == "all") {
    return (
      <div className="animation-container">
        <div className="left">
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                leftBars.current[index] = el;
              }}
              className="bar bar1"
            />
          ))}

          <div>
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  l1bars.current[index] = el;
                }}
                className="bar bar2"
              />
            ))}
          </div>

          <div>
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  l2bars.current[index] = el;
                }}
                className="bar bar2"
              />
            ))}
          </div>
        </div>

        <div className="right">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                bars.current[index] = el;
              }}
              className="bar"
            />
          ))}
        </div>
      </div>
    );
  } else if (type == "description") {
    return (
      <div className="gap-1 flex flex-col">
        <div>
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                l1bars.current[index] = el;
              }}
              className="bar bar2 max-w-3xl"
            />
          ))}
        </div>

        <div>
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                l2bars.current[index] = el;
              }}
              className="bar bar2 max-w-2xl"
            />
          ))}
        </div>
      </div>
    );
  } else if (type == "video") {
    return (
      <div className="gap-1 flex flex-col">
        <div>
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                leftBars.current[index] = el;
              }}
              className="bar bar1"
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="animation-container">
        <div className="left">
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                leftBars.current[index] = el;
              }}
              className="bar bar1"
            />
          ))}

          <div>
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  l1bars.current[index] = el;
                }}
                className="bar bar2"
              />
            ))}
          </div>

          <div>
            {Array.from({ length: 1 }).map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  l2bars.current[index] = el;
                }}
                className="bar bar2"
              />
            ))}
          </div>
        </div>

        <div className="right">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                bars.current[index] = el;
              }}
              className="bar"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default VideoLoadingAnimation;
