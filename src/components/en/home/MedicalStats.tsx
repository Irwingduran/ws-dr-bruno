import React, { useState, useEffect } from 'react';
import { Heart, Star, Stethoscope, Highlighter , LucideIcon } from 'lucide-react';


interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`bg-brandPrimary rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

interface StatCounterProps {
  end: number;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, duration = 8000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span className="text-4xl font-bold">{count}</span>;
};

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <Card className="p-6 flex flex-col items-center justify-center space-y-2">
    <Icon className="w-8 h-8 text-white" />
    <StatCounter end={value} />
    <p className="text-white text-lg">{label}</p>
  </Card>
);

interface Stat {
  icon: LucideIcon;
  value: number;
  label: string;
}

const MedicalStats: React.FC = () => {
  const stats: Stat[] = [
    { icon: Stethoscope, value: 2500, label: "Surgeries" },
    { icon: Heart, value: 11000, label: "Consultations" },
    { icon: Star, value: 10850, label: "Patients helped" },
    { icon: Highlighter , value: 502, label: "Holeps" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default MedicalStats;
