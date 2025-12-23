let recorder;
let chunks = [];
let recording = false;

function startContinuous() {
  if (!stream) return;

  recorder = new MediaRecorder(stream, {
    mimeType: "video/webm"
  });

  recorder.ondataavailable = e => chunks.push(e.data);

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    chunks = [];
    downloadVideo(blob);
  };

  recorder.start(1000 * 60 * 5); // arquivos de 5 minutos
  recording = true;
}

function stopContinuous() {
  if (recorder && recording) {
    recorder.stop();
    recording = false;
  }
}

function downloadVideo(blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `gravacao_${Date.now()}.webm`;
  a.click();
}
