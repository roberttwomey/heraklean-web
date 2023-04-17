/*
 stream a EWR radio station NOAA
 LNK https://wxradio.org/NE-Lincoln-WXM20-alt1
 https://radio.weatherusa.net/NWR/WXM20.mp3
 LAX https://radio.weatherusa.net/NWR/KWO37.mp3
 
 */
let song;
let lnkaudio, laxaudio, omaaudio;
let lnkbutton, laxbutton, omabutton;
let audioCtx;
let audioIn;
let bIsPlaying = false;

function setup() {
  // song = loadSound('https://wxradio.org/NE-Lincoln-WXM20-alt1');
  // grab p5.sound audio context
  audioCtx = getAudioContext();

  // lnkaudio = document.getElementById('lnk-stream');
  // lnkaudio = new Audio();
  // lnkaudio.src = "https://wxradio.org/NE-Lincoln-WXM20-alt1";
  // lnkaudio.crossOrigin = "anonymous";
  // lnkaudio.load();

  lnkaudio = createAndConnect("https://wxradio.org/NE-Lincoln-WXM20-alt1");
  omaaudio = createAndConnect("https://wxradio.org/NE-Omaha-KIH61");
  laxaudio = createAndConnect("https://wxradio.org/CA-LosAngeles-KWO37");
  mmaudio = createAndConnect("https://wxradio.org/CA-MontereyMarine-WWF64")
  
  // omaaudio = document.getElementById('oma-stream');
  // laxaudio = document.getElementById('lax-stream');

  // create a media element source node
//   let source = audioCtx.createMediaElementSource(lnkaudio);
//   source.connect(p5.soundOut);
  
//   let source2 = audioCtx.createMediaElementSource(laxaudio);
//   source2.connect(p5.soundOut);

//   let source3 = audioCtx.createMediaElementSource(omaaudio);
//   source3.connect(p5.soundOut);
  
  lnkbutton = createButton('LNK WXM20');
  lnkbutton.position(0, 200);
  omabutton = createButton('OMA KIH61');
  omabutton.position(0, 225);
  laxbutton = createButton('LAX KWO37');
  laxbutton.position(0, 250);
  mmbutton = createButton("MontMar WWF64");
  mmbutton.position(0, 275);
  
  lnkbutton.mousePressed(changelnk);
  omabutton.mousePressed(changeoma);
  laxbutton.mousePressed(changelax);
  mmbutton.mousePressed(changemm);
  
  createCanvas(200, 110);
  background(255, 0, 0);
  textAlign(CENTER);
}

function createAndConnect(thisurl) {
  
  // create and load audio element from URL
  let thisaudio = new Audio();
  thisaudio.src = thisurl;
  thisaudio.crossOrigin = "anonymous";
  thisaudio.load();
  
  // connect to sound out
  let thissource = audioCtx.createMediaElementSource(thisaudio);
  thissource.connect(p5.soundOut);
  
  return thisaudio;
}

function draw() {
  // createCanvas(200, 200);
  background(255, 0, 0);
  if (lnkaudio.paused && laxaudio.paused && omaaudio.paused && mmaudio.paused) {
    background(128);
    text('click to start audio', width/2, height/2);
  } else {
    background(0, 255, 0);
    text('audio is enabled', width/2, height/2);
  }
}

function changelnk() {
  if (!bIsPlaying) {
    audioCtx.resume();
    if (lnkaudio.paused) {
      lnkaudio.play();
      lnkbutton.style('background-color', 'lightgreen');
    }
    bIsPlaying = true;
  } else {
    lnkaudio.pause(); 
    lnkbutton.style('background-color', '#f0f0f0');
    bIsPlaying = false;
  }
}

function changeoma() {
  if (!bIsPlaying) {
    audioCtx.resume();
    if (omaaudio.paused) {
      omaaudio.play();
      omabutton.style('background-color', 'lightgreen');
    }
    bIsPlaying = true;
  } else {
    omaaudio.pause(); 
    omabutton.style('background-color', '#f0f0f0');
    bIsPlaying = false;
  }
}

function changelax() {
  if (!bIsPlaying) {
    audioCtx.resume();
    if (laxaudio.paused) {
      laxaudio.play();
      laxbutton.style('background-color', 'lightgreen');
    }
    bIsPlaying = true;
  } else {
    laxaudio.pause(); 
    laxbutton.style('background-color', '#f0f0f0');
    bIsPlaying = false;
  }
}

function changemm() {
  if (!bIsPlaying) {
    audioCtx.resume();
    if (mmaudio.paused) {
      mmaudio.play();
      mmbutton.style('background-color', 'lightgreen');
    }
    bIsPlaying = true;
  } else {
    mmaudio.pause(); 
    mmbutton.style('background-color', '#f0f0f0');
    bIsPlaying = false;
  }
}

// function mousePressed() {
//   // console.log(getAudioContext());
  
//   if (!bIsPlaying) {
//     audioCtx.resume();
//     if (lnkaudio.paused) 
//       lnkaudio.play();
//     bIsPlaying = true;
//   } else {
//     lnkaudio.pause(); 
//     bIsPlaying = false;
//   }
// }