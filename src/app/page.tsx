// app/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const startQuiz = () => {
    router.push("/quiz");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-6">Konu Bazlı Bilgi Testi</h1>
        <p className="text-lg mb-8">
          Yazılım hakkında bilginizi test etmeye hazır mısınız?
        </p>
        <button
          onClick={startQuiz}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Quiz’e Başla
        </button>
      </div>
    </main>
  );
}
