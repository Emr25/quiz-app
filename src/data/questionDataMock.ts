// data/questionDataMock.ts

export type Difficulty = "easy" | "medium" | "hard";

export type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    difficulty: Difficulty;
};

export const questions: Question[] = [
    {
        id: 1,
        question: "React'te bileşen nasıl oluşturulur?",
        options: [
            "React.createComponent()",
            "React.component()",
            "Function veya class olarak",
            "React.makeComponent()",
        ],
        correctAnswer: "Function veya class olarak",
        difficulty: "easy",
    },
    {
        id: 2,
        question: "JSX nedir?",
        options: [
            "JavaScript uzantısı",
            "Tarayıcı API'si",
            "JS'nin özel hali",
            "HTML benzeri sentaks",
        ],
        correctAnswer: "HTML benzeri sentaks",
        difficulty: "easy",
    },
    {
        id: 3,
        question: "Tailwind CSS'in avantajı nedir?",
        options: [
            "Hazır bileşen yapısı",
            "Inline stil yazma zorunluluğu",
            "Atomic CSS yaklaşımı",
            "Sadece class yazımı yasaktır",
        ],
        correctAnswer: "Atomic CSS yaklaşımı",
        difficulty: "easy",
    },
    {
        id: 4,
        question: "State yönetiminde Context API ne için kullanılır?",
        options: [
            "Veritabanı yönetimi",
            "Sayfa yönlendirme",
            "Global state paylaşımı",
            "API çağrısı",
        ],
        correctAnswer: "Global state paylaşımı",
        difficulty: "medium",
    },
    {
        id: 5,
        question: "Next.js'te 'use client' ne işe yarar?",
        options: [
            "Server component'i client'a aktarır",
            "CSS dosyası yükler",
            "API route tanımlar",
            "Client-side state'i korur",
        ],
        correctAnswer: "Server component'i client'a aktarır",
        difficulty: "medium",
    },
    {
        id: 6,
        question: "Zustand nedir?",
        options: [
            "Tailwind eklentisi",
            "Veritabanı aracı",
            "Hafif bir state management kütüphanesi",
            "API test aracı",
        ],
        correctAnswer: "Hafif bir state management kütüphanesi",
        difficulty: "medium",
    },
    {
        id: 7,
        question: "Next.js'de sayfa yönlendirme için ne kullanılır?",
        options: [
            "useRouter",
            "redirectTo",
            "navigateTo",
            "goToPage",
        ],
        correctAnswer: "useRouter",
        difficulty: "medium",
    },
    {
        id: 8,
        question: "TypeScript'te `?` işareti ne anlama gelir?",
        options: [
            "Zorunlu değişken",
            "Null ataması",
            "Opsiyonel property",
            "Fonksiyon tipi",
        ],
        correctAnswer: "Opsiyonel property",
        difficulty: "hard",
    },
    {
        id: 9,
        question: "`as const` ne işe yarar?",
        options: [
            "Runtime sabitleme",
            "Değeri readonly yapar",
            "Bir nesneyi mutable yapar",
            "Tip kontrolünü kapatır",
        ],
        correctAnswer: "Değeri readonly yapar",
        difficulty: "hard",
    },
    {
        id: 10,
        question: "App Router'da route dosyaları hangi isimle tanımlanır?",
        options: [
            "routes.ts",
            "index.js",
            "page.tsx",
            "router.tsx",
        ],
        correctAnswer: "page.tsx",
        difficulty: "hard",
    },
];
