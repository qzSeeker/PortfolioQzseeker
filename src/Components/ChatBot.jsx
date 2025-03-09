import { useEffect, useRef, useState } from "react";

const greetingMessages = [
    "Hello!",
    "Welcome to Qzseeker Bot!",
    "How can I assist you today?",
];

const questions = [
    {
        id: 0,
        question: "Just say Hello Dev!",
        answers: [
        "Hello",
        "Thanks for greeting!",
        "I hope you liked my work.",
        "Is there anything else I can assist you with?",
        ],
    },
    {
        id: 1,
        question: "Hey! What's your story?",
        answers: [
        "I'm a computer science student on a mission to become a software engineer at a big tech company!",
        ],
    },
    {
        id: 2,
        question: "What technologies are you focusing on?",
        answers: [
        "I'm currently learning web development, diving deep into the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        ],
    },
    {
        id: 3,
        question: "What's your ultimate goal?",
        answers: [
        "I'm working hard to master Data Structures and Algorithms (DSA) to ace those tech interviews and land a dream job!",
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
            delay += 800; // Increase delay for each subsequent message
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
        const matchedQuestion = questions.find(
        (q) =>
            q.question.toLowerCase().includes(userInput.toLowerCase()) ||
            userInput.toLowerCase().includes(q.question.toLowerCase())
        );

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
            delay += 800;
            });
        } else {
            // Default response for unrecognized input
            setMessages((prevMessages) => [
            ...prevMessages,
            {
                text: "I'm not sure how to respond to that. Could you try one of the suggested questions?",
                isUser: false,
            },
            ]);
            setIsTyping(false);
        }
        }, 1000);

        setUserInput("");
    };

    return (
        <>
        {!chatBoxIsClosed && (
            <div className="fixed bottom-4 right-4 z-50">
            {minimized ? (
                <button
                onClick={handleMinimize}
                className="bg-[#0b101a] text-gray-800 p-4 rounded-full shadow-lg hover:bg-[#1a2333] transition-all"
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
                className="h-screen md:h-[34rem] w-screen md:w-96 border border-white/15 fixed md:bottom-4 top-0 right-0 md:right-4 shadow-lg rounded-md overflow-hidden transition-all duration-300 flex flex-col"
                style={{
                    backdropFilter: "blur(10px)",
                    background: "rgba(11, 16, 26, 0.8)",
                }}
                >
                {/* Header */}
                <div className="h-16 w-full bg-[#0b101a] flex justify-between items-center px-8 z-10 top-0 sticky border-b border-white/10">
                    <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full text-gray-800 bg-[#adc3eff1] flex items-center justify-center mr-3">
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
                    className="flex-grow overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
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
                        <div className="w-8 h-8 rounded-full bg-[#adc3eff1] text-gray-800 flex items-center justify-center mr-2 flex-shrink-0">
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
                            ? "bg-[#adc3eff1] text-gray-800 rounded-br-none"
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
                        <div className="w-8 h-8 rounded-full text-gray-800 bg-[#adc3eff1] flex items-center justify-center mr-2 flex-shrink-0">
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

                    {/* Question buttons */}
                    {currentIndex === greetingMessages.length && !isTyping && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {questions.map((question) => (
                        <button
                            key={question.id}
                            onClick={() => handleSelectQuestion(question)}
                            className="bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-full px-4 py-2 transition-all duration-200 border border-gray-700"
                        >
                            {question.question}
                        </button>
                        ))}
                    </div>
                    )}

                    <div ref={endRef} />
                </div>

                {/* Input form */}
                <form
                    onSubmit={handleUserInput}
                    className="bg-gray-800 px-6 py-3 border-t border-gray-700"
                >
                    <div className="flex items-center">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow bg-gray-700 text-white rounded-l-full py-2 px-4 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-[#adc3eff1] hover:bg-[#adc3eff1]/90 text-gray-700 rounded-r-full p-2 px-4"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
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
