import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaRobot, FaLaptopCode, FaTools, FaDatabase, FaLock } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="feature-card"
    >
      <Icon className="text-4xl text-purple-500 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-purple-400 mb-2 font-light italic"
        >
          Magic Unicorn presents...
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Magic Everything Box</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-8"
        >
          Your AI Command Center—Smart, Secure, and Scalable
        </motion.p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FaBrain}
            title="AI-Powered Insights"
            description="Smart data handling with advanced RAG engine for instant knowledge access and analysis."
          />
          <FeatureCard 
            icon={FaRobot}
            title="Automation & Workflow"
            description="Streamline operations with AI-powered task pipelines and intuitive controls."
          />
          <FeatureCard 
            icon={FaLaptopCode}
            title="Developer Flexibility"
            description="Execute administrative tasks and automate system commands through AI."
          />
          <FeatureCard 
            icon={FaTools}
            title="Bolt.diy Integration"
            description="Build custom workflows and connect third-party APIs with modular automation tools."
          />
          <FeatureCard 
            icon={FaDatabase}
            title="Enterprise Scalability"
            description="Handle massive workloads with high-speed storage and multi-GPU support."
          />
          <FeatureCard 
            icon={FaLock}
            title="Security & Control"
            description="Enterprise-grade encryption with complete on-premises infrastructure."
          />
        </div>
      </main>

      <footer className="container mx-auto px-4 py-12 text-center text-gray-400">
        <p>© 2023 Magic Unicorn Presents. All rights reserved.</p>
      </footer>
    </div>
  );
}
