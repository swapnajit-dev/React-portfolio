import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Languages",
    items: [
      {
        name: "C",
        logo: "/images/c.gif",
      },
      {
        name: "C++",
        logo: "/images/cpp.gif",
      },
      {
        name: "Python",
        logo: "/images/python.gif",
      },
      {
        name: "JavaScript",
        logo: "/images/javascript.gif",
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        name: "HTML",
        logo: "/images/html.gif",
      },
      {
        name: "CSS",
        logo: "/images/css.gif",
      },
      {
        name: "React",
        logo: "/images/react.gif",
      },
      {
        name: "Tailwind",
        logo: "/images/tailwind.gif",
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "/images/node.gif",
      },
      {
        name: "Express",
        logo: "/images/express.gif",
      },
      {
        name: "Django",
        logo: "/images/django.gif",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        logo: "/images/mongodb.gif",
      },
      {
        name: "MySQL",
        logo: "/images/mysql.gif",
      },
    ],
  },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);
  const startX = useRef(0);

  const next = () => {
    if (lockRef.current) return;

    lockRef.current = true;

    setIndex((p) => (p + 1) % data.length);

    setTimeout(() => {
      lockRef.current = false;
    }, 650);
  };

  const prev = () => {
    if (lockRef.current) return;

    lockRef.current = true;

    setIndex((p) =>
      (p - 1 + data.length) % data.length
    );

    setTimeout(() => {
      lockRef.current = false;
    }, 650);
  };

  useEffect(() => {
    const handler = (e) => {
      const delta =
        Math.abs(e.deltaX) >
        Math.abs(e.deltaY)
          ? e.deltaX
          : e.deltaY;

      if (Math.abs(delta) < 30) return;

      delta > 0 ? next() : prev();
    };

    window.addEventListener(
      "wheel",
      handler,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "wheel",
        handler
      );
  }, []);

  const onStart = (e) => {
    startX.current =
      e.touches[0].clientX;
  };

  const onEnd = (e) => {
    const diff =
      startX.current -
      e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50)
      return;

    diff > 0 ? next() : prev();
  };

  const getStyle = (i) => {
    const diff =
      (i - index + data.length) %
      data.length;

    let pos = "hidden";

    if (i === index)
      pos = "center";
    else if (diff === 1)
      pos = "right";
    else if (
      diff ===
      data.length - 1
    )
      pos = "left";

    const base = {
      position: "absolute",
      transition:
        "all 700ms cubic-bezier(0.22,1,0.36,1)",
    };

    if (pos === "center")
      return {
        ...base,
        transform:
          "translateX(0) scale(1.15)",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 10,
      };

    if (pos === "left")
      return {
        ...base,
        transform:
          "translateX(-280px) scale(0.92)",
        opacity: 0.35,
        filter: "blur(6px)",
        zIndex: 5,
      };

    if (pos === "right")
      return {
        ...base,
        transform:
          "translateX(280px) scale(0.92)",
        opacity: 0.35,
        filter: "blur(6px)",
        zIndex: 5,
      };

    return {
      ...base,
      opacity: 0,
      transform: "scale(.6)",
    };
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#060608]
      text-white
      flex
      flex-col
      items-center
      justify-center
      px-4
      overflow-hidden
    "
    >
      <h1
        className="
        text-4xl
        font-bold
        mb-10
        border-b
        border-yellow-500/30
        pb-3
      "
      >
        Skills
      </h1>

      <div
        onTouchStart={onStart}
        onTouchEnd={onEnd}
        className="
        relative
        w-full
        max-w-5xl
        h-[520px]
        flex
        items-center
        justify-center
        "
      >
        {data.map((item, i) => (
          <div
            key={i}
            style={getStyle(i)}
          >
            <div
              className="
              w-[440px]
              bg-[#0d0d12]/90
              backdrop-blur-xl
              border
              border-yellow-500/20
              rounded-3xl
              p-8
              shadow-[0_0_60px_rgba(212,175,55,0.08)]
            "
            >
              <h2
                className="
                text-yellow-400
                text-3xl
                font-bold
                mb-7
              "
              >
                {item.title}
              </h2>

              <div
                className="
                grid
                grid-cols-2
                gap-5
                "
              >
                {item.items.map(
                  (skill) => (
                    <div
                      key={skill.name}
                      className="
                      flex
                      flex-col
                      items-center
                      gap-2
                      bg-white/5
                      border
                      border-white/10
                      rounded-xl
                      p-4
                      hover:scale-105
                      transition
                      "
                    >
                      <img
                        src={
                          skill.logo
                        }
                        alt={
                          skill.name
                        }
                        className="
                        w-14
                        h-14
                        object-contain
                        "
                      />

                      <span
                        className="
                        text-sm
                        text-white/90
                        "
                      >
                        {skill.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-white/40 mt-6">
        Swipe / Scroll /
        Trackpad Supported
      </p>
    </div>
  );
}