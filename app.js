const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 }
]

// YOUR JS CODE

let currentYear = 2022;
let jsReleaseYear = 1995;
let jsCurrentAge = (currentYear - jsReleaseYear);

console.log('current age of JavaScript is', currentYear - jsReleaseYear)

if(jsCurrentAge >= ageToVote){
  console.log('JavaScript is old enough to vote');
}

if(jsCurrentAge < ageToVote){
  console.log('JavasScript is not old enough to vote');
}

for (let i = 0; i < 101; i++) {
  if(i === 0)
  console.log('Starting');
  {
    if(i % 10 === 0)
    console.log(i)
    if(i === 50)
    console.log('Halfway');
    if(i === 100)
    console.log('Finished');
  }}

  console.log(user.name, 'lives at', user.address.street, user.address.city);

for (let i = 0; i < cases.length; i++) {
  const caseEach = cases[i];
  console.log(caseEach.releaseYear);
}
{
  console.log('all cases logged');
}

for (let i = 0; i < cases.length; i++) {
  const caseEach = cases[i];
  if(caseEach.releaseYear === 1903)
  console.log(caseEach.releaseYear);
}
{
  console.log('cases from 1903 logged');
}