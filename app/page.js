"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const wheelsRef = useRef([]);
  const roadLinesRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".hero-letter");
      const stats = gsap.utils.toArray(".stat-card");

      // Initial headline animation
      gsap.set(letters, {
        opacity: 0,
        y: 28,
      });

      // Initial statistics animation
      gsap.set(stats, {
        opacity: 0,
        y: 24,
      });

      // Intro timeline
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .to(letters, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.045,
        })
        .to(
          stats,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
          },
          "-=0.25"
        );

      // Scroll-controlled animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Car movement
      scrollTl.to(
        carRef.current,
        {
          x: () => window.innerWidth + 600,
          rotation: -2,
          ease: "none",
        },
        0
      );

      // Wheel rotation
      scrollTl.to(
        wheelsRef.current,
        {
          rotation: 1080,
          ease: "none",
          transformOrigin: "center center",
        },
        0
      );

      // Road movement
      scrollTl.to(
        roadLinesRef.current,
        {
          x: -2200,
          ease: "none",
        },
        0
      );

      // Hero content movement
      scrollTl.to(
        ".hero-content",
        {
          y: -45,
          opacity: 0.15,
          ease: "none",
        },
        0
      );

      // Hide scroll hint
      scrollTl.to(
        hintRef.current,
        {
          opacity: 0,
          ease: "none",
        },
        0.05
      );

      return () => {
        intro.kill();
        scrollTl.kill();
      };
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={heroRef} className="hero-stage">

      {/* Hero content */}
      <div className="hero-content container-fluid">

        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">

            <h1
              className="hero-title"
              aria-label="WELCOME ITZFIZZ"
            >
              <span className="word">

                {"WELCOME".split("").map((letter, index) => (
                  <span
                    className="hero-letter"
                    key={`welcome-${index}`}
                  >
                    {letter}
                  </span>
                ))}

              </span>

              <span className="title-gap"></span>

              <span className="word">

                {"ITZFIZZ".split("").map((letter, index) => (
                  <span
                    className="hero-letter"
                    key={`itzfizz-${index}`}
                  >
                    {letter}
                  </span>
                ))}

              </span>

            </h1>

          </div>
        </div>

        {/* Statistics */}
        <div className="row justify-content-center stats-row">

          {/* Statistic 1 */}
          <div className="col-6 col-md-3">
            <div className="stat-card">

              <div className="stat-number">
                58%
              </div>

              <div className="stat-description">
                Higher engagement on launch pages
              </div>

            </div>
          </div>

          {/* Statistic 2 */}
          <div className="col-6 col-md-3">
            <div className="stat-card">

              <div className="stat-number">
                23%
              </div>

              <div className="stat-description">
                Lower bounce rate
              </div>

            </div>
          </div>

          {/* Statistic 3 */}
          <div className="col-6 col-md-3">
            <div className="stat-card">

              <div className="stat-number">
                27%
              </div>

              <div className="stat-description">
                Faster time to first interaction
              </div>

            </div>
          </div>

          {/* Statistic 4 */}
          <div className="col-6 col-md-3">
            <div className="stat-card">

              <div className="stat-number">
                40%
              </div>

              <div className="stat-description">
                More returning visitors
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Road */}
      <div className="road">

        <div
          ref={roadLinesRef}
          className="road-lines"
        ></div>

      </div>

      {/* Scroll instruction */}
      <div
        ref={hintRef}
        className="scroll-hint"
      >

        <span className="hint-arrow">
          ↓
        </span>

        SCROLL TO DRIVE

      </div>

      {/* Car */}
      <svg
        ref={carRef}
        className="car"
        viewBox="0 0 500 190"
        role="img"
        aria-label="Orange sports car"
      >

        {/* SVG definitions */}
        <defs>

          <linearGradient
            id="bodyGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >

            <stop
              offset="0%"
              stopColor="#ff7a2f"
            />

            <stop
              offset="55%"
              stopColor="#f4511e"
            />

            <stop
              offset="100%"
              stopColor="#cf3211"
            />

          </linearGradient>

          <linearGradient
            id="glassGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >

            <stop
              offset="0%"
              stopColor="#dcebea"
            />

            <stop
              offset="100%"
              stopColor="#6f8784"
            />

          </linearGradient>

        </defs>

        {/* Car shadow */}
        <ellipse
          cx="250"
          cy="158"
          rx="205"
          ry="16"
          fill="#07110d"
          opacity=".32"
        />

        {/* Main car body */}
        <path
          d="
            M35 123
            C42 104 58 94 84 89
            L164 75
            L214 35
            C225 26 239 21 255 21
            L320 21
            C340 21 356 28 368 41
            L406 82
            L463 93
            C480 96 489 108 489 122
            L489 137
            C489 145 483 150 475 150
            L30 150
            C21 150 16 143 19 134
            Z
          "
          fill="url(#bodyGradient)"
        />

        {/* Front window */}
        <path
          d="
            M184 73
            L220 43
            C228 37 238 33 250 33
            L282 33
            L282 74
            Z
          "
          fill="url(#glassGradient)"
        />

        {/* Rear window */}
        <path
          d="
            M291 33
            L319 33
            C334 33 344 38 353 48
            L375 74
            L291 74
            Z
          "
          fill="url(#glassGradient)"
        />

        {/* Window divider */}
        <rect
          x="282"
          y="32"
          width="8"
          height="45"
          rx="2"
          fill="#1d2c28"
        />

        {/* Front light */}
        <path
          d="
            M457 101
            L481 108
            L482 119
            L454 116
            Z
          "
          fill="#ffe06b"
        />

        {/* Rear light */}
        <path
          d="
            M28 107
            L48 101
            L54 113
            L27 118
            Z
          "
          fill="#e7f5f2"
        />

        {/* Side detail */}
        <path
          d="
            M86 103
            C170 91 338 91 420 105
          "
          fill="none"
          stroke="#ff9a65"
          strokeWidth="4"
          opacity=".7"
        />

        {/* Front wheel */}
        <g
          ref={(element) => {
            wheelsRef.current[0] = element;
          }}
        >

          <circle
            cx="119"
            cy="143"
            r="35"
            fill="#111"
          />

          <circle
            cx="119"
            cy="143"
            r="19"
            fill="#aeb9b5"
          />

          <circle
            cx="119"
            cy="143"
            r="8"
            fill="#1c2824"
          />

          <path
            d="
              M119 124
              V162
              M100 143
              H138
              M106 130
              L132 156
              M132 130
              L106 156
            "
            stroke="#25332e"
            strokeWidth="4"
          />

        </g>

        {/* Rear wheel */}
        <g
          ref={(element) => {
            wheelsRef.current[1] = element;
          }}
        >

          <circle
            cx="385"
            cy="143"
            r="35"
            fill="#111"
          />

          <circle
            cx="385"
            cy="143"
            r="19"
            fill="#aeb9b5"
          />

          <circle
            cx="385"
            cy="143"
            r="8"
            fill="#1c2824"
          />

          <path
            d="
              M385 124
              V162
              M366 143
              H404
              M372 130
              L398 156
              M398 130
              L372 156
            "
            stroke="#25332e"
            strokeWidth="4"
          />

        </g>

      </svg>

    </main>
  );
}