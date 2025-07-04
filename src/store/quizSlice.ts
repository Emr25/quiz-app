// store/quizSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../data/questionDataMock";

type Answer = {
    questionId: number;
    selectedAnswer: string;
};

type QuizState = {
    currentQuestionIndex: number;
    answers: Answer[];
};

const initialState: QuizState = {
    currentQuestionIndex: 0,
    answers: [],
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        answerQuestion: (state, action: PayloadAction<Answer>) => {
            const existing = state.answers.find(
                (a) => a.questionId === action.payload.questionId
            );
            if (!existing) {
                state.answers.push(action.payload);
            }
        },
        nextQuestion: (state) => {
            state.currentQuestionIndex += 1;
        },
        resetQuiz: () => initialState,
    },
});

export const { answerQuestion, nextQuestion, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
