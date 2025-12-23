const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let lastFrame = null;

setInterval(() => {
  if (!video.videoWidth) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0);
  const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);

  if (lastFrame) {
    let diff = 0;

    for (let i = 0; i < frame.data.length; i += 10) {
      diff += Math.abs(frame.data[i] - lastFrame.data[i]);
    }

    if (diff > 300000 && !recording) {
      startContinuous();
      setTimeout(stopContinuous, 60000); // grava 1 min
    }
  }

  lastFrame = frame;
}, 500);
