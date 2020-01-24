import { Component, OnInit, ViewChild } from '@angular/core';
import { Hls } from 'hls.js';
declare var Hls;
@Component({
  selector: 'app-viewer-page',
  templateUrl: './viewer-page.component.html',
  styleUrls: ['./viewer-page.component.scss']
})
export class ViewerPageComponent implements OnInit {
  @ViewChild('Video', { static: true })
  video: HTMLVideoElement;

  constructor() {}
  // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
  // When the browser has built-in HLS support (check using `canPlayType`),
  // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
  // This is using the built-in support of the plain video element, without using hls.js.
  ngOnInit() {
    const video = this.video;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('http://cloud.hanako.jp/hls/stream.m3u8');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.onplaying(Hls.Events);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'http://cloud.hanako.jp/hls/stream.m3u8';
      video.addEventListener('canplay', () => {
        video.onplaying(Hls.Events);
      });
    }
  }
}
