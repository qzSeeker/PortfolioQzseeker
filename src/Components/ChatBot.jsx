import React, { useEffect, useState } from "react";

    const questions = [
    {
        question: "What are you interested in learning about?",
        options: ["My skills", "My experience", "Something else"],
    },
    {
        question: "Which of my skills are you curious about?",
        options: ["React.js", "JavaScript", "Machine Learning"],
    },
    ];

function Chat() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [botResponse, setBotResponse] = useState("");
    const [chatBoxIsClosed, setChatBoxIsClosed] = useState(true);
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Greeting Messages
    const greetingMessages = [
        "Hello!",
        "Welcome to Qzseeker Bot!",
        "How can I assist you today?",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        if (greetingMessages.length > currentIndex) {
            setMessages((prevMessages) => [
            ...prevMessages,
            greetingMessages[currentIndex],
            ]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            clearInterval(interval);
        }
        }, 800);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // handle options
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        const response = generateBotResponse();
        setBotResponse(response);
    };

    // const generateBotResponse = () => {
    //     if (selectedOption !== null) {
    //     const currentQ = questions[currentQuestion];
    //     if (currentQ.question === "What are you interested in learning about?") {
    //         if (selectedOption === "My skills") {
    //         return "Here are some of my key skills: React.js, JavaScript, and Machine Learning.";
    //         } else if (selectedOption === "My experience") {
    //         return "I have experience in building web applications and data analysis projects.";
    //         } else {
    //         return "Let me know if you have any other questions!";
    //         }
    //     } else if (
    //         currentQ.question === "Which of my skills are you curious about?"
    //     ) {
    //         return `You're curious about ${selectedOption}.`;
    //     }
    //     }
    //     return "";
    // };

    function handleChatBox() {
        setChatBoxIsClosed(!chatBoxIsClosed);
        console.log("ChatBox is Close");
    }

    return (
        <>
        {chatBoxIsClosed ? (
            <div className="h-screen w-screen md:w-96 md:h-[62rem] fixed md:top-56 top-0 md:right-10 shadow-md">
            <div className="md:h-3/5 h-full md:min-w-1/4 w-full backdrop-blur-sm bg-white/15 border border-white/10 rounded-md overflow-hidden mb-20">
                <div className="h-16 w-full bg-violet-500 overflow-hidden flex justify-between items-center px-8">
                <div className="flex flex-col justify-center">
                    <h1 className="font-semibold text-sm">Qzseeker bot</h1>
                    <p className="text-sm ">Ask me a question</p>
                </div>
                <img
                    src="src/assets/close.png"
                    onClick={handleChatBox}
                    className="h-3 text-white cursor-pointer"
                />
                </div>

                <div className="">
                {messages.map((message, index) => (
                    <ul className="bg-white text-violet-400 shadow-md flex m-6 p-4 w-max rounded-lg font-semibold" key={index}>
                        <li className="ease-in transition-transform delay-700">{message}</li>
                    </ul>
                ))}
                </div>
                {/* <h1 className="bg-white text-lime-600 text-sm font-semibold rounded-lg p-2 m-3">
                    {questions[currentQuestion]?.question}
                    </h1> */}
                {/* {questions[currentQuestion]?.options.map((option) => (
                    <button
                        className="bg-white rounded-lg text-lime-600 text-sm p-2 font-semibold flex flex-col m-3"
                        key={option}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                    ))}
                    {botResponse && <p>{botResponse}</p>} */}
            </div>
            </div>
        ) : (
            " "
        )}
        </>
    );
}

export default Chat;
