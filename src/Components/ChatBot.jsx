import React, { useEffect, useState } from "react";

    // Greeting Messages
    const greetingMessages = [
        "Hello!",
        "Welcome to Qzseeker Bot!",
        "How can I assist you today?",
    ];
    // Questions
    const questions = [
        {
            question: "Just say Hello Dev!",
            answers: ["Hello", "Thanks for greeting!", "I hope you liked my work.", "is there anything else I can assist you with?"],
        },
        {
            question: "Which tech stack you are using?",
            answers: ["React.js", "JavaScript", "Machine Learning"],
        },
    ];    

function Chat() {
    // const [currentQuestion, setCurrentQuestion] = useState(null);
    // const [isQuestionShowing, setIsQuestionShowing] = useState(false);
    const [chatBoxIsClosed, setChatBoxIsClosed] = useState(true);
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
        if (greetingMessages.length > currentIndex) {
            setMessages((prevMessages) => [
            ...prevMessages,
            greetingMessages[currentIndex],
            ]);
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex === greetingMessages.length) {
            clearInterval(interval);
        }
        }, 800);

        return () => clearInterval(interval);
    }, [currentIndex, greetingMessages.length]);

    setTimeout(() => {
        return questions;
    }, 1200);

    // const handleNextQuestion = () => {
    //     if (questions.length > 1 && currentIndex < questions.length - 1) {
            
    //         setCurrentQuestion(questions[currentIndex + 1]);
    //         setCurrentIndex(currentIndex + 1);
    //     } else {
    //       // Handle the end of questions (optional: reset or provide feedback)
    //     }
    // };

    // handling chatbox
    function handleChatBox() {
        setChatBoxIsClosed(!chatBoxIsClosed);
        console.log("ChatBox is Close");
    }

    const handleSelectQuestion = (question) => {
        setSelectedQuestion(question);
    }

    return (
        <>
        {chatBoxIsClosed ? (
            <div className="h-screen w-screen md:w-96 md:h-[56rem] fixed md:top-56 top-0 md:right-10 shadow-md rounded-md overflow-hidden">
                    <div className="h-16 w-full bg-violet-500 flex justify-between items-center px-8 z-10 sticky">
                        <div className="flex flex-col justify-center">
                            <h1 className="font-semibold text-sm">Qzseeker bot</h1>
                            <p className="text-sm ">Ask me a question</p>
                        </div>
                        <img src="/close.png" onClick={handleChatBox} className="h-3 text-white cursor-pointer"/>
                    </div>
                <div className="md:h-3/5 h-full md:min-w-1/4 w-full backdrop-blur-sm rounded-b-md bg-white/10 mb-20 overflow-auto">
                    <div>
                    {messages.map((message, index) => (
                        <ul key={index}>
                            <li className="bg-white text-violet-400 font-semibold shadow-md flex m-4 p-3 w-max rounded-md transition duration-150 ease-in">
                                {message}
                            </li>
                        </ul>
                    ))}
                    </div>
                    {currentIndex === greetingMessages.length && questions.length > 0 && (
                        <div>
                            <ul>
                                {questions.map((question, index) => (
                                    <li key={index}>
                                        <button onClick={handleSelectQuestion} className="w-max border border-violet-400 rounded-full text-violet-400 p-3 m-4 font-semibold flex flex-col">{question.question}</button>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                            {selectedQuestion && (
                                <div>
                                    <p>{selectedQuestion.question}</p>
                                    <ul>
                                        <li className="bg-white text-violet-400 font-semibold shadow-md flex m-4 p-3 w-max rounded-md overflow-hidden" key={index}>{answer}</li>
                                    </ul>
                                </div>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            " "
        )}
        </>
    );
}

export default Chat;
