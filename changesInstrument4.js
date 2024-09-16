
// Instrument name: mix2
// Soundfont source: MusyngKite
// acoustic_grand_piano
//- rear() : MIDI 36/47 C2-B2 Bass cleff.
// marimba
//- left() : MIDI 48/59 C3-B3 Bass cleff.
// celesta
//- right() : MIDI 60/71 C4-B4 Treble cleff.
// music_box
//- front() : MIDI 72/83 C5-B5 Treble cleff. 
// C,Db,D,Eb,E,F,Gb,G,Ab,A,Bb,B

let mix2 = "limit = new Tone.Limiter(-2.0).toDestination();comp = new Tone.Compressor(-3,3).connect(limit);reverb = new Tone.Reverb({wet: 0.75,decay: 4}).connect(comp);vol = new Tone.Volume(12).connect(reverb);piano = new Tone.Sampler({urls: {'C2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/C2.mp3','Db2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/Db2.mp3','D2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/D2.mp3','Eb2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/Eb2.mp3','E2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/E2.mp3','F2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/F2.mp3','Gb2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/Gb2.mp3','G2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/G2.mp3','Ab2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/Ab2.mp3','A2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/A2.mp3','Bb2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/Bb2.mp3','B2': '/upigr_samples/MusyngKite/acoustic_grand_piano-mp3/B2.mp3','C3': '/upigr_samples/MusyngKite/marimba-mp3/C3.mp3','Db3': '/upigr_samples/MusyngKite/marimba-mp3/Db3.mp3','D3': '/upigr_samples/MusyngKite/marimba-mp3/D3.mp3','Eb3': '/upigr_samples/MusyngKite/marimba-mp3/Eb3.mp3',
'E3': '/upigr_samples/MusyngKite/marimba-mp3/E3.mp3',
'F3': '/upigr_samples/MusyngKite/marimba-mp3/F3.mp3',
'Gb3': '/upigr_samples/MusyngKite/marimba-mp3/Gb3.mp3','G3': '/upigr_samples/MusyngKite/marimba-mp3/G3.mp3','Ab3': '/upigr_samples/MusyngKite/marimba-mp3/Ab3.mp3','A3': '/upigr_samples/MusyngKite/marimba-mp3/A3.mp3','Bb3': '/upigr_samples/MusyngKite/marimba-mp3/Bb3.mp3','B3': '/upigr_samples/MusyngKite/marimba-mp3/B3.mp3','C4': '/upigr_samples/MusyngKite/celesta-mp3/C4.mp3','Db4': '/upigr_samples/MusyngKite/celesta-mp3/Db4.mp3','D4': '/upigr_samples/MusyngKite/celesta-mp3/D4.mp3','Eb4': '/upigr_samples/MusyngKite/celesta-mp3/Eb4.mp3','E4': '/upigr_samples/MusyngKite/celesta-mp3/E4.mp3','F4': '/upigr_samples/MusyngKite/celesta-mp3/F4.mp3','Gb4': '/upigr_samples/MusyngKite/celesta-mp3/Gb4.mp3',
'G4': '/upigr_samples/MusyngKite/celesta-mp3/G4.mp3','Ab4': '/upigr_samples/MusyngKite/celesta-mp3/Ab4.mp3','A4': '/upigr_samples/MusyngKite/celesta-mp3/A4.mp3','Bb4': '/upigr_samples/MusyngKite/celesta-mp3/Bb4.mp3','B4': '/upigr_samples/MusyngKite/celesta-mp3/B4.mp3','C5': '/upigr_samples/MusyngKite/music_box-mp3/C5.mp3','Db5': '/upigr_samples/MusyngKite/music_box-mp3/Db5.mp3','D5': '/upigr_samples/MusyngKite/music_box-mp3/D5.mp3','Eb5': '/upigr_samples/MusyngKite/music_box-mp3/Eb5.mp3','E5': '/upigr_samples/MusyngKite/music_box-mp3/E5.mp3','F5': '/upigr_samples/MusyngKite/music_box-mp3/F5.mp3','Gb5': '/upigr_samples/MusyngKite/music_box-mp3/Gb5.mp3','G5': '/upigr_samples/MusyngKite/music_box-mp3/G5.mp3','Ab5': '/upigr_samples/MusyngKite/music_box-mp3/Ab5.mp3','A5': '/upigr_samples/MusyngKite/music_box-mp3/A5.mp3','Bb5': '/upigr_samples/MusyngKite/music_box-mp3/Bb5.mp3','B5': '/upigr_samples/MusyngKite/music_box-mp3/B5.mp3'}, onload: () => { console.log('..mix2 Samples loaded..');}}).connect(vol);";
