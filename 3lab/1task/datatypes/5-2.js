let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );




alert( 6.35.toFixed(20) ); // 6.34999999999999964473
The precision loss can cause both increase and decrease of a number. In this particular case the number becomes a tiny bit less, that’s why it rounded down.

And what’s for 1.35?

alert( 1.35.toFixed(20) ); // 1.35000000000000008882
Here the precision loss made the number a little bit greater, so it rounded up.

How can we fix the problem with 6.35 if we want it to be rounded the right way?

We should bring it closer to an integer prior to rounding:

alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
Note that 63.5 has no precision loss at all. That’s because the decimal part 0.5 is actually 1/2. Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:

alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4




function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);




  let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}




function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );





  function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );
  An alternative way could be to use Math.floor for a random number from min to max+1:
  
  function randomInteger(min, max) {
    // here rand is from min to (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );