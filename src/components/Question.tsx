// components/Question.tsx
"use client";

import { useState } from "react";
import { Question as QuestionType } from "../data/questionDataMock";

type Props = {
    question: QuestionType;
    onAnswer: (selectedAnswer: string) => void;
};

export default function Question({ question, onAnswer }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (answer: string) => {
        setSelected(answer);
        onAnswer(answer);
    };

    return (
        <div>
            <p className="text-lg mb-6">{question.question}</p>

            <div className="space-y-2">
                {question.options.map((option, index) => (
                    <label
                        key={index}
                        className={`block p-2 border rounded cursor-pointer ${selected === option ? "bg-blue-100 border-blue-400" : ""
                            }`}
                    >
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={selected === option}
                            onChange={() => handleSelect(option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
}
