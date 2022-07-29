const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty() {
  try {
    let s = await cookBeanSouffle();
    console.log(`${s} is served!`);
  }
  catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();



