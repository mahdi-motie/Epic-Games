const fetchFirstCardM = async()=>{
    try {
        let data=await fetch("https://nimabt84.github.io/epic-final-db-2/db.json")
        let res = await data.json()
        let firstCardM = res.firstCardM?.map((elem)=>{
            return`
            <div class="title-on-epic-body-M">
            <div class="img-title-on-epic-M">
                <img src=${elem.img} alt=${elem.alt} />
            </div>
            <div class="text-title-on-epic-M">
                <h2>${elem.titleText}</h2>
                <button class="sign-in-on-epic-M"></button>
                <p>${elem.description}</p>
            </div>
        </div>
            `
        })
        document.querySelector(".title-on-epic-container-M").insertAdjacentHTML("afterbegin", firstCardM.join(""))
    } catch (e) {
        console.log(e.message);
        
    }
}

export default fetchFirstCardM