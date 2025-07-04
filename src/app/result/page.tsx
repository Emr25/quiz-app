// app/result/page.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { questions } from "../../data/questionDataMock";
import { evaluateQuiz } from "../../../lib/evaluate";
import { resetQuiz } from "../../store/quizSlice";
import { useRouter } from "next/navigation";
import Result from "../../components/Result";

export default function ResultPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const answers = useSelector((state: RootState) => state.quiz.answers);
    const result = evaluateQuiz(questions, answers);

    const handleRetry = () => {
        dispatch(resetQuiz());
        router.push("/quiz");
    };

    return <Result result={result} onRetry={handleRetry} />;
}
