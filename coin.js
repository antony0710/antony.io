const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const status = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");
const random=document.querySelector("#random")
let headsCount = 0;
let tailsCount = 0;

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function processResult(result) {
  if (result === "heads") {
    headsCount++;
    heads.innerText= headsCount;
  } else {
    tailsCount++;
    tails.innerText = tailsCount;
  }
  status.innerText = result.toUpperCase();
}

function flipCoin() {
  coin.setAttribute("class", "");
  const random = Math.random();
  const result = random < 0.5 ? "heads" : "tails";
  document.getElementById("random").innerHTML = Math.random();
  deferFn(function () {
    coin.setAttribute("class", "animate-" + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
  cyrb128("apples");
  document.getElementById("testing").innerText = cyrb128("antony");
}

function cyrb128(str) {
  let h1 = 1779033703, h2 = 3144134277,
      h3 = 1013904242, h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
      k = str.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  document.getElementById("random").innerText =[(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
  return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}


button.addEventListener("click", flipCoin);