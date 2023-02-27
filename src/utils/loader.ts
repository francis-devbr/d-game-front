import GameAudio from "./audio";
import { EventsObject } from "./EventsObject";

class _Loader extends EventsObject {
  imgs = [
    
    "assets/images/cards/fr_common.svg",
    "assets/images/cards/fr_epic.svg",
    "assets/images/cards/fr_legendary.svg",
    "assets/images/cards/fr_rare.svg",
    "assets/images/cards/fr_uncommon.svg",
    "assets/images/cards/backside.svg",
  ];
  audios = {
    music: "assets/audio/bg-music.mp3",
    shuffle: "assets/audio/shuffle.mp3",
    play: "assets/audio/play.mp3",
    draw: "assets/audio/draw.mp3",
  };

  totalCnt = 0;
  loadedCnt = 0;

  constructor() {
    super();
    this.onProgress = this.onProgress.bind(this);
  }

  load() {
    this.totalCnt = this.imgs.length + Object.keys(this.audios).length;
    this.loadedCnt = 0;

    GameAudio.preload(this.audios, this.onProgress);

    for (const img of this.imgs) {
      this.preloadImage(img);
    }
  }

  preloadImage(url: string) {
    try {
      var _img = new Image();
      _img.src = url;
      _img.onload = this.onProgress;
    } catch (e) {
      console.error("Failed Loading Images");
      console.error(e);
    }
  }

  onProgress() {
    this.loadedCnt++;
    this.fireEvent("progress", this.loadedCnt / this.totalCnt);
    if (this.loadedCnt === this.totalCnt) this.fireEvent("completed");
  }
}

const Loader = new _Loader();
export default Loader;
