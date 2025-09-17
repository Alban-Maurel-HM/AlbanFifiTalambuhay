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
        imgSrc: "/david-solomon-1000x1000.avif",
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
            imgSrc: '/OldTrafford.jpg',
            answer: 'Manchester',
        },
        {
            points: 100,
            question:
                'Where is the best place in NYC for baguettes? (It closed during COVID)',
            answer: 'Kayser',
        },
        {
            points: 300,
            question: "What is this country's biggest border with",
            imgSrc: '/France.jpeg',
            answer: 'Brazil',
        },
        {
            points: 400,
            question:
                'Who painted this?',
            imgSrc:
                "https://cdn.mos.cms.futurecdn.net/44kXT82VEHfqTG6uQ9kHVh-575-80.jpg.webp",
            answer: 'Leonardo Da Vinci',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question:
            'Whats the best tv show rn?',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg',
        answer: 'One Piece',
    },
    {
        points: 100,
        question:
            'Who is the buffalo bills head coach?',
        imgSrc: 'https://www.wivb.com/wp-content/uploads/sites/97/2023/09/AP23240548794477.jpg?w=1280',
        answer: 'Sean Mcdermott',
    },
    {
        points: 300,
        question: "Whats the captial of Jamaica?",
        imgSrc: 'https://deih43ym53wif.cloudfront.net/large_kingston-jamaica-shutterstock_705443776_78eef56924.jpeg',
        answer: 'Kingston',
    },
    {
        points: 400,
        question:
            'Who were john porks main companions before he died?',
        imgSrc:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
        answer: 'Tim Cheese, Agent 5.5, Simon Claw',
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