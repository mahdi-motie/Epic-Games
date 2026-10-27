const fetchSliderM = async () => {
  try {
    let data = await fetch("https://nimabt84.github.io/epic-final-db-2/db.json");
    let res = await data.json();
    console.log(res);
    let sliderM = res.sliderNewsM?.map((elem) => {
      return `
        <div class="swiper-slide">
            <div class="first-slider-img-M">
                <img src=${elem.img} alt=${elem.alt} />
            </div>
            <div class="first-slider-body-M">
                <div class="slider-day-m">
                  <span>${elem.timeRelese}</span>
                </div>
                <div class="slider-title-m">
                  <p>${elem.titleSlider}</p>
                </div>
                <div class="slider-info-m">
                  <span>${elem.infoSlider}</span>
                </div>
                <a href="#">Read More</a>
            </div>
        </div>
        `;
    });
    document.querySelector(
        ".banner-M .swiper-wrapper"  
      )
      .insertAdjacentHTML("afterbegin", sliderM.join(""));
      var swiper = new Swiper(".first-slider-news-Swiper-M", {
        slidesPerView: 1,
        spaceBetween: 20,
      });
  } catch (e) {
    console.log(e.message);
  }
};

export default fetchSliderM;
