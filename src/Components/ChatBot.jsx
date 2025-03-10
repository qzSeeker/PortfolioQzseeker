import { useEffect, useRef, useState } from "react";

    // Expanded questions and answers about professional background
    const greetingMessages = [
    "Hello!",
    "Welcome to Qzseeker Bot!",
    "I'm here to tell you about my creator's skills and experience.",
    "Feel free to ask me anything about their background!",
    ];

    const questions = [
    {
        id: 0,
        question: "Just say Hello!",
        answers: [
        "Hello there! 👋",
        "Thanks for reaching out!",
        "I'm a chatbot designed to share information about my creator.",
        "Feel free to ask about their skills, education, or projects.",
        ],
    },
    {
        id: 1,
        question: "Tell me about yourself",
        answers: [
        "I'm representing a computer science student who's passionate about software development.",
        "They're on a mission to become a software engineer at a leading tech company.",
        "Their journey combines academic learning with practical project experience.",
        "They're particularly interested in web development and data structures & algorithms.",
        ],
    },
    {
        id: 2,
        question: "What technologies do you know?",
        answers: [
        "My creator is proficient in several technologies:",
        "Frontend: React.js, HTML5, CSS3, JavaScript, Tailwind CSS",
        "Backend: Node.js, Express.js, MongoDB",
        "Programming Languages: JavaScript, Python, Java, C++",
        "Tools: Git, GitHub, VS Code, Docker (basics)",
        "They're constantly learning new technologies to expand their skill set.",
        ],
    },
    {
        id: 3,
        question: "What's your educational background?",
        answers: [
        "My creator is pursuing a Bachelor's degree in Computer Science (2021-2025).",
        "They maintain a strong GPA of 3.8/4.0.",
        "Relevant coursework includes Data Structures, Algorithms, Database Management, Web Development, and Software Engineering.",
        "They've also completed several online certifications in web development and programming.",
        ],
    },
    {
        id: 4,
        question: "Tell me about your projects",
        answers: [
        "Here are some notable projects my creator has worked on:",
        "1. E-commerce Platform: Built with MERN stack, featuring user authentication, product management, and payment integration.",
        "2. Task Management App: React-based application with drag-and-drop functionality and data persistence.",
        "3. Weather Dashboard: Uses external APIs to display real-time weather data with interactive visualizations.",
        "4. This Chatbot: Developed using React to showcase their frontend skills and create an interactive resume experience.",
        "You can check out their GitHub profile for more projects and code samples.",
        ],
    },
    {
        id: 5,
        question: "What are your strengths?",
        answers: [
        "My creator's key strengths include:",
        "• Strong problem-solving skills with a methodical approach",
        "• Quick learner who adapts to new technologies efficiently",
        "• Detail-oriented with a focus on clean, maintainable code",
        "• Good communication skills and ability to work in teams",
        "• Passion for continuous learning and improvement",
        ],
    },
    {
        id: 6,
        question: "Do you have any work experience?",
        answers: [
        "My creator has gained valuable experience through:",
        "• Web Development Intern at TechStart (Summer 2023): Worked on frontend development using React.js and contributed to UI improvements",
        "• Freelance Web Developer (2022-Present): Built websites for small businesses and provided maintenance services",
        "• Teaching Assistant for Data Structures course (Fall 2022): Helped students understand complex concepts and grade assignments",
        "• Open Source Contributor: Made contributions to several open-source projects on GitHub",
        ],
    },
    {
        id: 7,
        question: "What are you currently learning?",
        answers: [
        "My creator is currently focusing on:",
        "• Advanced React patterns and performance optimization",
        "• Backend development with Node.js and Express",
        "• Database design and optimization",
        "• Data Structures and Algorithms for technical interviews",
        "• Cloud services (AWS fundamentals)",
        "They believe in continuous learning to stay current with industry trends.",
        ],
    },
    {
        id: 8,
        question: "Why should we hire you?",
        answers: [
        "My creator would be a valuable addition to your team because:",
        "• They bring a strong foundation in computer science fundamentals",
        "• They have practical experience building real-world applications",
        "• They're passionate about writing clean, efficient code",
        "• They're a team player with good communication skills",
        "• They're eager to learn and grow with your organization",
        "• They're committed to delivering high-quality work on schedule",
        ],
    },
    {
        id: 9,
        question: "What are your career goals?",
        answers: [
        "My creator's career goals include:",
        "• Short-term: Secure a software engineering role where they can apply their skills and continue learning",
        "• Medium-term: Grow into a senior developer position with deeper technical expertise",
        "• Long-term: Take on leadership responsibilities and mentor junior developers",
        "They're particularly interested in working on products that solve real-world problems and have meaningful impact.",
        ],
    },
    {
        id: 10,
        question: "How do you approach problem-solving?",
        answers: [
        "My creator approaches problem-solving methodically:",
        "1. Understanding the problem thoroughly before diving into solutions",
        "2. Breaking complex problems into smaller, manageable components",
        "3. Researching existing solutions and best practices",
        "4. Planning the implementation with consideration for edge cases",
        "5. Writing clean, well-documented code",
        "6. Testing thoroughly to ensure reliability",
        "7. Seeking feedback and iterating to improve the solution",
        ],
    },
    {
        id: 11,
        question: "Share your contact information",
        answers: [
        "You can reach my creator through:",
        "• Email: your.email@example.com",
        "• LinkedIn: linkedin.com/in/yourprofile",
        "• GitHub: github.com/yourusername",
        "• Portfolio: yourportfolio.com",
        "They're open to discussing opportunities and would be happy to connect!",
        ],
    },
    {
        id: 12,
        question: "Do you have any certifications?",
        answers: [
        "My creator has earned several certifications:",
        "• Full Stack Web Development (Udemy, 2022)",
        "• React - The Complete Guide (Udemy, 2023)",
        "• JavaScript Algorithms and Data Structures (freeCodeCamp, 2022)",
        "• Introduction to Python Programming (Coursera, 2021)",
        "• Git & GitHub Fundamentals (LinkedIn Learning, 2022)",
        ],
    },
    ];

    function ChatBot() {
    const [chatBoxIsClosed, setChatBoxIsClosed] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [showAllQuestions, setShowAllQuestions] = useState(true);

    const endRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Initial greeting messages with typing animation
    useEffect(() => {
        const interval = setInterval(() => {
        if (greetingMessages.length > currentIndex) {
            setIsTyping(true);

            // Simulate typing delay
            setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: greetingMessages[currentIndex], isUser: false },
            ]);
            setCurrentIndex(currentIndex + 1);
            setIsTyping(false);
            }, 800);
        } else if (currentIndex === greetingMessages.length) {
            clearInterval(interval);
        }
        }, 1500);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Filter questions based on user input
    useEffect(() => {
        if (userInput.trim()) {
        const filtered = questions.filter((q) =>
            q.question.toLowerCase().includes(userInput.toLowerCase())
        );
        setFilteredQuestions(filtered);
        setShowAllQuestions(false);
        } else {
        setFilteredQuestions([]);
        setShowAllQuestions(true);
        }
    }, [userInput]);

    function handleChatBox() {
        setChatBoxIsClosed(!chatBoxIsClosed);
    }

    function handleMinimize() {
        setMinimized(!minimized);
    }

    const handleSelectQuestion = (question) => {
        // Add the selected question to messages
        setMessages((prevMessages) => [
        ...prevMessages,
        { text: question.question, isUser: true },
        ]);

        // Reset input and filtering
        setUserInput("");
        setFilteredQuestions([]);
        setShowAllQuestions(true);

        // Simulate typing indicator
        setIsTyping(true);

        // Add answers with delay
        if (Array.isArray(question.answers)) {
        let delay = 800;
        question.answers.forEach((answer, index) => {
            setTimeout(() => {
            if (index === question.answers.length - 1) {
                setIsTyping(false);
            }
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: answer, isUser: false },
            ]);
            }, delay);
            delay += 1000; // Increase delay for each subsequent message
        });
        } else {
        console.error(
            "Question answers are not in the correct format:",
            question
        );
        setIsTyping(false);
        }
    };

    const handleUserInput = (e) => {
        e.preventDefault();

        if (!userInput.trim()) return;

        // Add user message
        setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, isUser: true },
        ]);

        // Simulate bot thinking
        setIsTyping(true);

        // Check if user input matches any predefined questions
        const searchText = userInput.toLowerCase();
        let matchedQuestion = null;

        // Try to find a direct question match first
        for (const q of questions) {
        if (
            q.question.toLowerCase() === searchText ||
            q.question.toLowerCase().includes(searchText)
        ) {
            matchedQuestion = q;
            break;
        }
        }

        // If no direct match, try to find keyword matches
        if (!matchedQuestion) {
        const keywords = {
            skill: questions.find((q) => q.id === 2),
            tech: questions.find((q) => q.id === 2),
            education: questions.find((q) => q.id === 3),
            degree: questions.find((q) => q.id === 3),
            school: questions.find((q) => q.id === 3),
            project: questions.find((q) => q.id === 4),
            experience: questions.find((q) => q.id === 6),
            work: questions.find((q) => q.id === 6),
            contact: questions.find((q) => q.id === 11),
            email: questions.find((q) => q.id === 11),
            learning: questions.find((q) => q.id === 7),
            study: questions.find((q) => q.id === 7),
            strength: questions.find((q) => q.id === 5),
            "good at": questions.find((q) => q.id === 5),
            hire: questions.find((q) => q.id === 8),
            goal: questions.find((q) => q.id === 9),
            career: questions.find((q) => q.id === 9),
            problem: questions.find((q) => q.id === 10),
            solve: questions.find((q) => q.id === 10),
            cert: questions.find((q) => q.id === 12),
            about: questions.find((q) => q.id === 1),
            yourself: questions.find((q) => q.id === 1),
            hello: questions.find((q) => q.id === 0),
            hi: questions.find((q) => q.id === 0),
        };

        for (const [keyword, question] of Object.entries(keywords)) {
            if (searchText.includes(keyword)) {
            matchedQuestion = question;
            break;
            }
        }
        }

        setTimeout(() => {
        if (matchedQuestion) {
            // Use predefined answers
            let delay = 800;
            matchedQuestion.answers.forEach((answer, index) => {
            setTimeout(() => {
                if (index === matchedQuestion.answers.length - 1) {
                setIsTyping(false);
                }
                setMessages((prevMessages) => [
                ...prevMessages,
                { text: answer, isUser: false },
                ]);
            }, delay);
            delay += 1000;
            });
        } else {
            // Default response for unrecognized input
            setMessages((prevMessages) => [
            ...prevMessages,
            {
                text: "I'm not sure I understand that question. Could you try phrasing it differently or select one of the suggested topics below?",
                isUser: false,
            },
            ]);
            setIsTyping(false);
        }
        }, 1000);

        setUserInput("");
    };

    const getButtonGroups = () => {
        const questionList = showAllQuestions ? questions : filteredQuestions;

        // Create categories
        const categories = {
        "About Me": [0, 1, 5, 9, 10],
        "Education & Skills": [2, 3, 7, 12],
        Experience: [4, 6],
        "Contact & Hiring": [8, 11],
        };

        return (
        <div className="mt-4 space-y-3">
            {Object.entries(categories).map(([category, ids]) => {
            const categoryQuestions = questionList.filter((q) =>
                ids.includes(q.id)
            );
            if (categoryQuestions.length === 0) return null;

            return (
                <div key={category}>
                <p className="text-gray-400 text-xs uppercase font-semibold mb-2">
                    {category}
                </p>
                <div className="flex flex-wrap gap-2">
                    {categoryQuestions.map((question) => (
                    <button
                        key={question.id}
                        onClick={() => handleSelectQuestion(question)}
                        className="bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-full px-4 py-2 transition-all duration-200 border border-gray-700"
                    >
                        {question.question}
                    </button>
                    ))}
                </div>
                </div>
            );
            })}
        </div>
        );
    };

    return (
        <>
        {!chatBoxIsClosed && (
            <div className="fixed bottom-4 right-4 z-50">
            {minimized ? (
                <button
                onClick={handleMinimize}
                className="bg-[#0b101a] text-white p-4 rounded-full shadow-lg hover:bg-[#1a2333] transition-all"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                </button>
            ) : (
                <div
                className="h-[100dvh] md:h-[90dvh] w-screen md:w-[30rem] border border-white/15 fixed md:bottom-4 top-0 right-0 my-auto shadow-lg md:rounded-md overflow-hidden transition-all duration-300 flex flex-col"
                style={{
                    backdropFilter: "blur(10px)",
                    background: "rgba(11, 16, 26, 0.8)",
                }}
                >
                {/* Header */}
                <div className="h-16 w-full bg-[#0b101a] flex justify-between items-center p-4 z-10 top-0 sticky border-b border-white/10">
                    <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-indigo-300 text-gray-700 flex items-center justify-center mr-3">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="font-semibold text-white text-sm">
                        Qzseeker Bot
                        </h1>
                        <div className="flex items-center">
                        <span
                            className={`h-2 w-2 rounded-full ${
                            isTyping
                                ? "bg-green-400 animate-pulse"
                                : "bg-gray-400"
                            } mr-2`}
                        ></span>
                        <p className="text-xs text-gray-300">
                            {isTyping ? "Typing..." : "Online"}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center">
                    <button
                        onClick={handleMinimize}
                        className="p-2 text-gray-300 hover:text-white"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <button
                        onClick={handleChatBox}
                        className="p-2 text-gray-300 hover:text-white ml-1"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    </div>
                </div>

                {/* Chat container */}
                <div
                    ref={chatContainerRef}
                    className="flex-grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
                    style={{ background: "rgba(11, 16, 26, 0.4)" }}
                >
                    {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                        message.isUser ? "justify-end" : "justify-start"
                        } mb-4`}
                    >
                        {!message.isUser && (
                        <div className="w-8 h-8 rounded-full bg-indigo-300 text-gray-800 flex items-center justify-center mr-2 flex-shrink-0">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </div>
                        )}
                        <div
                        className={`max-w-xs rounded-lg shadow-md p-3 ${
                            message.isUser
                            ? "bg-indigo-300 text-gray-800 rounded-br-none"
                            : "bg-gray-800 text-white rounded-bl-none"
                        }`}
                        >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs text-gray-800 block mt-1 text-right">
                            {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            })}
                        </span>
                        </div>
                        {message.isUser && (
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 flex-shrink-0">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        )}
                    </div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                    <div className="flex justify-start mb-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-300 text-gray-800 flex items-center justify-center mr-2 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 shadow-md max-w-xs rounded-bl-none">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div
                            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                            ></div>
                        </div>
                        </div>
                    </div>
                    )}

                    {/* Question buttons - organized by category */}
                    {currentIndex === greetingMessages.length &&
                    !isTyping &&
                    getButtonGroups()}

                    <div ref={endRef} />
                </div>

                {/* Input form */}
                <form
                    onSubmit={handleUserInput}
                    className="bg-gray-800 p-3 border-t border-gray-700"
                >
                    <div className="flex items-center">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ask about skills, education, projects..."
                        className="flex-grow bg-gray-700 text-white rounded-l-full py-2 px-4 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-300 hover:bg-indigo-400 text-gray-800 rounded-r-full p-2 px-4"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                    </div>
                </form>
                </div>
            )}
            </div>
        )}
        </>
    );
}

export default ChatBot;
