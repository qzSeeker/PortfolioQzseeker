import React, { useState } from "react";

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

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        const response = generateBotResponse();
        setBotResponse(response);
    };

    const generateBotResponse = () => {
        if (selectedOption !== null) {
            const currentQ = questions[currentQuestion];
            if (currentQ.question === "What are you interested in learning about?") {
                if (selectedOption === "My skills") {
                    return "Here are some of my key skills: React.js, JavaScript, and Machine Learning.";
                } else if (selectedOption === "My experience") {
                    return "I have experience in building web applications and data analysis projects.";
                } else {
                    return "Let me know if you have any other questions!";
                }
            } else if (currentQ.question === "Which of my skills are you curious about?") {
                return `You're curious about ${selectedOption}.`;
            }
        }
        return "";
    };

    return (
        <div className="fixed h-2/4 w-1/6 bg-white/15 border border-white/10 rounded-md overflow-hidden right-16 bottom-16">
            <div className="h-16 w-full bg-lime-600 overflow-hidden flex flex-col justify-center pl-4">
                <h1 className="font-semibold text-sm">Qzseeker bot</h1>
                <p className="text-sm ">Ask me a question</p>
            </div>
            <h1 className="bg-white text-lime-600 text-sm font-semibold rounded-lg p-2 m-3">{questions[currentQuestion]?.question}</h1>
            {questions[currentQuestion]?.options.map((option) => (
                <button className="bg-white rounded-lg text-lime-600 text-sm p-2 font-semibold flex flex-col m-3" key={option} onClick={() => handleOptionClick(option)}>
                    {option}
                </button>
            ))}
            {botResponse && <p>{botResponse}</p>}
        </div>
    );
}

export default Chat;