import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    lastname: z.string().min(3, { message: "Last name must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
    query: z.string().min(10, { message: "Message must be at least 10 characters" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("✅ Message sent successfully! I'll reply soon.");
      reset();
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-2xl rounded-2xl p-8 bg-white border-2 border-green-200"
      >
        <h2 className="py-4 text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          📬 Get In Touch
        </h2>

        <p className="text-center text-gray-700 font-semibold mb-8">
          Have a question or project idea? Let's connect!
        </p>

        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-gray-900 font-bold mb-2">First Name *</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your first name"
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
            />
            {errors?.name && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.name?.message}</p>
            )}
          </motion.div>

          {/* Last Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-gray-900 font-bold mb-2">Last Name *</label>
            <input
              {...register("lastname")}
              type="text"
              placeholder="Your last name"
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
            />
            {errors?.lastname && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.lastname?.message}</p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-900 font-bold mb-2">Email *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
            />
            {errors?.email && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.email?.message}</p>
            )}
          </motion.div>

          {/* Phone Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-gray-900 font-bold mb-2">Phone *</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+91-XXXX-XXXX"
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
            />
            {errors?.phone && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.phone?.message}</p>
            )}
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-gray-900 font-bold mb-2">Subject *</label>
            <input
              {...register("subject")}
              type="text"
              placeholder="What is this about?"
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
            />
            {errors?.subject && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.subject?.message}</p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="block text-gray-900 font-bold mb-2">Message *</label>
            <textarea
              {...register("query")}
              placeholder="Tell me about your project or question..."
              disabled={loading}
              className="outline-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-900 w-full resize-none focus:border-green-500 focus:shadow-lg transition-all disabled:opacity-50 font-semibold"
              rows="5"
            />
            {errors?.query && (
              <p className="text-red-600 font-bold pt-1 text-sm">❌ {errors?.query?.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg border-2 border-green-700 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block"
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  📤 Send Message
                </>
              )}
            </motion.button>
          </motion.div>

        
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;