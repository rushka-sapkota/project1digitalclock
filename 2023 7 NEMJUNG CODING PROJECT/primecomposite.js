function checkPrimeOrComposite() {
    let userInput = prompt("Enter a number:");
    let number = parseInt(userInput);

    if (number <= 1) {
        document.write("Neither prime nor composite");
    } else {
        let isPrime = true;
        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false;
              
            }
        }
        if (isPrime) {
            document.write("The number " + number + " is prime.");
        } else {
            document.write("The number " + number + " is composite.");
        }
    }
}

checkPrimeOrComposite();