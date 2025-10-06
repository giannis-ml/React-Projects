import React, { useState, useEffect } from 'react'
import './Faq.css'
function Faq() {


    const questions = [
        'What is the difference between hardware and software?',
        'What is the difference between compilation and interpretation?',
        'What is the difference between AI and Machine Learning?',
        'What is the difference between RAM and ROM?',
        'What is the difference between the Internet and the World Wide Web (WWW)?',
        'What is an algorithm in computer science?'
    ]

    const answers = [
        'Hardware refers to the physical components of a computer system, such as the CPU, RAM, hard drive, and keyboard. Software refers to the set of instructions or programs that tell the hardware what to do, such as operating systems, applications, and games.',
        'A compiler translates the entire source code of a program into machine code before execution, which makes the program run faster but requires more memory for the compiled file. An interpreter, on the other hand, translates and executes the code line by line, making it easier to debug but slower in execution',
        'Artificial Intelligence (AI) is a broad field of computer science that focuses on creating systems that can perform tasks that typically require human intelligence, such as problem-solving and decision-making. Machine Learning (ML) is a subset of AI that enables machines to learn patterns and improve their performance over time without being explicitly programmed',
        'RAM (Random Access Memory) is temporary memory used by the computer to store data and instructions while programs are running. It is volatile, meaning data is lost when the computer is turned off. ROM (Read-Only Memory) is permanent memory that stores essential instructions for starting up the computer, and its data cannot be easily changed.',
        'The Internet is a global network of interconnected computers that communicate using protocols like TCP/IP. The World Wide Web is a collection of information (websites and pages) that is accessed through the Internet using web browsers. Simply put, the Internet is the "infrastructure," while the Web is one of the services that run on it.',
        'An algorithm is a step-by-step set of instructions designed to solve a problem or perform a specific task. For example, a recipe in cooking is like an algorithm—it lists steps to follow to achieve a desired result. In computing, algorithms are essential for programming, data processing, and problem-solving.',
    ]

    const [answersVisibility, setAnswersVisibility] = useState(
        Array(questions.length).fill(true)
    )

    const handleDetails = (index) => {
        setAnswersVisibility((prev) =>
            prev.map((visible, i) => (i === index ? !visible : visible))
        );
    };


    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 align="center">FA Questions</h1>
                </div>
            </div>
            <div className="container">
                {questions.map((item, index) => (
                    <React.Fragment key={index}>
                        <li>{item}</li>
                        {answersVisibility[index] && < button onClick={() => handleDetails(index)}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                                style={{ width: "20px", height: "20px" }}>
                            </img>
                        </button>}
                        {!answersVisibility[index] && <button onClick={() => handleDetails(index)}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                                style={{ width: "20px", height: "20px" }}>
                            </img>
                        </button>}
                        {answersVisibility[index] && <p>{answers[index]}</p>}
                    </React.Fragment>
                ))}
            </div>
        </>
    );


}

export default Faq