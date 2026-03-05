import { useEffect, useRef, useState } from "react";
import { Recycle, TreePine, Factory, Award } from "lucide-react";

const stats = [
  { icon: Recycle, value: 20, suffix: "M+", label: "Tons Processed", unit: "tons" },
  { icon: TreePine, value: 2500, suffix: "+", label: "Acres Reclaimed", unit: "acres" },
  { icon: Factory, value: 500, suffix: "+", label: "Machines Delivered", unit: "units" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience", unit: "years" },
];

const CounterSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-primary-foreground">
            <stat.icon className="h-10 w-10 mx-auto mb-3 opacity-80" />
            <div className="font-heading text-4xl md:text-5xl font-bold">
              {inView ? <AnimatedNumber value={stat.value} /> : 0}{stat.suffix}
            </div>
            <p className="mt-1 text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}</>;
};

export default CounterSection;
