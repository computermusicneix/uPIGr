// Apply velocity to a current front score:

function unmuteFront(){

    let newScore = [];
    for ( var i = 0; i < frontScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = frontScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = frontScore[i].length; j < l2; j++) {
            newSemiScore[0] = frontScore[i][0];
            newSemiScore[1] = frontScore[i][1];
            newSemiScore[2] = velos[rint(0,velos.length-1)];

        }
        newScore[i] = newSemiScore;
    };


    front1 = "star = 0;if(star == 0){frontScore = "+JSON.stringify(newScore)+";star = 1;}";

}

// Apply 0 vel (silence) to current front score

function muteFront(){

    let newScore = [];
    for ( var i = 0; i < frontScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = frontScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = frontScore[i].length; j < l2; j++) {
            newSemiScore[0] = frontScore[i][0];
            newSemiScore[1] = frontScore[i][1];
            newSemiScore[2] = 0;

        }
        newScore[i] = newSemiScore;
    };


    front1 = "star = 0;if(star == 0){frontScore = "+JSON.stringify(newScore)+";star = 1;}";

}
