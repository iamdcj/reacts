import React, { useLayoutEffect, useEffect, useRef } from "react";

export interface CounterProps {}

const ScrollTo: React.SFC<CounterProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('1. SCROLL TO: useEffect'); // this will always fire after a repaint
  }, []);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    console.log('2. SCROLL TO: useLayoutEffect'); // this will always fire before a repaint
    
    const handleScroll = () => {
      // Smoothly scroll to the top of the container
      window.document.documentElement?.scrollTo({
        top: inner?.getBoundingClientRect().top,
        behavior: "smooth",
      });
    };

    handleScroll();
  }, []);

  return (
    <div ref={containerRef} style={{ display: 'flex', height: 10000, background: "red" }}>
      <div
        ref={innerRef}
        style={{ marginTop: 1000, background: "green", height: 50 }}
      >
        Oi Oi
      </div>
    </div>
  );
};

export default ScrollTo;
