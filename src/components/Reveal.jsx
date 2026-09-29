import { useEffect, useRef, useState } from "react";

/**
 * Fades + slides children up when they enter the viewport.
 * Respects prefers-reduced-motion via the CSS in index.css.
 *
 * Usage:
 *   <Reveal><h2>Title</h2></Reveal>
 *   <Reveal as="li" delay={80}>Item</Reveal>
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
