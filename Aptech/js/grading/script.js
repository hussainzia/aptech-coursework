// ----- for loop: runs 5 times -----
for (let count = 1; count <= 5; count++) {
    console.log("Apna College");
}
console.log("loop has ended");

// ----- sum of 1 to 5 -----
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; // 1 + 2 + 3 + 4 + 5 = 15
}
console.log("sum =", sum);

// ----- grade calculator -----
// prompt() returns text, so convert it to a number first.
// Checking from the top down (>= 90, then >= 70...) means decimals like 89.5 can't fall through a gap.
function getGrade(score) {
    if (Number.isNaN(score) || score < 0 || score > 100) return null;
    if (score >= 90) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

const score = Number(prompt("Enter your score (0-100):"));
const grade = getGrade(score);

if (grade) {
    console.log("According to your score, your grade is:", grade);
} else {
    console.log("Please enter a number between 0 and 100.");
}

// ----- strings are immutable: methods return a NEW string -----
const str = "apnacollege";
const newStr = str.toUpperCase();
console.log(newStr); // APNACOLLEGE
console.log(str);    // apnacollege (unchanged)

const str4 = "     apna college  js  ";
console.log(str4.trim());
