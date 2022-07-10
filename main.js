/*
The jokes are: 

Why did the...
- Bird, go to the hospital? To get tweetment!
- Chicken, cross the playground? To get to the other slide!
- Weightlifter, eat bricks? To build himself up!
- Ghost, go to the theatre? To see a phantomime!
- Teacher, go to the beach? To test the water!
- Chicke, cross the road? To get to the other side!
- T-Rex, cross the road? To eat the chicken on the other side!
*/

// Save each noun, verb, and reason to an array
const nouns = ['bird', 'chicken', 'weightlifter', 'ghost', 'teacher', 'chicken', 't-rex'];
const verbs = ['go to the hospital', 'cross the playground', 'eat bricks', 'go to the theatre', 'go to the beach', 'cross the road', 'cross the road'];
const reasons = ['get tweetment', 'get to the other slide', 'build himself up', 'see a phantomime', 'test the water', 'get to the other side', 'eat the chicken on the other side'];

// Function randomly picks an item from an array
const pickRandItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function returns a "Why did the..." joke with a randomly generate noun, verb, & reason
const generateJoke = () => {
    const noun = pickRandItem(nouns);
    const verb = pickRandItem(verbs);
    const reason = pickRandItem(reasons);

    return `Why did the ${noun} ${verb}? To ${reason}!`;
}

// Generate and log a mixed up "Why did the..." joke whenever program is run.
console.log(generateJoke());