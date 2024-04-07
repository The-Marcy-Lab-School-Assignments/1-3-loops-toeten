// const {
//   loop0UpTo10,
//   loop5to10,
//   loopEvenNumbersUpTo10,
//   countdown5to0,
//   loopUpToNum,
//   fizzbuzz,
// } = require('./from-scratch');
// const {
//   whileToFor,
//   continueGuardClause,
// } = require('./modify');
// const {
//   brokenNested,
//   brokenLoop,
// } = require('./debug');




const continueGuardClause = () => {
    for (let i = 1; i < 5; i++) {
        if (!(i === 2) && !(i === 3)) {
            console.log("Sure glad this isn't 2 or 3");
            console.log(i);
        }
    }
};
continueGuardClause()



const bailOut = () => {
    for (let i = 0; i < 5; i++) {
        if (i > 3) return;
        console.log('Inside the loop', i);
    }
    console.log('Outside the loop');
};
bailOut()