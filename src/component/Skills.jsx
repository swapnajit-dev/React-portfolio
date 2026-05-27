import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Languages",
    items: [
      {
        name: "C",
        logo: "/images/trans/image (13).png",
      color:""
    },
      {
        name: "Java",
        logo: "/images/trans/image (6).png",
      color:"#43191A"
    },
      {
        name: "Python",
        logo: "/images/trans/python.png",
      color:"#2D6189"
    },
      {
        name: "JavaScript",
        logo: "/images/trans/image (14).png",
      color:"#EFBF22"
    },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        name: "HTML",
        logo: "/images/trans/image (4).png",
      color:"#E97647"
    },
      {
        name: "CSS",
        logo: "/images/trans/css (2).png",
      color:"#2674C6"
    },
      {
        name: "React",
        logo: "/images/trans/react.png",
      color:"#01D8FC"
    },
      {
        name: "Angular",
        logo: "/images/trans/Angular2.png",
      color:"red"
    },
    ],
  },
 {
    title: "UI Design",
    items: [
     
      {
        name: "Tailwind",
        logo: "/images/trans/image (1).png",
      color:"#20C3BE"
    },
      {
        name: "Bootstrap",
        logo: "/images/trans/image (8).png",
      color:"#B582F9"
    },
      {
        name: "GSAP",
        logo: "/images/trans/image (10).png",
      color:"#93D300"
    },
      {
        name: "Three",
        logo: "/images/trans/image (2).png",
      color:"white"
    },
    {
      name: "Material UI",
      logo: "/images/trans/MUI.png",
      color: "#0180FE"
    },
     {
      name: "Framer Motion",
      logo: "/images/trans/frame.png",
      color: "#BB4B97"
    },

    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "/images/trans/image (3).png",
      color:"#6DA75D"
    },
      {
        name: "Express",
        logo: "/images/trans/image (15).png",
      color:"#828282"
    },
      {
        name: "Django",
        logo: "/images/trans/image (12).png",
      color:"#078140"
    },
      {
        name: "PHP",
        logo: "/images/trans/php.png",
      color:"#767BB4"
    },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        logo: "/images/trans/image (16).png",
      color:"#5AB14B"
    },
      {
        name: "MySQL",
        logo: "/images/trans/image (9).png",
      color:"#4479A1"
    },
    {
        name: "PostgreSQL",
        logo: "/images/trans/postgr.png",
      color:"#346993"
    },
    {
        name: "SqlLite",
        logo: "/images/trans/sqliter.png",
      color:"#7DC6EE"
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
      px-4 overflow-hidden
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
                {item.items.map((skill) => (
  <div
    key={skill.name}
    className="
      group
      flex flex-col items-center gap-2
      bg-white/5 border border-white/10
      rounded-xl p-4
      hover:scale-105 transition-all duration-300
    "
  >
    <img
      src={skill.logo}
      alt={skill.name}
      className="
        w-14 h-14 object-contain
        transition-all duration-300
        group-hover:scale-110
      "
      style={{
        filter: `drop-shadow(0 0 0px ${skill.color})`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter =
          `drop-shadow(0 0 8px ${skill.color})
           drop-shadow(0 0 20px ${skill.color})
           drop-shadow(0 0 35px ${skill.color})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter =
          `drop-shadow(0 0 0px ${skill.color})`;
      }}
    />

    <span className="text-sm text-white/90">
      {skill.name}
    </span>
  </div>
))}
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