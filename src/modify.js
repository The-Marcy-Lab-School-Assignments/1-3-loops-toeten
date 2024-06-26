/** FEEDBACK: Before submitting, ensure all commented out code is removed! */
const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
};
//whileToFor()

/* let i = 0;
  while (i < 5) {
    console.log(i);
    i++; */

const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (i === 2 || i === 3) {
      continue;
    }
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);
  }
};
continueGuardClause()

/* if (!(i === 2) && !(i === 3)) {
 console.log("Sure glad this isn't 2 or 3");
 console.log(i); */

module.exports = {
  whileToFor,
  continueGuardClause,
};
