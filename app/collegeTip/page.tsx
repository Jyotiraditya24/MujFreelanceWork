"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  Brain,
  Clock,
  Coffee,
  BookOpen,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ExamTipsPage() {
  // References for scroll animations
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });

  // Parallax scroll effect for hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 15,
    stiffness: 100,
  });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.5]);

  interface Tip {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    iconBg: string;
  }
  // Tips data
  const examTips = [
    {
      icon: <Brain className="w-12 h-12 text-indigo-600" />,
      title: "Active Recall",
      description:
        "Test yourself regularly instead of just re-reading. This strengthens memory pathways and improves retention.",
      color: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100",
    },
    {
      icon: <Clock className="w-12 h-12 text-emerald-600" />,
      title: "Spaced Repetition",
      description:
        "Study material over increasing intervals rather than cramming. This technique optimizes long-term retention.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
    },
    {
      icon: <Coffee className="w-12 h-12 text-amber-600" />,
      title: "Take Strategic Breaks",
      description:
        "Use the Pomodoro technique: study for 25 minutes, then take a 5-minute break to maintain focus and prevent burnout.",
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-rose-600" />,
      title: "Create Summary Sheets",
      description:
        "Condense your notes into one-page summaries with key concepts, formulas, and facts for quick revision.",
      color: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Teach to Learn",
      description:
        "Explain concepts to others or pretend to teach them. This reveals gaps in your understanding and strengthens knowledge.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      icon: <Target className="w-12 h-12 text-purple-600" />,
      title: "Practice Past Papers",
      description:
        "Familiarize yourself with the exam format and common question types by working through previous exam papers.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
    },
  ];

  const TipCard = ({ tip, index }:{tip: Tip, index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`rounded-xl border p-6 shadow-sm ${tip.color}`}
      >
        <div className="flex items-start gap-4">
          <div className={`rounded-full p-3 ${tip.iconBg}`}>{tip.icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-200/80">
      {/* Hero Section with Parallax */}
      <motion.div
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-block mb-2 bg-indigo-100 px-4 py-1 rounded-full border border-indigo-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHeroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-indigo-800 font-medium">
                Exam Success Strategies
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Ace Your Exams with Proven Techniques
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover research-backed strategies to optimize your study
              sessions, maximize retention, and perform at your best on exam
              day.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-lg text-lg">
                Get Study Plan
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-700 hover:bg-indigo-50 px-6 py-6 rounded-lg text-lg"
              >
                Browse All Tips
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200 shadow-lg rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {examTips.map((tip, index) => (
            <TipCard key={index} tip={tip} index={index} />
          ))}
        </div>

        {/* Study Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl overflow-hidden shadow-xl mb-20"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Personalized Study Plan?
              </h2>
              <p className="text-indigo-100 mb-6">
                Our AI-powered tool will analyze your learning style, subject
                needs, and schedule to create a customized study regimen that
                works for you.
              </p>
              <div>
                <Button className="bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-6 rounded-lg text-lg">
                  Generate My Plan
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="h-full flex items-center justify-center p-12">
                <motion.div
                  className="bg-white/95 rounded-xl p-8 shadow-lg max-w-md w-full"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <h3 className="font-bold text-lg text-gray-800 mb-4">
                    Your Study Schedule
                  </h3>
                  {[1, 2, 3].map((day) => (
                    <div
                      key={day}
                      className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                        {day}
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-indigo-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2 mt-2"></div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Johnson",
                course: "Computer Science",
                quote:
                  "These techniques helped me improve my GPA from 3.2 to 3.8 in just one semester. The active recall strategy was a game-changer!",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                name: "Mia Williams",
                course: "Business Administration",
                quote:
                  "I used to cram before exams and forget everything after. The spaced repetition method completely transformed how I study and retain information.",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                name: "Daniel Lee",
                course: "Biological Sciences",
                quote:
                  "Creating summary sheets for my anatomy class saved me countless hours of study time and made complex concepts much easier to understand and remember.",
                gradient: "from-emerald-500 to-teal-600",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-xl opacity-90`}
                ></div>
                <Card className="bg-transparent border-0 relative h-full">
                  <CardContent className="p-6 text-white h-full flex flex-col">
                    <div className="mb-4 text-yellow-300">{"★★★★★"}</div>
                    <p className="italic mb-6 flex-1">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm opacity-80">{testimonial.course}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">
            Start Your Exam Success Journey Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of students who have transformed their study habits
            and achieved their academic goals.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-lg text-lg">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
