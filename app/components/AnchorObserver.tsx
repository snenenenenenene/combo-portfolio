/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";

const AnchorObserver = ({
  children,
  onHitTop,
}: {
  children: React.ReactNode;
  onHitTop: () => void;
}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0, // When the element is fully visible in the viewport
    };

    const observer = new IntersectionObserver(([entry]) => {
      // Call the onHitTop function when the element hits the top of the viewport
      if (entry.intersectionRatio === 1) {
        onHitTop();
        observer.disconnect(); // Disconnect the observer to ensure it's called only once
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [onHitTop]);

  return <div ref={targetRef}>{children}</div>;
};

export default AnchorObserver;
