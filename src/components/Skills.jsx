// src/components/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoCPlusPlus,
  BiLogoMongodb,
  BiLogoBootstrap,
  BiLogoJava,
  BiLogoPhp,
  BiLogoPython,
  BiLogoGit,
  BiLogoGithub,
  BiLogoAws,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiPostman, SiExpress, SiTailwindcss } from "react-icons/si";
import { Heading } from "./utility";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const skillsData = [
    {
      name: "HTML/CSS",
      icon: BiLogoHtml5,
      level: 90,
      color: "from-orange-500 to-red-500",
      delay: 0,
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: BiLogoBootstrap,
      level: 85,
      color: "from-purple-500 to-blue-500",
      delay: 0.1,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 88,
      color: "from-cyan-400 to-blue-500",
      delay: 0.15,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: BiLogoJavascript,
      level: 88,
      color: "from-yellow-400 to-yellow-600",
      delay: 0.2,
      category: "frontend",
    },
    {
      name: "React.js",
      icon: BiLogoReact,
      level: 92,
      color: "from-cyan-400 to-blue-500",
      delay: 0.3,
      category: "frontend",
    },
    {
      name: "Node.js",
      icon: BiLogoNodejs,
      level: 87,
      color: "from-green-500 to-emerald-600",
      delay: 0.4,
      category: "backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 85,
      color: "from-gray-600 to-gray-800",
      delay: 0.45,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: BiLogoMongodb,
      level: 85,
      color: "from-green-500 to-lime-500",
      delay: 0.5,
      category: "backend",
    },
    {
      name: "MySQL",
      icon: DiMysql,
      level: 83,
      color: "from-blue-500 to-cyan-500",
      delay: 0.6,
      category: "backend",
    },
    {
      name: "AWS",
      icon: BiLogoAws,
      level: 80,
      color: "from-orange-400 to-yellow-500",
      delay: 0.7,
      category: "tools",
    },
    {
      name: "C & C++",
      icon: BiLogoCPlusPlus,
      level: 82,
      color: "from-blue-600 to-cyan-600",
      delay: 0.8,
      category: "programming",
    },
    {
      name: "Java",
      icon: BiLogoJava,
      level: 84,
      color: "from-orange-500 to-red-600",
      delay: 0.9,
      category: "programming",
    },
    {
      name: "PHP",
      icon: BiLogoPhp,
      level: 81,
      color: "from-violet-500 to-purple-600",
      delay: 1,
      category: "backend",
    },
    {
      name: "Python",
      icon: BiLogoPython,
      level: 86,
      color: "from-blue-400 to-yellow-400",
      delay: 1.1,
      category: "programming",
    },
    {
      name: "Git",
      icon: BiLogoGit,
      level: 89,
      color: "from-red-500 to-orange-600",
      delay: 1.2,
      category: "tools",
    },
    {
      name: "GitHub",
      icon: BiLogoGithub,
      level: 88,
      color: "from-gray-700 to-gray-900",
      delay: 1.3,
      category: "tools",
    },
    {
      name: "Postman",
      icon: SiPostman,
      level: 87,
      color: "from-orange-400 to-orange-600",
      delay: 1.4,
      category: "tools",
    },
  ];

  const filters = [
    { key: "all", label: "All Skills", count: skillsData.length },
    { key: "frontend", label: "Frontend", count: skillsData.filter(s => s.category === "frontend").length },
    { key: "backend", label: "Backend", count: skillsData.filter(s => s.category === "backend").length },
    { key: "programming", label: "Programming", count: skillsData.filter(s => s.category === "programming").length },
    { key: "tools", label: "Tools", count: skillsData.filter(s => s.category === "tools").length },
  ];

  const filteredSkills = skillsData.filter(skill => 
    activeFilter === "all" || skill.category === activeFilter
  );

  const getProficiencyLevel = (level) => {
    if (level >= 90) return { text: "Expert", color: "from-green-500 to-emerald-600" };
    if (level >= 80) return { text: "Advanced", color: "from-blue-500 to-cyan-500" };
    if (level >= 70) return { text: "Intermediate", color: "from-yellow-500 to-orange-500" };
    return { text: "Beginner", color: "from-gray-500 to-gray-700" };
  };

  return (
    <div className="px-4 mt-12 py-12 bg-gradient-to-b from-white to-gray-50">
      <Heading className="text-center mb-8 text-4xl">My Technical Skills</Heading>

      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter.key
                ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
            }`}
          >
            {filter.label}
            <span className={`text-sm px-2 py-1 rounded-full ${
              activeFilter === filter.key 
                ? "bg-white text-green-600" 
                : "bg-gray-200 text-gray-600"
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          const proficiency = getProficiencyLevel(skill.level);
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: skill.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-green-500 h-full flex flex-col">
                {/* Header with Icon and Basic Info */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg w-fit`}
                  >
                    <IconComponent className="text-3xl text-white" />
                  </motion.div>
                  
                  {/* Category Badge */}
                  <span className="text-xs uppercase font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow-0">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">
                      Proficiency
                    </span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Background */}
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: skill.delay + 0.2, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>

                {/* Skill Level Badge */}
                <div className="mt-auto">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${proficiency.color} text-white`}>
                    {proficiency.text}
                  </span>
                </div>

                {/* Hover Effect Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-5 transition-all duration-300`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSkills.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No skills found</h3>
          <p className="text-gray-500">Try selecting a different filter category</p>
        </motion.div>
      )}

      {/* Skills Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
      >
        {[
          { number: skillsData.length, label: "Technical Skills", icon: "🎯" },
          { number: "2+", label: "Years Experience", icon: "📅" },
          { number: "20+", label: "Projects Completed", icon: "✅" },
          { number: "87%", label: "Average Proficiency", icon: "⭐" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 text-center border-l-4 border-green-500 shadow-lg"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">
              {stat.number}
            </h4>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Categories Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          📚 Skills by Category
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filters.filter(f => f.key !== 'all').map((category, idx) => {
            const categorySkills = skillsData.filter(s => s.category === category.key);
            const avgProficiency = Math.round(
              categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
            );
            
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold capitalize">{category.key}</h4>
                  <span className="text-2xl">
                    {category.key === 'frontend' && '🎨'}
                    {category.key === 'backend' && '⚙️'}
                    {category.key === 'programming' && '💻'}
                    {category.key === 'tools' && '🛠️'}
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avg. Proficiency</span>
                    <span className="font-bold text-green-600">{avgProficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                      style={{ width: `${avgProficiency}%` }}
                    />
                  </div>
                </div>

                <ul className="space-y-2">
                  {categorySkills.slice(0, 4).map((skill, skillIdx) => (
                    <motion.li
                      key={skillIdx}
                      whileHover={{ x: 5 }}
                      className="text-gray-700 text-sm font-medium flex items-center gap-2 cursor-pointer"
                    >
                      <span className="text-green-500 font-bold">▸</span>
                      {skill.name}
                    </motion.li>
                  ))}
                  {categorySkills.length > 4 && (
                    <li className="text-gray-500 text-sm">
                      +{categorySkills.length - 4} more...
                    </li>
                  )}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;