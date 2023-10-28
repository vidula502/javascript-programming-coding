const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums2 = numbers.forEach(function (number) {
    //console.log(number);   
    return; 
});
//console.log(nums2); //undefined (foreach loop not returning anything, return value is undefined).
//numbers.forEach((number) => console.log(number));

const nums = numbers.filter((number) =>{
    return number % 2 === 0;
});

//console.log(nums); //[ 2, 4, 6, 8, 10 ]

const books = [
    {
        booksName: 'Book one', genre: 'Fantasy', author: 'J.K. Rowling', price: 123
    },
    {
        booksName: 'Book two', genre: 'History', author: 'K.K. Bowler', price: 100
    },
    {
        booksName: 'Book three', genre: 'Science Fiction', author: 'G.T.Bons', price: 200
    },
    {
        booksName: 'Book Four', genre: 'Maths', author: 'K.NarayanMurti', price: 2000
    },
    {
        booksName: 'Book Five', genre: 'Maths', author: 'K.Shatri', price: 4000
    },
    {
        booksName: 'Book Six', genre: 'Science Fiction', author: 'K.NarayanMurti', price: 2000
    },
    {
    booksName: 'Book Seven', genre: 'Science Fiction', author: 'K.Shatri', price: 4000
    },
    {
        booksName: 'Book Eight', genre: 'Science Fiction', author: 'K.NarayanMurti', price: 2000
    }
];

let printBook = books.filter((book) => book.author === 'K.NarayanMurti');

printBook = books.filter((book) => {
    return !(book.author === 'K.Shatri' || book.genre === 'Science Fiction');
});

console.log(printBook); 



