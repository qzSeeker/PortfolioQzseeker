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
    const [chatBoxIsClosed, setChatBoxIsClosed] = useState(false); // Default to open for demo purposes
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, selectedQuestion]);

    useEffect(() => {
        const interval = setInterval(() => {
        if (greetingMessages.length > currentIndex) {
            setMessages((prevMessages) => [
            ...prevMessages,
            { text: greetingMessages[currentIndex], isUser: false },
            ]);
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === greetingMessages.length) {
            clearInterval(interval);
        }
        }, 800);

        return () => clearInterval(interval);
    }, [currentIndex]);

    function handleChatBox() {
        setChatBoxIsClosed(!chatBoxIsClosed);
        console.log("ChatBox is Toggled");
    }

    const handleSelectQuestion = (question) => {
        // Add the selected question to messages
        setMessages((prevMessages) => [
        ...prevMessages,
        { text: question.question, isUser: true },
        ]);

        // Add answers with delay
        if (Array.isArray(question.answers)) {
        question.answers.forEach((answer, index) => {
            setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: answer, isUser: false },
            ]);
            }, (index + 1) * 800); // Delay each answer by 800ms
        });
        } else {
            console.error(
                "Question answers are not in the correct format:",
                question
            );
        }
    };

    return (
        <>
        <div
            className={`h-screen border border-white/15 w-screen md:w-96 md:h-[34rem] fixed md:top-80 top-0 md:right-10 shadow-md md:rounded-md overflow-hidden z-50 ${
            chatBoxIsClosed ? "hidden" : ""
            }`}
        >
            <div className="h-16 w-full bg-[#0b101a] flex justify-between items-center px-8 z-10 top-0 sticky ">
            <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-sm">Qzseeker bot</h1>
                <p className="text-sm">Ask me a question</p>
            </div>
            <img
                src="/close.png"
                onClick={handleChatBox}
                className="h-3 text-white cursor-pointer"
            />
            </div>
            <div className="md:h-[30rem] h-full md:min-w-1/4 w-full backdrop-blur-sm rounded-b-md bg-white/10 overflow-auto">
                    {messages.map((message, index) => (
                    <ul
                        key={index}
                        className={`flex ${
                        message.isUser ? "justify-end" : "justify-start"
                        }`}
                    >
                        <li
                        className={`relative top-2 shadow-md flex mx-4 my-2 p-3 w-max transition duration-150 ease-in
                                        ${
                                        message.isUser
                                            ? "bg-transparent text-white border border-[#0b101a] rounded-full"
                                            : "bg-[#0b101a] text-white rounded-md"
                                        }
                                        `}
                        >
                        {message.text}
                        </li>
                    </ul>
                    ))}
                    {currentIndex === greetingMessages.length && (
                    <div className="">
                        <ul>
                        {questions.map((question) => (
                            <li key={question.id}>
                            <button
                                onClick={() => handleSelectQuestion(question)}
                                className="w-max border border-[#0b101a] rounded-full text-white p-3 m-4 flex flex-col"
                            >
                                {question.question}
                            </button>
                            </li>
                        ))}
                        </ul>
                        <div ref={endRef} className="h-2 scroll-smooth"></div>
                    </div>
                    )}
            </div>
        </div>
    </>
  );
}

export default ChatBot;
