// write a for loop that will log the numbers 1 through 20
for (let i = 1; i <=20; i++){
    console.log(i);
}

// write a for loop that wil log only the even numbers 0 through 200
for (let i = 0; i <= 200; i += 2){
    console.log(i);
}

// fizz buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
