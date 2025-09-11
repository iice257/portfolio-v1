"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-75",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 