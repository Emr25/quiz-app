// 1. Önce temel tipleri tanımlayalım
export type Difficulty = 'easy' | 'medium' | 'hard';
export type OverallLevel = 'Başlangıç' | 'Orta' | 'İleri';

// 2. Soru tipi için kesin tanım
export interface Question {
    id: number;
    text: string;
    options: [string, string, string, string]; // 4 seçenek garantili
    correctAnswer: string; // options içinde olmalı
    difficulty: Difficulty;
}

// 3. Sonuç tipi için güvenli tanım
export interface QuizResult {
    totalQuestions: number;
    correctAnswers: number;
    percentage: number; // 0-100 arası
    difficultyBreakdown: Record<
        Difficulty,
        { correct: number; total: number }
    >;
    overallLevel: OverallLevel;
}

// 4. Validasyon fonksiyonları
export function isQuestionValid(question: Question): boolean {
    return (
        question.options.length === 4 &&
        question.options.includes(question.correctAnswer) &&
        ['easy', 'medium', 'hard'].includes(question.difficulty)
    );
}

export function isQuizResultValid(result: QuizResult): boolean {
    return (
        result.percentage >= 0 &&
        result.percentage <= 100 &&
        result.totalQuestions >= 0 &&
        ['Başlangıç', 'Orta', 'İleri'].includes(result.overallLevel)
    );
}