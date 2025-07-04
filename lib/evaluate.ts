import { Question } from "../src/data/questionDataMock";

type Answer = {
    questionId: number;
    selectedAnswer: string;
};

export type EvaluationResult = {
    totalCorrect: number;
    percentage: number;
    difficultyStats: {
        easy: number;
        medium: number;
        hard: number;
    };
    level: "Başlangıç" | "Orta" | "Uzman";
};

export function evaluateQuiz(
    questions: Question[],
    answers: Answer[]
): EvaluationResult {
    let totalCorrect = 0;
    let difficultyStats = {
        easy: 0,
        medium: 0,
        hard: 0,
    };

    for (const answer of answers) {
        const question = questions.find((q) => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.selectedAnswer) {
            totalCorrect++;
            difficultyStats[question.difficulty]++;
        }
    }

    const percentage = (totalCorrect / questions.length) * 100;

    let level: EvaluationResult["level"];
    if (percentage >= 80) {
        level = "Uzman";
    } else if (percentage >= 50) {
        level = "Orta";
    } else {
        level = "Başlangıç";
    }

    return {
        totalCorrect,
        percentage: Math.round(percentage),
        difficultyStats,
        level,
    };
}
