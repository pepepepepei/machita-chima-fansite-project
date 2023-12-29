{
  const loading = document.getElementById("loading");
  const randomList = ["/img/loading-min.GIF", "/img/loading2.gif"];
  const num = Math.floor(Math.random() * randomList.length);
  const printHtml = `<img src="${randomList[num]}" id="loadingImg" alt="ランダム画像">`;
  loading.innerHTML = printHtml;

  window.addEventListener("load", stopload);
  setTimeout(stopload, 10000);

  function stopload() {
    const loadingImg = document.getElementById("loadingImg");

    new Promise((resolve) => {
      // 1.2秒スリープして、#loadingImgがフェードアウト
      setTimeout(() => {
        loadingImg.classList.add("loaded");
        resolve();
      }, 1200);
    }).then(() => {
      // #loadingImgのフェードアウトを待ってから#loadingがフェードアウト
      setTimeout(() => {
        loading.classList.add("loaded");
      }, 300);
    });
  }
}
