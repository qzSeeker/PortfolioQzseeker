import Card from "./Card";
import { motion } from "framer-motion";

const Blogs = () => {
    const cards = [
        {
        title: "Making APIs with MERN Stack",
        name: "QzSeeker",
        date: "Sep 15 2024",
        duration: "3 min read",
        link: "https://qzseeker.hashnode.dev/making-apis-with-mern-stack",
        },
        {
        title: "State Management in React: Making Sense of Context API",
        name: "QzSeeker",
        date: "Sep 11 2024",
        duration: "3 min read",
        link: "https://qzseeker.hashnode.dev/state-management-in-react-making-sense-of-context-api",
        },
        {
        title: "A Beginner's Guide to JavaScript for Web Development",
        name: "QzSeeker",
        date: "Apr 13 2024",
        duration: "3 min read",
        link: "https://qzseeker.hashnode.dev/a-beginners-guide-to-javascript-for-web-development",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4 xl:px-32">
            <motion.h1
            className="text-2xl mb-12 text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            My Blog Posts
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((card, index) => (
                <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                }}
                >
                <Card {...card} />
                </motion.div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Blogs;
