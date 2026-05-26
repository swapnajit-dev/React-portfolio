import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";

/* ---------- VIDEO CARD ---------- */

const Card = memo(function Card({
  item,
 active,
}) {
  const [loaded, setLoaded] =
    useState(false);

  React.useEffect(() => {
    if (!active) {
      setLoaded(false);
    }
  }, [active]);

  return (
    <div className="w-full h-full relative">

      {/* Thumbnail */}
      <img
        src={item.imgSrc}
        alt={item.name}
        className={`
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-opacity
        duration-500
        ${
          active && loaded
            ? "opacity-0"
            : "opacity-100"
        }
        `}
      />

      {/* Loader */}
      {active && !loaded && (
        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/60
          z-20
          "
        >
          <div
            className="
            w-10
            h-10
            border-4
            border-yellow-500/30
            border-t-[#D4AF37]
            rounded-full
            animate-spin
            "
          />
        </div>
      )}

      {/* Video only when active */}
      {active && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() =>
            setLoaded(true)
          }
          className={`
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-opacity
          duration-500
          ${
            loaded
              ? "opacity-100"
              : "opacity-0"
          }
          `}
        >
          <source
            src={item.videoSrc}
            type="video/mp4"
          />
        </video>
      )}

    </div>
  );
});

export default function SkillCarousel({
  data,
}) {
  const items = useMemo(
    () => data.items,
    [data]
  );

  const [index, setIndex] =
    useState(0);

  const drag = useRef({
    startX: 0,
    currentX: 0,
    isDown: false,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
  });

  const next = useCallback(() => {
    setIndex(
      (p) =>
        (p + 1) %
        items.length
    );
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex(
      (p) =>
        (p -
          1 +
          items.length) %
        items.length
    );
  }, [items.length]);

  const onDown =
    useCallback((e) => {
      const x =
        e.clientX ??
        e.touches?.[0]
          ?.clientX;

      drag.current = {
        ...drag.current,
        isDown: true,
        startX: x,
        currentX: x,
        lastX: x,
        lastTime:
          performance.now(),
      };
    }, []);

  const onMove =
    useCallback((e) => {
      if (
        !drag.current.isDown
      )
        return;

      const x =
        e.clientX ??
        e.touches?.[0]
          ?.clientX;

      const now =
        performance.now();

      const dt =
        now -
          drag.current
            .lastTime || 16;

      drag.current.velocity =
        (x -
          drag.current
            .lastX) /
        dt;

      drag.current.lastX =
        x;

      drag.current.lastTime =
        now;

      drag.current.currentX =
        x;
    }, []);

  const onUp =
    useCallback(() => {
      if (
        !drag.current.isDown
      )
        return;

      const diff =
        drag.current
          .startX -
        drag.current
          .currentX;

      const velocity =
        drag.current
          .velocity;

      drag.current.isDown =
        false;

      if (
        diff > 70 ||
        velocity > 0.45
      )
        next();

      else if (
        diff < -70 ||
        velocity < -0.45
      )
        prev();
    }, [next, prev]);

  const getStyle = (i) => {
    const diff =
      i - index;

    let pos = "hidden";

    if (diff === 0)
      pos = "center";

    else if (
      diff === 1 ||
      diff ===
        -(
          items.length -
          1
        )
    )
      pos = "right";

    else if (
      diff === -1 ||
      diff ===
        items.length - 1
    )
      pos = "left";

    const base = {
      position:
        "absolute",

      transition:
        "all 700ms cubic-bezier(0.22,1,0.36,1)",

      willChange:
        "transform",
    };

    if (pos === "center")
      return {
        ...base,
        transform:
          "translate3d(0,0,0) scale(1.2)",
        opacity: 1,
        filter:
          "blur(0px)",
        zIndex: 10,
      };

    if (pos === "left")
      return {
        ...base,
        transform:
          "translate3d(-360px,0,0) scale(.88)",
        opacity: .25,
        filter:
          "blur(10px)",
        zIndex: 5,
      };

    if (pos === "right")
      return {
        ...base,
        transform:
          "translate3d(360px,0,0) scale(.88)",
        opacity: .25,
        filter:
          "blur(10px)",
        zIndex: 5,
      };

    return {
      ...base,
      opacity: 0,
      transform:
        "scale(.5)",
    };
  };

  return (
    <div className="
    min-h-screen
    bg-[#060608]
    flex
    flex-col
    justify-center
    items-center
    overflow-hidden
    px-4
    text-white
    ">

      <h1 className="
      text-4xl
      sm:text-5xl
      font-bold
      text-[#D4AF37]
      mb-12
      ">
        {data.title}
      </h1>

      <div
        className="
        relative
        h-[650px]
        w-full
        max-w-6xl
        flex
        justify-center
        items-center
        "
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {items.map(
          (item, i) => (
            <div
              key={item.name}
              style={getStyle(
                i
              )}
              onClick={() =>
                setIndex(i)
              }
            >
              <div
              className="
              relative

              w-[320px]
              h-[240px]

              sm:w-[560px]
              sm:h-[380px]

              rounded-3xl
              overflow-hidden

              border
              border-yellow-500/30

              shadow-[0_0_80px_rgba(212,175,55,.12)]
              ">
                <Card
                  item={
                    item
                  }
                  active={
                    i ===
                    index
                  }
                />

                <div
                className="
                absolute
                bottom-0
                left-0
                right-0

                bg-black/60
                backdrop-blur-md

                py-3
                text-center
                ">
                  <h2 className="
                  text-[#D4AF37]
                  font-semibold
                  ">
                    {item.name}
                  </h2>
                </div>

              </div>
            </div>
          )
        )}
      </div>

    </div>
  );
}