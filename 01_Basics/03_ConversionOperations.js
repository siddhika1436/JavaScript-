// let score = "35abc"
// let a = "32"
// let b = null
// let c = undefined

// console.log(typeof (score));
// console.log(typeof score);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c)


// let scoreNumber = Number(score)
// let aNum = Number(a)
// let bNum = Number(b)
// let cNum = Number(c)

// console.log(typeof scoreNumber)
// console.log(typeof aNum)
// console.log(typeof bNum);
// console.log(typeof cNum);



// console.log(scoreNumber)       //NaN => not a number
// console.log(aNum);
// console.log(bNum);
// console.log(cNum);


//************************Operations*******************/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

/*const y = x++;: Here, x++ is the post-increment operator. This means:

The current value of x (which is 3) is assigned to y.

After the assignment, the value of x is incremented by 1.
So, y gets the value 3, and then x becomes 4.*/

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
/*const b = ++a;: Here, ++a is the pre-increment operator. This means:

The value of a is first incremented by 1 (so a becomes 4).

Then, the new value of a (which is now 4) is assigned to b. */
