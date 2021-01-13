// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    const num = String(n);
    const middle = Math.ceil(num.length / 2);
    const firstHalf = num.slice(0, middle);
    const secondHalf = num.slice(middle);
    
    if (num.length % 2 !== 0) {
        return false;
    }
    
    return firstHalf.split("").reduce((acc, value) => acc + Number(value), 0) === secondHalf.split("").reduce((acc, value) => acc + Number(value), 0);
}