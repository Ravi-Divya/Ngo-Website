/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  end: string;
  duration?: number;
}

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const endValue = parseFloat(end.replace(/[^\d.]/g, ''));
  const suffix = end.replace(/[0-9.]/g, '');
  const hasDecimal = end.includes('.');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * endValue);
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isInView, endValue, duration]);

  const displayCount = hasDecimal ? count.toFixed(1) : Math.floor(count);
  
  return <span ref={ref}>{displayCount}{suffix}</span>;
}
