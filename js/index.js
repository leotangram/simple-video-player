const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  $forward.hidden = false;
  $backward.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $forward.hidden = true;
  $backward.hidden = true;
  $play.hidden = false;
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  $video.currentTime -= 10;
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime += 10;
}

$video.addEventListener("loadedmetadata", handleLoadedMetadata);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoadedMetadata() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInputProgress);

function handleInputProgress() {
  $video.currentTime = $progress.value;
}
