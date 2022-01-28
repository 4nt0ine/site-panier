let priceTab = [
  "420 €",
  "216 €",
  "269 €",
  "500 €",
  "325 €",
  "399 €",
  "317 €",
  "502 €",
  "720 €",
  "1329 €",
];
let graphicCardTab = [
  "gtx-1080",
  "gtx-1650-ti",
  "gtx-1660-ti",
  "nvidia-quadro-p1000",
  "radeon-rx-580",
  "radeon-rx-vega",
  "radeon-v2",
  "trx-2060-gaming-z",
  "rtx-2060-super",
  "rtx-3080",
];

const myCarousel = document.querySelector("#myCarousel");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 10000,
  wrap: true,
});

console.log(myCarousel);

//essai

let addContent = document.querySelector(".add-content");

function addItems() {
  //   let formItem = `
  // <div class="col-md-4">
  //   <div class="card mb-4 box-shadow">
  //     <img alt="${graphicCardTab[0]}" class="card-img-top" src="assets/img/gtx-1080.jpg" />
  //     <hr />
  //     <div class="card-body">
  //       <h4 class="card-text">${graphicCardTab[0]}</h3>
  //       <div class="d-flex justify-content-between align-items-center">
  //         <button class="btn btn-primary" title="button-item" type="button">
  //           Acheter
  //         </button>
  //         <small>${priceTab[0]}</small>
  //       </div>
  //     </div>
  //   </div>
  // </div> `;

  let formItem = document.createElement("div");
  formItem.innerHTML = `
  <div class="card mb-4 box-shadow">
    <img alt="${graphicCardTab[0]}" class="card-img-top" src="assets/img/gtx-1080.jpg" />
    <hr />
    <div class="card-body">
      <h4 class="card-text">${graphicCardTab[0]}</h3>
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-primary" title="button-item" type="button">
          Acheter
        </button>
        <small>${priceTab[0]}</small>
      </div>
    </div>
  </div>
`;
  document
    .getElementById("content-1080")
    .addEventListener("click", function () {
      addContent.append(formItem);
    });

  console.log(formItem);
}

addItems();

function test() {
  let moi = document.getElementsByClassName("footer");
  console.log(moi);

  document.getElementsById("buy").addEventListener("click", function () {
    moi.classList.add("zebi");
  });
}
test();
