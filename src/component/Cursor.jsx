import { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const speed = 0.25; // 🔥 increase = more responsive, decrease = more lag

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot = instant (real cursor feel)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      // faster follow (less lag)
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    const hoverables = document.querySelectorAll("a, button, [data-cursor]");

    const onEnter = () => ring.classList.add("hovered");
    const onLeave = () => ring.classList.remove("hovered");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default Cursor;