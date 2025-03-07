const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const snapSoundElement = document.getElementById("snapSound");
const webcam = new Webcam(
  webcamElement,
  "user",
  canvasElement,
  snapSoundElement
);

webcam
  .start()
  .then((result) => {
    console.log("webcam started");
    setTimeout(() => {
      var picture = webcam.snap();
      console.log(picture);
    }, 1500);
  })
  .catch((err) => {
    console.log(err);
  });
