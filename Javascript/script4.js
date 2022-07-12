//forEach: accepts a callback function
//calls the function once per element in the array

const nums = [9, 2, 4, 5];
nums.forEach(function (n){
    console.log(n*n); //prints 81, 4, 16, 25
});

function print(element){
    console.log(element);
}

nums.forEach(print);

const movies = [
    {
        title: 'Sam',
        score: 95
    },
    {
        title: 'E.T.',
        score: 66
    }
]

//Anonymous function expression
movies.forEach(function(movie){
    console.log(movie.title + '-'+movie.score+'/100');
})
