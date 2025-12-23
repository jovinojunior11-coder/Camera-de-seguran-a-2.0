let stream;
let frontCamera = false;

async function startCam() {
  stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: frontCamera ? "user" : "environment"
    },
    audio: true
  });

  document.getElementById("video").srcObject = stream;
}

function switchCamera() {
  frontCamera = !frontCamera;

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }

  startCam();
}

startCam();
