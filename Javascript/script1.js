function message(user){
    console.log('Welcome '+ user);
}

let user  = 'Pepe';
message(user);

function capitalize(str){
    let len = str.length;
    let first = str.charAt(0);
    //console.log(first);
    first  = first.toUpperCase();
    let sec = str.slice(1, len);
    //console.log(sec);
    return first + sec;
}

console.log(capitalize('eggnog'));

function returnDay(num){
    if(num<1 || num>7){
        return null;
    }
    const week = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }

    return week[num];   
}

console.log(returnDay(2));
