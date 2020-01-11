const thumbnails = domClass("j-thumbnail");
const memeImg = domClass("j-display-img");
const showCaptionBtn = domClass("js-caption-submit");
const captionInput = domClass("js-caption-input");
const captionContainer = domClass("js-caption-result");
const memeDownloadBtn = domClass("js-download-btn");
const memeContainer = domClass("js-meme-to-png");

// DOM class reference;

function domClass(x) {
    return document.getElementsByClassName(x);
}

// Gallery;

for (let i = 0; i < 5; i++) {
  thumbnails[i].onclick = function() {
    displayImg(i);
  };
}

function displayImg(i) {
  memeImg[0].setAttribute("src", "images/placeholder_" + i + ".png");
}

// Caption;

showCaptionBtn[0].onclick = function() {
  displayCaption();
};

function displayCaption() {
  captionContainer[0].innerHTML = captionInput[0].value;
}

// Meme to png and download;

memeDownloadBtn[0].onclick = function() {
  downloadMeme();
};

function downloadMeme() {
  html2canvas(memeContainer[0]).then(function(canvas) {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}