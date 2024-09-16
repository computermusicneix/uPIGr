// upigrFunctions

    
// Random functions

function rint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function rfloat(min, max) {
    return Math.random() * (max - min) + min;
};
    
 // midi2abc - transforms midi note numbers to abc notation

function midi2abc(midinote) {
    
    //rear
    if(midinote == 36){ return 'c,,,'};
    if(midinote == 37){ return '^c,,,'};
    if(midinote == 38){ return 'd,,,'};
    if(midinote == 39){ return '^d,,,'};
    if(midinote == 40){ return 'e,,,'};
    if(midinote == 41){ return 'f,,,'};
    if(midinote == 42){ return '^f,,,'};
    if(midinote == 43){ return 'g,,,'};
    if(midinote == 44){ return '^g,,,'};
    if(midinote == 45){ return 'a,,,'};
    if(midinote == 46){ return '^a,,,'};
    if(midinote == 47){ return 'b,,,'};
     //left
    if(midinote == 48){ return 'c,,'};
    if(midinote == 49){ return '^c,,'};
    if(midinote == 50){ return 'd,,'};
    if(midinote == 51){ return '^d,,'};
    if(midinote == 52){ return 'e,,'};
    if(midinote == 53){ return 'f,,'};
    if(midinote == 54){ return '^f,,'};
    if(midinote == 55){ return 'g,,'};
    if(midinote == 56){ return '^g,,'};
    if(midinote == 57){ return 'a,,'};
    if(midinote == 58){ return '^a,,'};
    if(midinote == 59){ return 'b,,'};
      //right
    if(midinote == 60){ return 'c,'};
    if(midinote == 61){ return '^c,'};
    if(midinote == 62){ return 'd,'};
    if(midinote == 63){ return '^d,'};
    if(midinote == 64){ return 'e,'};
    if(midinote == 65){ return 'f,'};
    if(midinote == 66){ return '^f,'};
    if(midinote == 67){ return 'g,'};
    if(midinote == 68){ return '^g,'};
    if(midinote == 69){ return 'a,'};
    if(midinote == 70){ return '^a,'};
    if(midinote == 71){ return 'b,'};
       //front
    if(midinote == 72){ return 'c'};
    if(midinote == 73){ return '^c'};
    if(midinote == 74){ return 'd'};
    if(midinote == 75){ return '^d'};
    if(midinote == 76){ return 'e'};
    if(midinote == 77){ return 'f'};
    if(midinote == 78){ return '^f'};
    if(midinote == 79){ return 'g'};
    if(midinote == 80){ return '^g'};
    if(midinote == 81){ return 'a'};
    if(midinote == 82){ return '^a'};
    if(midinote == 83){ return 'b'};
  
}

// timerelations 

function timerelations(mtime,notetime){
    
    initialrelation = mtime/notetime;
    if(initialrelation == 1){return ''};
    if(initialrelation > 1){return '/'+initialrelation};
    if(initialrelation == 0.5){return '2'};
    if(initialrelation == 0.25){return '4'};

}

// Random melody
// You can make it livecode on command: in forScore

function rMelody(){
    no = [];
    du = [];
    ve = [];
    vearray = [0,40,60,80,100];
    dur = mtime;
    dur = dur * 2;
    durarray = [1,0.5,0.25,0.125];
    for(i=0; i<12; i++){
        no[i] = scale[rint(0,scale.length-1)];
        du[i] = dur * durarray[rint(0,durarray.length-1)];
        ve[i] = vearray[rint(0,vearray.length-1)];
    };
    rearS = [];
    leftS = [];
    rightS = [];
    frontS = [];
    for(i=0; i<8; i++){
        rearS[i] = [no[rint(0,11)],du[rint(0,11)],ve[rint(0,11)]];
        leftS[i] = [no[rint(0,11)],du[rint(0,11)],ve[rint(0,11)]];
        rightS[i] = [no[rint(0,11)],du[rint(0,11)],ve[rint(0,11)]];
        frontS[i] = [no[rint(0,11)],du[rint(0,11)],ve[rint(0,11)]];
    };
    rearScore = rearS;
    leftScore = leftS;
    rightScore = rightS;
    frontScore = frontS;

    rearMemory.push(rearS);
    leftMemory.push(leftS);
    rightMemory.push(rightS);
    frontMemory.push(frontS);
}

// Replace one random tempo of rearScore
        
function randomTempoRear(){
        mults = [0.25,0.5,2];
        rearScore[rint(0,rearScore.length-1)][1] = mtime*mults[rint(0,mults.length-1)];
};

// Return all combinations of a target (ints):
// Example: combimationSum([2,3,4],7)

function combinationSum(nums, target) {
    const memo = {};

    // remove duplicates from the array
    nums = nums.sort((a, b) => a - b).filter((num, index, arr) => index === 0 || num !== arr[index - 1]);

    function dp(start, target) {
        if (memo[target]) {
            return memo[target];
        }
        if (target === 0) {
            return [[]];
        }
        if (target < 0) {
            return [];
        }
        const res = [];
        for (let i = start; i < nums.length; i++) {
            const num = nums[i];
            if (target - num >= 0) {
                for (const comb of dp(i, target - num)) {
                    res.push([num, ...comb]);
                }
            }
        }
        memo[target] = res;
        return res;
    }

    return dp(0, target);
}

// Sumar números diferentes hasta llegar a una cifra exacta

function encontrarCombinaciones(sumaObjetivo, numeros, resultado = [], combinaciones = [], precision = 1e-10) {
    if (Math.abs(sumaObjetivo) < precision) {
        combinaciones.push([...resultado]);
        return;
    }

    if (sumaObjetivo < 0) return;

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        resultado.push(numero);
        encontrarCombinaciones(sumaObjetivo - numero, numeros, resultado, combinaciones, precision);
        resultado.pop();
    }

    return combinaciones;
}

// P5.js polygon

        
function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
};

// Save and download abcScore

function abcScoreSave(){
          
    abcScoreONOFF = 0;
    abcTime = (1000.0/mtime)*60;
          
    abcString = "X:1\nT:\nC:\nN:\nM: 4/4\nL: 1/4\nQ: "+abcTime+"\nV: Voice0 name='front'\nK: C treble\n%%MIDI program 0\n"+abcScoreFront.join(' ')+"\nV: Voice1 name='right'\nK: C treble\n%%MIDI program 0\n"+abcScoreRight.join(' ')+"\nV: Voice2 name='left'\nK: C bass\n%%MIDI program 0\n"+abcScoreLeft.join(' ')+"\nV: Voice3 name='rear'\nK: C bass\n%%MIDI program 0\n"+abcScoreRear.join(' ');
     console.log(abcString);

    filename = 'abcScore-'+date()+'.txt';
    var textFileAsBlob = new Blob([abcString], { type: "text/plain;charset=utf-8" });
          var fileNameToSaveAs = filename;
          var downloadLink = document.createElement("a"); downloadLink.download = fileNameToSaveAs; downloadLink.innerHTML = "Download File"; if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); } else { // Firefox requires the link to be added to the DOM // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob); downloadLink.onclick = destroyClickedElement; downloadLink.style.display = "none"; document.body.appendChild(downloadLink); }
            downloadLink.click();
 
}   

// Play all

function play(){
    abcScoreONOFF = 1;
    left();
    right();
    rear();
    front();
}

// Stop all

function stop(){
    
    starleftS = 0;
    left1 = "if(starleftS == 0){clearTimeout(leftStop);starleftS = 1;};";
    starrightS = 0;
    right1 = "if(starrightS == 0){clearTimeout(rightStop);starrightS = 1;};";
    starrearS = 0;
    rear1 = "if(starrearS == 0){clearTimeout(rearStop);starrearS = 1;};";
    starfrontS = 0;
    front1 = "if(starfrontS == 0){clearTimeout(frontStop);starfrontS = 1;};";
}


// Apply velocity to a current left score:

function unmuteLeft(){

    let newScore = [];
    for ( var i = 0; i < leftScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = leftScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = leftScore[i].length; j < l2; j++) {
            newSemiScore[0] = leftScore[i][0];
            newSemiScore[1] = leftScore[i][1];
            newSemiScore[2] = velos[rint(0,velos.length-1)];

        }
        newScore[i] = newSemiScore;
    };


    starleft = 0;
    left1 = "if(starleft == 0){leftScore = "+JSON.stringify(newScore)+";starleft = 1;}";

}

// Apply 0 vel (silence) to current left score

function muteLeft(){

    let newScore = [];
    for ( var i = 0; i < leftScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = leftScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = leftScore[i].length; j < l2; j++) {
            newSemiScore[0] = leftScore[i][0];
            newSemiScore[1] = leftScore[i][1];
            newSemiScore[2] = 0;

        }
        newScore[i] = newSemiScore;
    };

    starleft = 0;
    left1 = "if(starleft == 0){leftScore = "+JSON.stringify(newScore)+";starleft = 1;}";

}

// Apply velocity to a current right score:

function unmuteRight(){

    let newScore = [];
    for ( var i = 0; i < rightScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = rightScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = rightScore[i].length; j < l2; j++) {
            newSemiScore[0] = rightScore[i][0];
            newSemiScore[1] = rightScore[i][1];
            newSemiScore[2] = velos[rint(0,velos.length-1)];

        }
        newScore[i] = newSemiScore;
    };

    starright = 0;
    right1 = "if(starright == 0){rightScore = "+JSON.stringify(newScore)+";starright = 1;}";

}

// Apply 0 vel (silence) to current right score

function muteRight(){

    let newScore = [];
    for ( var i = 0; i < rightScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = rightScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = rightScore[i].length; j < l2; j++) {
            newSemiScore[0] = rightScore[i][0];
            newSemiScore[1] = rightScore[i][1];
            newSemiScore[2] = 0;

        }
        newScore[i] = newSemiScore;
    };

    starright = 0;
    right1 = "if(starright == 0){rightScore = "+JSON.stringify(newScore)+";starright = 1;}";

}

// Apply velocity to a current rear score:

function unmuteRear(){

    let newScore = [];
    for ( var i = 0; i < rearScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = rearScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = rearScore[i].length; j < l2; j++) {
            newSemiScore[0] = rearScore[i][0];
            newSemiScore[1] = rearScore[i][1];
            newSemiScore[2] = velos[rint(0,velos.length-1)];

        }
        newScore[i] = newSemiScore;
    };

    starrear = 0;
    rear1 = "if(starrear == 0){rearScore = "+JSON.stringify(newScore)+";starrear = 1;}";

}

// Apply 0 vel (silence) to current rear score

function muteRear(){

    let newScore = [];
    for ( var i = 0; i < rearScore.length; i++ ) {
        newScore[i] = []; 
    };
    let newSemiScore = [];

    let velos = [10,33,66,0];

    for (let i = 0, l1 = rearScore.length; i < l1; i++) {

        newSemiScore = [];
        for (let j = 0, l2 = rearScore[i].length; j < l2; j++) {
            newSemiScore[0] = rearScore[i][0];
            newSemiScore[1] = rearScore[i][1];
            newSemiScore[2] = 0;

        }
        newScore[i] = newSemiScore;
    };

    starrear = 0;
    rear1 = "if(starrear == 0){rearScore = "+JSON.stringify(newScore)+";starrear = 1;}";

}

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

    starfront = 0;
    front1 = "if(starfront == 0){frontScore = "+JSON.stringify(newScore)+";starfront = 1;}";

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

    starfront = 0;
    front1 = "if(starfront == 0){frontScore = "+JSON.stringify(newScore)+";starfront = 1;}";

}

// Function for generate new bar on init, add to current player and add to the memory:

function initBar(ins){

    newBar1 = [];

    du = combinaciones[rint(0,combinaciones.length-1)];
    no = [];
    ve = [];
    vearray = [0,20,40,60];

    for(i=0; i<du.length; i++){
        no[i] = scale[rint(0,scale.length-1)];
        ve[i] = vearray[rint(0,vearray.length-1)];
    };

    for(i=0; i<du.length; i++){
        newBar1[i] = [no[rint(0,du.length-1)],du[i],ve[rint(0,du.length-1)]];
    };

    if(ins == 'left'){
        
        leftMemory.push(newBar1);
        leftScore = newBar1;
    }
    if(ins == 'right'){
        
        rightMemory.push(newBar1);
        rightScore = newBar1;
    }
    if(ins == 'front'){
        
        frontMemory.push(newBar1);
        frontScore = newBar1;
    }
    if(ins == 'rear'){
        
        rearMemory.push(newBar1);
        rearScore = newBar1;
    }
}

// Function for generate new silent bar on init, add to current player and add to the memory:

function zeroBar(ins){

    newBar1 = [];

    du = combinaciones[rint(0,combinaciones.length-1)];
    no = [];
    ve = [];
    vearray = [0];

    for(i=0; i<du.length; i++){
        no[i] = scale[rint(0,scale.length-1)];
        ve[i] = vearray[rint(0,vearray.length-1)];
    };

    for(i=0; i<du.length; i++){
        newBar1[i] = [no[rint(0,du.length-1)],du[i],ve[rint(0,du.length-1)]];
    };

    if(ins == 'left'){
        
        leftMemory.push(newBar1);
        leftScore = newBar1;
    }
    if(ins == 'right'){
        
        rightMemory.push(newBar1);
        rightScore = newBar1;
    }
    if(ins == 'front'){
        
        frontMemory.push(newBar1);
        frontScore = newBar1;
    }
    if(ins == 'rear'){
        
        rearMemory.push(newBar1);
        rearScore = newBar1;
    }
}

// Get memory bar to current score:

function getRear(memo){
      starrear = 0;
      rear1 = "if(starrear == 0){rearScore = "+JSON.stringify(rearMemory[memo])+";starrear = 1;}" 
};

function getFront(memo){
      starfront = 0;
      front1 = "if(starfront == 0){frontScore = "+JSON.stringify(frontMemory[memo])+";starfront = 1;}" 
};

function getLeft(memo){
      starleft = 0;
      left1 = "if(starleft == 0){leftScore = "+JSON.stringify(leftMemory[memo])+";starleft = 1;}" 
};

function getRight(memo){
      starright = 0;
      right1 = "if(starright == 0){rightScore = "+JSON.stringify(rightMemory[memo])+";starright = 1;}" 
};





 
