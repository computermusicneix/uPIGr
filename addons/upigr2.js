
let drawing = "imageMode(CENTER);image(img, width / 2, height / 2, img.width, img.height);"

let fecha;

// Variables and function for get areas

let canvas;
let editorAreaWidth,editorAreaHeight;
let canvasArea,canvasAreaWidth,canvasAreaHeight;
let postwindowAreaWidth,postwindowAreaHeight;
let postwindow1AreaWidth,postwindow1AreaHeight;
let postwindow2AreaWidth,postwindow2AreaHeight;
let postwindow3AreaWidth,postwindow3AreaHeight;
let postwindow4AreaWidth,postwindow4AreaHeight;

// corrections of width of post

let correction = 2;

var med = window.matchMedia("(max-width: 700px)")

media(med);
med.addListener(media);

// Get width and height of css grid

getWH();

// Main parser

function parser(code2) {

  //console.log(code2);

  code3 = code2.slice(0,code2.length -3);

  //console.log(code3);

  //var count = (code3.match(/@/g) || []).length;

  codeArray1 = code3.split("@");

  // Only works for one Order

  // start@ .. [Starts Tone.js]

  if(codeArray1[0] == "start"){
    Tone.start();
    Tone.Transport.start();
    Tone.Transport.bpm.value = 120;
    insertToPostWindow("Welcome to the uPIGr 2.0");
    fecha = date();
    insertToPostWindow(fecha);
  }

  // eval@ code for evaluate .. [Evaluate javascript code]

  if(codeArray1[0] == "eval"){
    eval(codeArray1[1]);
    insertToPostWindow(code2);
  }

  // draw@ code .. [put code on p5.js draw loop]

  if(codeArray1[0] == "draw"){
    drawing = codeArray1[1];
    insertToPostWindow(code2);
  }

  // open@ .. [open the navigator for select a text file and insert on code editor]

  if(codeArray1[0] == "open"){
    document.getElementById('input_file').click();
    document.getElementById('input_file').addEventListener('change', readSingleFile, false);
  }

  // in@ file .. [insert local text file on code editor]

  if(codeArray1[0] == "in"){
    let file_direction = '../ugs/'+codeArray1[1];
    let file_direction2 = file_direction.replace(" ",""); 
    fetch(file_direction2)
      .then(response => response.text())
      .then(text => {codeeditor.setValue(text)
      codeeditor.focus();
      codeeditor.setCursor(codeeditor.lineCount(), 0);}
      )
  }

  // save@ .. [save the contents of postwindow on a file]
  if(codeArray1[0] == "save"){
    console.log("save");
    savepost();
  }
  
  // score@ pairs milliseconds-file .. [eval files on time]
  
  if(codeArray1[0] == "score"){
	let score1 = codeArray1[1].trim();
    	let split1 = score1.split('\n');
       	insertToPostWindow("Playing score...");
	
	let ended = split1[split1.length-1];
	let ended1 = ended.split("-");
	let ended2 = parseFloat(ended1[0])+500;
	let end = ended2+'-end';
        split1.push(end);	    
	// Playing score:
	for(let i = 0; i < split1.length; i++){
		let split2 = split1[i].split('-');
		//totaltime = totaltime + parseFloat(split2[0]);
	
		window.setTimeout(() => {
			// post filename on postwindow
			insertToPostWindow(split2[1]);
			// interpret file
			let file_direction = '../ugs/'+split2[1];
			let file_direction2 = file_direction.replace(" ","");
			    fetch(file_direction2)
			      .then(response => response.text())
			      .then(text => {codeeditor.setValue(text)
				            codeeditor.focus();
				            codeeditor.setCursor(codeeditor.lineCount(), 0);
			                    parser(text);}
				            );
		

		}
		,split2[0]);
	}
	
  }

}

// P5.js part

function setup(){

  canvas = createCanvas(canvasAreaWidth,canvasAreaHeight);
  canvas.parent("item-1");

  img = loadImage('../images/uPIGr_pig.png');
}

function draw(){
  background(0);
  eval(drawing);
}

// Get Date
function date(){
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let fecha = 'y'+year+'m'+month+'d'+day+'h'+hours+'m'+minutes+'s'+seconds;
	return fecha;
}

// Function for detect media queries:

function media(x) {
  if (x.matches) { // If media query matches
    correction = 200;
  } else {
    correction = 2;
  }
}

// Function for get with and hight of canvas and textareas
function getWH() {

  // Get width and height of editor area:

  var editorArea = document.getElementById('item-0');
  editorAreaWidth = editorArea.offsetWidth;
  editorAreaHeight = editorArea.offsetHeight;

  // Get width and height of canvasarea:

  var canvasArea = document.getElementById('item-1');
  canvasAreaWidth = canvasArea.offsetWidth;
  canvasAreaHeight = canvasArea.offsetHeight;

  // Get width and height of postwindow area:

  var postwindowArea = document.getElementById('item-2');
  postwindowAreaWidth = postwindowArea.offsetWidth;
  postwindowAreaHeight = postwindowArea.offsetHeight;

  // Get width and height of postwindow 1 area:

  var postwindow1Area = document.getElementById('item-3');
  postwindow1AreaWidth = postwindow1Area.offsetWidth;
  postwindow1AreaHeight = postwindow1Area.offsetHeight;

  // Get width and height of postwindow 2 area:

  var postwindow2Area = document.getElementById('item-4');
  postwindow2AreaWidth = postwindow2Area.offsetWidth;
  postwindow2AreaHeight = postwindow2Area.offsetHeight;

  // Get width and height of postwindow 3 area:

  var postwindow3Area = document.getElementById('item-5');
  postwindow3AreaWidth = postwindow3Area.offsetWidth;
  postwindow3AreaHeight = postwindow3Area.offsetHeight;

  // Get width and height of postwindow 4 area:

  var postwindow4Area = document.getElementById('item-6');
  postwindow4AreaWidth = postwindow4Area.offsetWidth;
  postwindow4AreaHeight = postwindow4Area.offsetHeight;
}

// Function for save file of postwindow contents

function savepost() {

  // your CodeMirror textarea ID
  var textToWrite = postwindow.getValue();
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain;charset=utf-8" });
  var fileNameToSaveAs = "uPIGr-"+fecha+".txt";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if(window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); }
    else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);

    }
    downloadLink.click();
}

// Function for read a file:
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    codeeditor.setValue(contents);
    codeeditor.focus();
    codeeditor.setCursor(codeeditor.lineCount(), 0);
  };
  reader.readAsText(file);
}


// Function for post on postwindow

function insertToPostWindow(text) {
  const doc = postwindow.getDoc();
  const cursor = postwindow.getCursor();
  const line = postwindow.getLine(cursor.line);
  var pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
  }
  doc.replaceRange(text+'\n', pos);
  postwindow.scrollIntoView(cursor.line);

}

// Function for post on postwindow 1

function post1(text) {
  const doc = postwindow1.getDoc();
  const cursor = postwindow1.getCursor();
  const line = postwindow1.getLine(cursor.line);
  var pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
  }
  doc.replaceRange(text+'\n', pos);
  postwindow1.scrollIntoView(cursor.line);
}

// Function for post on postwindow 2

function post2(text) {
  const doc = postwindow2.getDoc();
  const cursor = postwindow2.getCursor();
  const line = postwindow2.getLine(cursor.line);
  var pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
  }
  doc.replaceRange(text+'\n', pos);
  postwindow2.scrollIntoView(cursor.line);
}

// Function for post on postwindow 3

function post3(text) {
  const doc = postwindow3.getDoc();
  const cursor = postwindow3.getCursor();
  const line = postwindow3.getLine(cursor.line);
  var pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
  }
  doc.replaceRange(text+'\n', pos);
  postwindow3.scrollIntoView(cursor.line);
}

// Function for post on postwindow 4

function post4(text) {
  const doc = postwindow4.getDoc();
  const cursor = postwindow4.getCursor();
  const line = postwindow4.getLine(cursor.line);
  var pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
  }
  doc.replaceRange(text+'\n', pos);
  postwindow4.scrollIntoView(cursor.line);
}

// Function for intro with ..

function introparser(code) {
  let editMode = 0;
  codeString = code.split('\n');
  for(let i = 0; i < codeString.length; i++){
    let codeArray;
    codeArray = codeString[i].split(' ');
    if(codeArray[codeArray.length-1] == ".."){
        parser(code);
        codeeditor.setValue("");
        editMode = 1;
      }
    }
  if(editMode == 0){
    codeeditor.execCommand('newlineAndIndent');
  }
  else{
    editMode = 0;
  }
}

// Function for resize window:

window.onresize = windowResiz;
function windowResiz() {
  getWH();
  codeeditor.setSize(editorAreaWidth-2,editorAreaHeight-2);
  postwindow.setSize(postwindowAreaWidth-2,postwindowAreaHeight-2);
  postwindow1.setSize(postwindow1AreaWidth-correction,postwindow1AreaHeight-2);
  postwindow2.setSize(postwindow2AreaWidth-correction,postwindow2AreaHeight-2);
  postwindow3.setSize(postwindow3AreaWidth-correction,postwindow3AreaHeight-2);
  postwindow4.setSize(postwindow4AreaWidth-correction,postwindow4AreaHeight-2);
  resizeCanvas(canvasAreaWidth,canvasAreaHeight);
}

// code editor

var codeeditor = CodeMirror.fromTextArea(document.getElementById('codeeditor'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: true,
    lineWrapping:"true",
    extraKeys:{
        Enter: function(){
          var code = codeeditor.getValue();
          introparser(code);
        }
      },
    keyword: {
      "..": "style1",
      "start@": "style1",
      "eval@": "style1",
      "draw@": "style1",
      "open@": "style1",
      "in@": "style1",
      "save@": "style1",
      "score@": "style1"	    
    }
});
codeeditor.save()
codeeditor.setValue("start@ ..");
codeeditor.setSize(editorAreaWidth-2,editorAreaHeight-2);

// postwindow

var postwindow = CodeMirror.fromTextArea(document.getElementById('postwindow'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: true,
    lineWrapping:"true",
    readOnly: 'nocursor',
    keyword: {
      "..": "style1",
      "start@": "style1",
      "eval@": "style1",
      "draw@": "style1",
      "open@": "style1",
      "in@": "style1",
      "save@": "style1",
      "score@": "style1" 
     }
});
postwindow.save();
postwindow.setSize(postwindowAreaWidth-2,postwindowAreaHeight-2);

// post1

var postwindow1 = CodeMirror.fromTextArea(document.getElementById('postwindow1'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: false,
    lineWrapping:true,
    readOnly: 'nocursor'
});
postwindow1.save();
postwindow1.setSize(postwindow1AreaWidth-correction,postwindow1AreaHeight-2);

// post2

var postwindow2 = CodeMirror.fromTextArea(document.getElementById('postwindow2'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: false,
    lineWrapping:"true",
    readOnly: 'nocursor'
});
postwindow2.save();
postwindow2.setSize(postwindow2AreaWidth-correction,postwindow2AreaHeight-2);

// post3

var postwindow3 = CodeMirror.fromTextArea(document.getElementById('postwindow3'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: false,
    lineWrapping:"true",
    readOnly: 'nocursor'
});
postwindow3.save();
postwindow3.setSize(postwindow3AreaWidth-correction,postwindow3AreaHeight-2);

// post4

var postwindow4 = CodeMirror.fromTextArea(document.getElementById('postwindow4'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: false,
    lineWrapping:"true",
    readOnly: 'nocursor'
});
postwindow4.save();
postwindow4.setSize(postwindow4AreaWidth-correction,postwindow4AreaHeight-2);

// Special functions:

// Map ranges

function upigrMap(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

// Random functions

function upigrRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function upigrRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Draw regular polygons

function upigrPoly(x, y, radius, npoints) {
	  let angle = TWO_PI / npoints;
	  beginShape();
	  for (let a = 0; a < TWO_PI; a += angle) {
		      let sx = x + cos(a) * radius;
		      let sy = y + sin(a) * radius;
		      vertex(sx, sy);
		    }
	  endShape(CLOSE);
}


