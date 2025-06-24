// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Park";
let favActorLastName = " Bo Gum";
let fullName = favActorFirstName + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = "My favorite Actor Is " + uppercase + " & he is good looking";
message += ` his best show is Reply 1988`
console.log(message);
console.log("---------------------------");
//1. CONCATENATION
// let fullName = firstName + " " + lastName
// let fullName = firstName.concat(lastName);
console.log(favActorFirstName.concat(favActorLastName));

//2. APPEND
// firstName += " something else"
console.log(favActorFirstName += favActorLastName += " is handsome     ");

//3. LENGTH
// console.log(firstName.length);
console.log(fullName.length);

//4. CASES
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//5. SLICE
// console.log(fullName.slice(0, 3));
console.log(fullName.slice(1, 10));

//6. SPLIT & JOIN
// console.log(fullName.split("").join("-"));
let word = " He llo Wo rld ";
let result = word.split(' ').join('');
console.log(result); // "HelloWorld"

// \s + matches any whitespace(spaces, tabs, line breaks)
// g flag means global(replace all matches)

let sentence = "JavaScript is awesome browser language";
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('  '));


//7. INCLUDES
// console.log(fullName.includes("HuXn"));
console.log(fullName.includes("Bo"));
console.log(fullName.includes("park"));

//8. TRIM
// console.log(fullName.trim());
console.log(favActorFirstName.trim());

let str = "  Junpei  ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());