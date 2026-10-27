const fetchFifthCard=async()=>{
    try {
        let data=await fetch("https://tkcoderzzz.github.io/Epic-Games-db-web3-/db.json")
        let res = await data.json()
        let fifthCard=res.fifthCard?.map((elem)=>{
            return`
            <div class="fil-card-on-epic-D">
                <div class="fil-card-on-epic-body-D">
                <p class="fil-card-text-on-epic-D">
                    ${elem.titleText}
                </p>
                <a href="#">${elem.link}</a>
                </div>
                <img
                class="fil-img-card-on-epic-d"
                src=${elem.img}
                alt=${elem.alt}
                />
          </div>
            `
        })
        document.querySelector(".fifth-card-on-epic-D .fifth-card-flex-on-epic-d").insertAdjacentHTML("afterbegin", fifthCard.join(""))
        
    } catch (e) {
        console.log(e.message);
    }
}

export default fetchFifthCard