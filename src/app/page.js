"use client"

import styles from "./page.module.css";
import { useState } from "react";
import qBank from "@/components/QuestionBank";
import Question from "@/components/Question";
import Score from "@/components/Score";

export default function Home() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === qBank[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < qBank.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };


    return (
        <div className="container">
            <h1 className={styles.appTitle}>QUIZ APP</h1>
            {!quizEnd ? (
                <Question
                    q={qBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                />
            ) : (
                <Score
                    score={score}
                    onNextQuestion={handleNextQuestion}
                    className="score"
                />
            )}
        </div>
    );
}
