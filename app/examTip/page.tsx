"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExamTips69() {
  return (
    // Add top padding so content doesn't hide behind the fixed navbar
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.header
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/exam-hero.jpg')` }} // Replace with your hero image path
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-blue-600 opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            EXAM TIPS 69 🚀
          </motion.h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700">
            Feeling overwhelmed by exam stress? 😰 Welcome to{" "}
            <strong>Exam Tips 69</strong> – your ultimate guide to exam success!
            Here, you'll find proven strategies, bonus tips, and personalized
            mentorship to help you ace your exams. 🎯
          </p>
        </motion.section>

        {/* Table of Contents */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 className="text-3xl font-semibold mb-4">
            Contents 🔥
          </motion.h2>
          <ul className="list-decimal list-inside space-y-2">
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Use #preparation. The section below has scroll-mt to offset the navbar */}
              <a href="#preparation" className="text-blue-600 hover:underline">
                Exam Preparation Strategies 📚
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#bonus-tips" className="text-blue-600 hover:underline">
                Bonus Tips for Exam Success 💡
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#mentor" className="text-blue-600 hover:underline">
                Meet Your Topmate Mentor 🤓
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#conclusion" className="text-blue-600 hover:underline">
                Conclusion 🎉
              </a>
            </motion.li>
          </ul>
        </motion.section>

        {/* Exam Preparation Strategies Section */}
        {/* Use scroll-mt to ensure heading is visible below the navbar */}
        <motion.section
          id="preparation"
          className="mb-12 scroll-mt-24"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Exam Preparation Strategies 📖
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Begin with a clear plan to maximize your study sessions. Here are
            some essential strategies:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Create a realistic study schedule and stick to it. 📆</li>
            <li>Prioritize topics based on past exam trends. 🔍</li>
            <li>Practice with previous year question papers. 📝</li>
            <li>Maintain a balanced routine with regular breaks. ⏰</li>
            <li>Utilize active recall and spaced repetition techniques. 🔄</li>
          </ul>
        </motion.section>

        {/* Bonus Tips Section */}
        <motion.section
          id="bonus-tips"
          className="mb-12 scroll-mt-24"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Bonus Tips for Exam Success 🎯
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Beyond basic preparation, these bonus tips will give you the extra
            edge:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Arrive early to the exam hall to settle in. ⏱️</li>
            <li>Read instructions carefully before starting the exam. 📜</li>
            <li>
              Focus on your strengths and tackle challenging questions
              strategically. 💪
            </li>
            <li>Take deep breaths and maintain a calm mindset. 😌</li>
          </ul>
        </motion.section>

        {/* Topmate Mentorship Section */}
        <motion.section
          id="mentor"
          className="mb-12 bg-white shadow-lg rounded-lg p-8 scroll-mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Meet Your Topmate Mentor 🤩
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/3 mb-4 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Image
                src="/images/topmate.jpg" // Replace with your mentor image path
                alt="Topmate Mentor"
                className="rounded-full w-48 h-48 object-cover mx-auto"
                width={192}
                height={192}
              />
            </motion.div>
            <motion.div
              className="md:w-2/3 md:pl-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xl text-gray-700">
                Hi, {`I’m `} Alex your Topmate mentor. Having navigated the
                challenges of exam stress myself,{` I’m`} here to offer
                guidance, answer your questions, and provide the support you
                need to succeed. {`Let’s`} crush those exams together! 💥
              </p>
              <div className="mt-4 text-center md:text-left">
                <motion.button
                  className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect with Me 🤝
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Conclusion Section */}
        <motion.section
          id="conclusion"
          className="mb-12 scroll-mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Conclusion 🎉</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With well-planned strategies, these bonus tips, and the guidance of
            your Topmate mentor, {`you’re `}set to tackle your exams with
            confidence. Stay focused, keep practicing, and remember that your
            hard work will pay off. Good luck and ace your exams! 🍀
          </p>
        </motion.section>
      </main>

      <footer className="bg-gray-200 py-4 mt-16">
        <p className="text-center text-gray-600">
          © 2025 MUJTOPPER. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
