function scriabin(){

	// Circle of fifths spectrum (Scriabin)

	// C / red / #FF0000 rgb(255,0,0)
	// Db or C# / Violet / #EE82EE	(238,130,238) 
	// D / Yellow / #FFFF00	(255,255,0)
	// Eb or D# / Flesh  / #d8965b	(216,150,91)
	// E / Cyan / #00FFFF	(0,255,255)
	// F / Deep red / #8B0000	(139,0,0)
	// Gb or F#/ Bright blue / #0165fc (1,101,252)
	// G  / Orange / #FFA500	(255,165,0)
	// Ab or G# / Lilac / #d2afff	(210,175,255)
	// A / Green / #008000	(0,128,0)
	// Bb or A# / Rose / #FFC0CB	(255,192,203)
	// B / Blue / #0000FF	(0,0,255) 

	// Shapes 
	// Rear: Hexagon
	// Left: Square
	// Right: Circle
	// Front: Triangle

	colorRearA = 0.0;
	colorRearB = 0.0;
	colorRearC = 0.0;

	colorLeftA = 0.0;
	colorLeftB = 0.0;
	colorLeftC = 0.0;

	colorRightA = 0.0;
	colorRightB = 0.0;
	colorRightC = 0.0;

	colorFrontA = 0.0;
	colorFrontB = 0.0;
	colorFrontC = 0.0;

	rearShapeCoin = rint(1,1);

	if(rearShapeCoin == 0){
		rearShape = 'noStroke();fill(colorRearA,colorRearB,colorRearC,155);';
	}else{
		rearWeight = rfloat(3.3,width/33.3);
		rearShape = "noFill();stroke(colorRearA,colorRearB,colorRearC,155);strokeWeight("+rearWeight+");";
	};

	leftShapeCoin = rint(1,1);

	if(leftShapeCoin == 0){
		leftShape = 'noStroke();fill(colorLeftA,colorLeftB,colorLeftC,155);';
	}else{
		leftWeight = rfloat(3.3,width/33.3);
		leftShape = "noFill();stroke(colorLeftA,colorLeftB,colorLeftC,155);strokeWeight("+leftWeight+");";
	};

	rightShapeCoin = rint(1,1);

	if(rightShapeCoin == 0){
		rightShape = 'noStroke();fill(colorRightA,colorRightB,colorRightC,155);';
	}else{
		rightWeight = rfloat(3.3,width/33.3);
		rightShape = "noFill();stroke(colorRightA,colorRightB,colorRightC,155);strokeWeight("+rightWeight+");";
	};

	frontShapeCoin = rint(1,1);

	if(frontShapeCoin == 0){
		frontShape = 'noStroke();fill(colorFrontA,colorFrontB,colorFrontC,155);';
	}else{
		frontWeight = rfloat(3.3,width/33.3);
		frontShape = "noFill();stroke(colorFrontA,colorFrontB,colorFrontC,155);strokeWeight("+frontWeight+");";
	};


	drawing = "background(0);";

	drawing += "if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'c'){ 	colorRearA = 255.0; 	colorRearB = 0.0; 	colorRearC = 0.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'c#' || teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'db'){ 	colorRearA = 238.0; 	colorRearB = 130.0; 	colorRearC = 238.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'd'){ 	colorRearA = 255.0; 	colorRearB = 255.0; 	colorRearC = 0.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'd#' || teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'eb'){ 	colorRearA = 216.0; 	colorRearB = 150.0; 	colorRearC = 91.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'e'){ 	colorRearA = 0.0; 	colorRearB = 0.0; 	colorRearC = 255.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'f'){ 	colorRearA = 255.0; 	colorRearB = 255.0; 	colorRearC = 0.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'f#' || teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'gb'){ 	colorRearA = 216.0; 	colorRearB = 150.0; 	colorRearC = 91.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'g'){ 	colorRearA = 255.0; 	colorRearB = 165.0; 	colorRearC = 0.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'g#' || teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'ab'){ 	colorRearA = 210.0; 	colorRearB = 175.0; 	colorRearC = 255.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'a'){ 	colorRearA = 0.0; 	colorRearB = 128.0; 	colorRearC = 0.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'a#' || teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'bb'){ 	colorRearA = 255.0; 	colorRearB = 192.0; 	colorRearC = 203.0; }; if(teoria.note.fromFrequency(rearNotes[0]).note.toString(true) == 'b'){ 	colorRearA = 0.0; 	colorRearB = 0.0; 	colorRearC = 255.0; };";

	drawing += "if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'c'){ 	colorLeftA = 255.0; 	colorLeftB = 0.0; 	colorLeftC = 0.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'c#' || teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'db'){ 	colorLeftA = 238.0; 	colorLeftB = 130.0; 	colorLeftC = 238.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'd'){ 	colorLeftA = 255.0; 	colorLeftB = 255.0; 	colorLeftC = 0.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'd#' || teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'eb'){ 	colorLeftA = 216.0; 	colorLeftB = 150.0; 	colorLeftC = 91.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'e'){ 	colorLeftA = 0.0; 	colorLeftB = 0.0; 	colorLeftC = 255.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'f'){ 	colorLeftA = 255.0; 	colorLeftB = 255.0; 	colorLeftC = 0.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'f#' || teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'gb'){ 	colorLeftA = 216.0; 	colorLeftB = 150.0; 	colorLeftC = 91.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'g'){ 	colorLeftA = 255.0; 	colorLeftB = 165.0; 	colorLeftC = 0.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'g#' || teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'ab'){ 	colorLeftA = 210.0; 	colorLeftB = 175.0; 	colorLeftC = 255.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'a'){ 	colorLeftA = 0.0; 	colorLeftB = 128.0; 	colorLeftC = 0.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'a#' || teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'bb'){ 	colorLeftA = 255.0; 	colorLeftB = 192.0; 	colorLeftC = 203.0; }; if(teoria.note.fromFrequency(leftNotes[0]).note.toString(true) == 'b'){ 	colorLeftA = 0.0; 	colorLeftB = 0.0; 	colorLeftC = 255.0; };";

	drawing += "if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'c'){ 	colorRightA = 255.0; 	colorRightB = 0.0; 	colorRightC = 0.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'c#' || teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'db'){ 	colorRightA = 238.0; 	colorRightB = 130.0; 	colorRightC = 238.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'd'){ 	colorRightA = 255.0; 	colorRightB = 255.0; 	colorRightC = 0.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'd#' || teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'eb'){ 	colorRightA = 216.0; 	colorRightB = 150.0; 	colorRightC = 91.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'e'){ 	colorRightA = 0.0; 	colorRightB = 0.0; 	colorRightC = 255.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'f'){ 	colorRightA = 255.0; 	colorRightB = 255.0; 	colorRightC = 0.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'f#' || teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'gb'){ 	colorRightA = 216.0; 	colorRightB = 150.0; 	colorRightC = 91.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'g'){ 	colorRightA = 255.0; 	colorRightB = 165.0; 	colorRightC = 0.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'g#' || teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'ab'){ 	colorRightA = 210.0; 	colorRightB = 175.0; 	colorRightC = 255.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'a'){ 	colorRightA = 0.0; 	colorRightB = 128.0; 	colorRightC = 0.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'a#' || teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'bb'){ 	colorRightA = 255.0; 	colorRightB = 192.0; 	colorRightC = 203.0; }; if(teoria.note.fromFrequency(rightNotes[0]).note.toString(true) == 'b'){ 	colorRightA = 0.0; 	colorRightB = 0.0; 	colorRightC = 255.0; };";

	drawing += "if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'c'){ 	colorFrontA = 255.0; 	colorFrontB = 0.0; 	colorFrontC = 0.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'c#' || teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'db'){ 	colorFrontA = 238.0; 	colorFrontB = 130.0; 	colorFrontC = 238.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'd'){ 	colorFrontA = 255.0; 	colorFrontB = 255.0; 	colorFrontC = 0.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'd#' || teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'eb'){ 	colorFrontA = 216.0; 	colorFrontB = 150.0; 	colorFrontC = 91.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'e'){ 	colorFrontA = 0.0; 	colorFrontB = 0.0; 	colorFrontC = 255.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'f'){ 	colorFrontA = 255.0; 	colorFrontB = 255.0; 	colorFrontC = 0.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'f#' || teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'gb'){ 	colorFrontA = 216.0; 	colorFrontB = 150.0; 	colorFrontC = 91.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'g'){ 	colorFrontA = 255.0; 	colorFrontB = 165.0; 	colorFrontC = 0.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'g#' || teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'ab'){ 	colorFrontA = 210.0; 	colorFrontB = 175.0; 	colorFrontC = 255.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'a'){ 	colorFrontA = 0.0; 	colorFrontB = 128.0; 	colorFrontC = 0.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'a#' || teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'bb'){ 	colorFrontA = 255.0; 	colorFrontB = 192.0; 	colorFrontC = 203.0; }; if(teoria.note.fromFrequency(frontNotes[0]).note.toString(true) == 'b'){ 	colorFrontA = 0.0; 	colorFrontB = 0.0; 	colorFrontC = 255.0; };";

	veloArray = [-100,-125,-150,-200,200,150,125,100];

	veloRear = veloArray[rint(0,veloArray.length-1)];
	veloLeft = veloArray[rint(0,veloArray.length-1)];
	veloRight = veloArray[rint(0,veloArray.length-1)];
	veloFront = veloArray[rint(0,veloArray.length-1)];

	drawing += "push();translate(width/2, height/2);rotate(frameCount / "+veloRear+");"+rearShape+"polygon(0, 0, (reescale(rearData[2],0.0,1.0,0.0,width/5)), 6);pop();push();translate(width/2, height/2);rotate(frameCount / "+veloLeft+");"+leftShape+"polygon(0, 0, (reescale(leftData[2],0.0,1.0,0.0,width/5)), 4);pop();push();translate(width/2, height/2);rotate(frameCount / "+veloRight+");"+rightShape+"ellipse(0, 0, (reescale(rightData[2],0.0,1.0,0.0,width/5)));pop();push();translate(width/2, height/2);rotate(frameCount / "+veloFront+");"+frontShape+"polygon(0, 0, (reescale(frontData[2],0.0,1.0,0.0,width/5)), 3);pop();";

};
