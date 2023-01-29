import { Howl } from 'howler'
import kick from './assets/808 kit/808_kick.mp3'
import snare from './assets/808 kit/808_snare.mp3'
import hat from './assets/808 kit/808_hat.mp3'
import clap from './assets/808 kit/808_clap.mp3'
import perc from './assets/808 kit/808_clav.mp3'

import kick707 from './assets/707 kit/707_kick.mp3'
import snare707 from './assets/707 kit/707_snare.mp3'
import hat707 from './assets/707 kit/707_hat.mp3'
import clap707 from './assets/707 kit/707_clap.mp3'
import perc707 from './assets/707 kit/707_perc.mp3'

import kicklive from './assets/Live Kit/kicklive.mp3'
import snarelive from './assets/Live Kit/snarelive.mp3'
import halflive from './assets/Live Kit/halflive.mp3'
import closedlive from './assets/Live Kit/closedlive.mp3'
import tomlive from './assets/Live Kit/tomlive.mp3'

import kickmodern from './assets/modern kit/kickmodern.mp3'
import snaremodern from './assets/modern kit/snaremodern.mp3'
import hatmodern from './assets/modern kit/hatmodern.mp3'
import clapmodern from './assets/modern kit/clapmodern.mp3'

//808 howls

function createAudio(){

}
 const kickAudio = new Howl({
    src: kick,
    // html5: true,
    preload: true,
  });
  
 const snareAudio = new Howl({
    src: snare,
    // html5: true,
    preload: true,
  });
  
  const hatAudio = new Howl({
    src: hat,
    // html5: true,
    preload: true,
    autoplay: false,
  });

  const clapAudio = new Howl({
    src: clap,
    // html5: true,
    preload: true,
    autoplay: false,
  });
  
  const percAudio = new Howl({
    src: perc,
    // html5: true,
    preload: true,
    autoplay: false,
  });

  //707 howls

  const kick707Audio = new Howl({
    src: kick707,
    // html5: true,
    preload: true,
    autoplay: false,
  });
  
 const snare707Audio = new Howl({
    src: snare707,
    // html5: true,
    preload: true,
    autoplay: false,
  });
  
  const hat707Audio = new Howl({
    src: hat707,
    // html5: true,
    preload: true,
    autoplay: false,
  });

  const clap707Audio = new Howl({
    src: clap707,
    // html5: true,
    preload: true,
    autoplay: false,
  });
  
  const perc707Audio = new Howl({
    src: perc707,
    // html5: true,
    preload: true
  });

  //live howls

  const kickAudioLive = new Howl({
    src: kicklive,
    // html5: true,
    preload: true
  });
  
 const snareAudioLive = new Howl({
    src: snarelive,
    // html5: true,
    preload: true
  });
  
  const hatAudioLive = new Howl({
    src: closedlive,
    // html5: true,
    preload: true
  });

  const halfAudioLive = new Howl({
    src: halflive,
    // html5: true,
    preload: true
  });

  const tomAudioLive = new Howl({
    src: tomlive,
    // html5: true,
    preload: true
  });

  // modern howls 

  const kickAudioModern = new Howl({
    src: kickmodern,
    // html5: true,
    preload: true
  });
  
 const snareAudioModern = new Howl({
    src: snaremodern,
    // html5: true,
    preload: true
  });

  const hatAudioModern = new Howl({
    src: hatmodern,
    // html5: true,
    preload: true
  });
  
 const clapAudioModern = new Howl({
    src: clapmodern,
    // html5: true,
    preload: true
  });

  const kit808 = {name: '808', hat: hatAudio,  kick: kickAudio, snare: snareAudio,  clap: clapAudio, perc: percAudio, id: 1}
  const kit707 = {name: '707', hat: hat707Audio,  kick: kick707Audio, snare: snare707Audio, clap: clap707Audio, perc: perc707Audio, id:2}
  const kitLive = {name: 'Live', hat: hatAudioLive,  kick: kickAudioLive, snare: snareAudioLive, clap: halfAudioLive, perc: tomAudioLive, id:3}
  const kitModern = {name: 'Modern', hat: hatAudioModern,  kick: kickAudioModern, snare: snareAudioModern, clap: clapAudioModern, perc: percAudio, id:4}
  
  export const kits = [kit808, kit707, kitLive, kitModern]


// export default { kickAudio, snareAudio, hatAudio, clapAudio, percAudio,kick707Audio, snare707Audio, hat707Audio, clap707Audio, perc707Audio, }