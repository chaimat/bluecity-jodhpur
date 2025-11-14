import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';

const useInView = () => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
};

const testimonials = [
  {
    quote: "Joining Blue City Parivar was the best decision. It feels like home again in Ahmedabad. The warmth and support from everyone is incredible.",
    name: "Rajesh Rathore",
    role: "Member since 2018",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    quote: "My children are growing up connected to our roots. They learn our traditions, speak our language, and celebrate our festivals with pride.",
    name: "Priya Shekhawat",
    role: "Member since 2020",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    quote: "The community has been a pillar of support during tough times. More than members, we've become one big family.",
    name: "Vikram Singh",
    role: "Member since 2019",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
];

export const Stories: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="stories"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-blue-city-background via-white to-blue-city-secondary/20 relative overflow-hidden"
    >
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-city-accent uppercase tracking-wider mb-2">
            Community Voices
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-blue-city-text mb-4">
            Stories from Our <span className="text-gradient">Parivar</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our members have to say about being part of Blue City Parivar.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            >
              <Card className="h-full relative">
                <CardContent className="space-y-6">
                  {/* Quote Icon */}
                  <div className="text-6xl text-blue-city-primary/20 font-serif leading-none">
                    "
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed text-lg -mt-8">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-blue-city-secondary/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-city-primary/20"
                    />
                    <div>
                      <div className="font-semibold text-blue-city-text">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-city-primary to-blue-city-accent p-12 rounded-3xl shadow-soft-lg">
            <p className="text-2xl md:text-3xl text-white font-display italic leading-relaxed">
              "In Ahmedabad, we found a new home. In Blue City Parivar, we found our family."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




