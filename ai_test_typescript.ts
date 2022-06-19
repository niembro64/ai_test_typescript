
// used open ai to generate this with the text below 

// Write typescript code that will create an array of names, use a for loop to print them. It won't print any name that has an "e"  in it, but it will splice out that name from the array. 

let names = ["Sam", "Tyler", "Sarah", "Kate"];

for (let i = 0; i < names.length; i++) {
  if (names[i].includes("e")) {
    names.splice(i, 1);
  } else {
    console.log(names[i]);
  }
}