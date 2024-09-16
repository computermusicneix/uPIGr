loadInstrument(mix2);

abcScoreONOFF = 1;

// Generate one bar

// Generate even numbers between 300ms (200bpm) and 2000ms (30bpm)

even = [];
for(let i = 1000; i < 2000; i++) {
       if (i % 2 == 0 && i/2 % 2 == 0){
           even.push(i);
       }
}

// Select random time
mtime = even[rint(0,even.length-1)];

//  Time signature (upper) / bottom (4)

sign = 4;
totalBar = mtime*sign;

// Array of individual times of notes
//nums = [mtime*4,mtime*2,mtime,mtime/2,mtime/4,mtime/8,mtime/16];
//nums = [mtime,mtime/2,mtime/4];
//nums = [mtime*2,mtime*4,mtime,mtime/2,mtime/4];
nums = [mtime/4,mtime/2,mtime,mtime*2,mtime*4];

// Random bar durations

combinaciones = encontrarCombinaciones(totalBar,nums);

//pront = mtime*4+" "+combinaciones;

//pront = totalBar+" "+nums;
pront = totalBar+" "+combinaciones[rint(0,combinaciones.length-1)];

// Left

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

leftScore = newBar1;

// Rear

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

rearScore = newBar1;

// Right

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

rightScore = newBar1;

// Front

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

frontScore = newBar1;

console.log("muteRear();");







