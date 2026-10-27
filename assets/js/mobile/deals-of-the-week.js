const fetchDealsWeek = async () => {
  let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
  let res = await data.json();
  console.log(res);
  let dow = res.dealsOfTheWeek?.map((elem) => {
    return `

           <div class="swiper-slide">
                <div class="dow-card">
                  <img
                    src=${elem.img}
                    class="card-img-top"
                    alt=${elem.alt}
                  />
                  <div class="card-body">
                    <p class="card-text">
                      ${elem.title}
                    </p>
                    <p class="dow-price">${elem.price}</p>
                  </div>
                </div>
              </div>

            `;
  });
  document
    .querySelector(
      ".mbl-discover .discover-mobile .deals-of-the-week .swiper-wrapper",
    )
    .insertAdjacentHTML("afterbegin", dow.join(""));

  var swiper = new Swiper(".dealsSwiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
};

export default fetchDealsWeek;
