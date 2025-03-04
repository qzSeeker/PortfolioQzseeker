/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ExternalLink } from "lucide-react";

const Card = ({ title, name, date, duration, link }) => {
    return (
        <motion.div
        className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.5,
            ease: "easeOut",
        }}
        >
        <div className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg md:text-xl text-white/90 group-hover:text-white transition-colors">
                {title}
            </h2>
            {link && (
                <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                >
                <ExternalLink className="w-5 h-5" />
                </Link>
            )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 items-center text-white/70 text-sm md:space-x-3">
            <span>{name}</span>
            <span>{date}</span>
            <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
            </div>
            </div>
        </div>

        {/* Subtle overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
        </motion.div>
    );
};

export default Card;