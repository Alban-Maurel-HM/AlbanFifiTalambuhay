import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string;
     imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => 
        ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'How much Aura does Kofi have?',
        answer: '67',
    },
    {
        points: 200,
        question:
            'Who is this?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: "Goldman Sachs' CEO",
    },
    {
        points: 300,
        question:
            'How old was Kofi when he took his first 400 level class?',
        answer: '15',
    },
    {
        points: 400,
        question: 'Where do we "Kode?"',
        answer: 'Ghana',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'Where is this field?',
            imgSrc: 'https://madera.objects.liquidweb.services/photos/16842-half-dome-closeup-from-glacier-point-steve-montalto-hmi-Rectangle-600x400.jpg',
            answer: 'Manchester',
        },
        {
            points: 100,
            question:
                'Where is the best place in NYC for baguettes?',
            answer: 'Kayser',
        },
        {
            points: 300,
            question: "What is this country's biggest border with",
            imgSrc: '/programming_language.png',
            answer: 'Brazil',
        },
        {
            points: 400,
            question:
                'Who painted this?',
            imgSrc:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'Leonardo Da Vinci',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: 'Fifi',
        questions: pastQuestions
    },
    {
        title: 'Alban',
        questions: presentQuestions
    },
    {
        title: 'Dave',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}