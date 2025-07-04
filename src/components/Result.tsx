// components/Result.tsx
"use client";
import { EvaluationResult } from "../../lib/evaluate";

type Props = {
    result: EvaluationResult;
    onRetry: () => void;
};

export default function Result({ result, onRetry }: Props) {
    return (
        <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Sonuçlar</h2>

            <ul className="mb-6 space-y-2">
                <li>✅ Doğru Sayısı: <strong>{result.totalCorrect}</strong></li>
                <li>📊 Başarı Yüzdesi: <strong>{result.percentage}%</strong></li>
                <li>🧠 Zorluk Bazlı Başarı:
                    <ul className="ml-4 list-disc">
                        <li>Kolay: {result.difficultyStats.easy}</li>
                        <li>Orta: {result.difficultyStats.medium}</li>
                        <li>Zor: {result.difficultyStats.hard}</li>
                    </ul>
                </li>
                <li>🌟 Genel Değerlendirme: <strong>{result.level}</strong></li>
            </ul>

            <button
                onClick={onRetry}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Tekrar Dene
            </button>
        </div>
    );
}
