import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const cards = [
    {
        link: "/branch/first",
        title: "First Year",
        gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600"
    },
    {
        link: "/branch/second",
        title: "Second Year",
        gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600"
    },
    {
        link: "/branch/third",
        title: "Third Year",
        gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600"
    },
    {
        link: "/branch/fourth",
        title: "Fourth Year",
        gradient: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-600"
    },
];

const CardGrid = () => {
    const router = useRouter();

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Card animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        },
        tap: {
            scale: 0.97,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.1
            }
        }
    };

    // Text reveal animation
    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 0.5
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="py-20 min-h-screen">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto"
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`relative h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer ${card.gradient}`}
                        onClick={() => router.push(card.link)}
                    >
                        {/* Animated Background Elements */}
                        <motion.div
                            className="absolute inset-0 opacity-20"
                            initial={{ backgroundPosition: "0% 0%" }}
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%"],
                                transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                            style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                                backgroundSize: "300px 300px"
                            }}
                        />

                        {/* Animated Gradient Overlay */}
                        <motion.div
                            className="absolute inset-0 mix-blend-overlay opacity-50"
                            initial={{ backgroundPosition: "0% 0%" }}
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%"],
                                transition: {
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 15,
                                    ease: "linear"
                                }
                            }}
                            style={{
                                background: "radial-gradient(circle at top left, transparent 0%, rgba(255,255,255,0.2) 20%, transparent 60%)"
                            }}
                        />

                        {/* Card Content */}
                        <motion.div
                            className="absolute bottom-0 left-0 w-full p-6"
                            variants={textVariants}
                        >
                            <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                            <motion.div
                                className="h-1 w-12 bg-white mt-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>

                        {/* Floating Particles */}
                        <motion.div
                            className="absolute w-16 h-16 rounded-full bg-white opacity-10"
                            initial={{ x: "-10%", y: "10%" }}
                            animate={{
                                x: ["10%", "20%", "10%"],
                                y: ["10%", "40%", "10%"],
                                transition: {
                                    repeat: Infinity,
                                    duration: 10,
                                    ease: "easeInOut"
                                }
                            }}
                        />
                        <motion.div
                            className="absolute w-10 h-10 rounded-full bg-white opacity-10"
                            initial={{ x: "70%", y: "70%" }}
                            animate={{
                                x: ["70%", "60%", "70%"],
                                y: ["70%", "20%", "70%"],
                                transition: {
                                    repeat: Infinity,
                                    duration: 13,
                                    ease: "easeInOut"
                                }
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CardGrid;