export interface IBooks {
    id: number;
    bookName: string;
    description: string;
    price: number;
    images: string[];
    author: string;
    publisher: string;
    year: number;
}

const mockItemsBooks: IBooks[] = [
    {
        id: 1,
        bookName: 'Menina Má',
        description:
            'Clássico de William March — nascimento da inocência corrompida.',
        price: 64.9,
        images: ['/images/books/badSeed.jpeg'],
        author: 'William March',
        publisher: 'DarkSide Books',
        year: 2016,
    },
    {
        id: 2,
        bookName: 'Drácula - First Edition + Brinde Exclusivo',
        description: 'Edição limitada de Bram Stoker com estaca de caçador.',
        price: 93.42,
        images: ['/images/books/dracula.jpeg'],
        author: 'Bram Stoker',
        publisher: 'Madras Editora',
        year: 2020,
    },
    {
        id: 5,
        bookName: 'Se Você Contar + Brinde Exclusivo',
        description: 'True crime das irmãs Knotek, com marcador exclusivo.',
        price: 66.43,
        images: ['/images/books/seVoceContar.jpeg'],
        author: 'Riley Sager',
        publisher: 'Intrínseca',
        year: 2024,
    },
    {
        id: 6,
        bookName: 'Tudo em Família + Brinde Exclusivo',
        description: 'Thriller familiar perturbador do mestre John Marrs.',
        price: 89.9,
        images: ['/images/books/tudoFamilia.jpeg'],
        author: 'John Marrs',
        publisher: 'DarkSide Books',
        year: 2025,
    },
    {
        id: 7,
        bookName: 'A Boa Mentira + Brindes Exclusivos',
        description:
            'Thriller psicológico de A. R. Torre sobre adolescentes mortos.',
        price: 74.9,
        images: ['/images/books/boaMentira.jpeg'],
        author: 'A. R. Torre',
        publisher: 'DarkSide Books',
        year: 2024,
    },
    {
        id: 8,
        bookName: 'Lady Killers: Assassinas em Série + Brinde Exclusivo',
        description: 'Perfil das mulheres mais letais da história.',
        price: 89.9,
        images: ['/images/books/ladyKillers.png'],
        author: 'Tori Telfer',
        publisher: 'DarkSide Books',
        year: 2019,
    },
    {
        id: 10,
        bookName: 'O Médico e o Monstro',
        description:
            'A clássica história de Robert Louis Stevenson sobre dualidade e identidade.',
        price: 64.9,
        images: ['/images/books/medicoMonstro.jpeg'],
        author: 'Robert Louis Stevenson',
        publisher: 'Moderna',
        year: 2017,
    },
    {
        id: 11,
        bookName: 'O Exorcista',
        description:
            'A icônica história de possessão demoníaca escrita por William Peter Blatty.',
        price: 94.9,
        images: ['/images/books/exorcista.jpeg'],
        author: 'William Peter Blatty',
        publisher: 'HarperCollins Brasil',
        year: 2019,
    },
    {
        id: 12,
        bookName: 'American Psycho',
        description:
            'O perturbador romance de Bret Easton Ellis sobre violência, consumismo e vazio existencial.',
        price: 99.9,
        images: ['/images/books/psycho.jpeg'],
        author: 'Bret Easton Ellis',
        publisher: 'Vintage',
        year: 1991,
    },
    {
        id: 13,
        bookName: 'Coraline',
        description:
            'A obra de Neil Gaiman em edição especial da DarkSide, sobre coragem e mundos paralelos.',
        price: 74.9,
        images: ['/images/books/coraline.jpeg'],
        author: 'Neil Gaiman',
        publisher: 'DarkSide Books',
        year: 2002,
    },
    {
        id: 14,
        bookName: 'Donnie Darko',
        description:
            'A adaptação em livro do cultuado filme que mistura viagem no tempo, drama e existencialismo.',
        price: 89.9,
        images: ['/images/books/darko1.jpeg'],
        author: 'Richard Kelly',
        publisher: 'Rocco',
        year: 2003,
    },
];

export default mockItemsBooks;
