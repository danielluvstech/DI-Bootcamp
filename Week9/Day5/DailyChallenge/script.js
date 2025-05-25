class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("How to warm up your voice", "Daniel1993", 320);
video1.watch();

const video2 = new Video("My first coding project", "Julius2u", 670);
video2.watch();