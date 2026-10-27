const fetchSlider = async () => {
  try {
    let data = await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json");
    let res = await data.json();
    let slider = res.sliderNews?.map((elem) => {
      return `
        <div class="swiper-slide">
            <div class="first-slider-img-D">
                <img src=${elem.img} alt=${elem.alt} />
            </div>
            <div class="first-slider-body-D">
                <div class="slider-day-d">
                  <span>${elem.timeRelese}</span>
                </div>
                <div class="slider-title-d">
                  <p>${elem.titleSlider}</p>
                </div>
                <div class="slider-info-d">
                  <span>${elem.infoSlider}</span>
                </div>
                <a href="#">Read More</a>
            </div>
        </div>
        `;
    });
    document.querySelector(
        ".banner .swiper-wrapper"  
      )
      .insertAdjacentHTML("afterbegin", slider.join(""));
      var swiper = new Swiper(".first-slider-news-Swiper-D", {
        slidesPerView: 1.25,
        spaceBetween: 20,
      });
  } catch (e) {
    console.log(e.message);
  }
};

export default fetchSlider;
