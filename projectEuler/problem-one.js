const cap = 1000
let counter = 0

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0){
        counter += i
    }
}

console.log(counter)