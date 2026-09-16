import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
