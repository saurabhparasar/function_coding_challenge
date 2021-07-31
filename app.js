const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

//  test data 1
// const scoreDolhins = calcAverage(44, 23, 71);
// const scoreKoalas  = calcAverage(65, 54, 49);

// test data 2
const scoreDolhins = calcAverage(85, 54, 41);
const scoreKoalas  = calcAverage(23, 34, 27);

// test data 2

const checkWinner = function(avgDolhins, avgKoalas)  {
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`dolhins wins (${avgDolhins} vs. ${avgKoalas}  )`);
    }else if (avgKoalas >= 2 * avgDolhins){
        console.log(` koalas wins (${avgKoalas} vs. ${avgDolhins}  )`);
    }else{
        console.log('no one wins')
    };
};
checkWinner(scoreDolhins, scoreKoalas);
