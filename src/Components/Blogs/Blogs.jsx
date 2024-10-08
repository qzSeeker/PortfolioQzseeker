import React from "react";
import Card from "./Card";

function Blogs() {
    const cards = [
        {
            title: "Making APIs with MERN Stack",
            name: "QzSeeker",
            date: "Sep 15 2024",
            duration: "3 min read",
            link: "https://qzseeker.hashnode.dev/making-apis-with-mern-stack",
            img: "external-link.png"
        },
        {
            title: "State Management in React: Making Sense of Context API",
            name: "QzSeeker",
            date: "Sep 11 2024",
            duration: "3 min read",
            link: "https://qzseeker.hashnode.dev/state-management-in-react-making-sense-of-context-api",
            img: "external-link.png"
        },
        {
        title: "A Beginner's Guide to JavaScript for Web Development.",
        name: "QzSeeker",
        date: "Apr 13 2024",
        duration: "3 min read",
        link: "https://qzseeker.hashnode.dev/a-beginners-guide-to-javascript-for-web-development",
        img: "external-link.png"
        },
        {
        title: "Title",
        name: "QzSeeker",
        date: "- - 2024",
        duration: "0 min read",
        link: "",
        img: "external-link.png"
        },
    ];
    return (
        <div className="w-full">
        <div className="mt-12 mb-10 mx-8 xl:mx-40">
            <h1 className="text-2xl mb-8">My blogs</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {cards.map((card) => (
                <Card key={card.title} {...card} />
            ))}
            </div>
        </div>
        </div>
    );
}

export default Blogs;
