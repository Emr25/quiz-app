// app/quiz/page.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { answerQuestion, nextQuestion } from "../../store/quizSlice";
import { questions } from "../../data/questionDataMock";
import { useRouter } from "next/navigation";
import Question from "../../components/Question";

export default function QuizPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const currentIndex = useSelector(
        (state: RootState) => state.quiz.currentQuestionIndex
    );
    const currentQuestion = questions[currentIndex];

    const handleAnswer = (selectedAnswer: string) => {
        dispatch(
            answerQuestion({
                questionId: currentQuestion.id,
                selectedAnswer: selectedAnswer,
            })
        );

        setTimeout(() => {
            if (currentIndex + 1 < questions.length) {
                dispatch(nextQuestion());
            } else {
                router.push("/result");
            }
        }, 500);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
                Soru {currentIndex + 1} / {questions.length}
            </h2>

            <Question question={currentQuestion} onAnswer={handleAnswer} />
        </div>
    );
}
