//boutton minus
var btnAddTag = document.getElementsByClassName("minus");
for (let i = 0; i < btnAddTag.length; i++) {
    btnAddTag[i].addEventListener("click", dincrement)

}

function dincrement(event) {
    var btnminus = event.target;

    var divelmt = btnminus.parentElement;

    var quantityTag = divelmt.querySelector("p");
    //  console.log(quantityTag);
    var quantity = quantityTag.innerHTML;
    //   console.log(quantity)
    var quantity = event.target.parentElement.querySelector("p").innerHTML;
    if (quantity > 0) { quantity--; }
    //   console.log(quantity)
    event.target.parentElement.querySelector("p").innerHTML = quantity;
    quantityTag.innerHTML = quantity;
    var UnitpriceTag = divelmt.parentElement.parentElement.querySelector(".unitPrice");
    // console.log(UnitpriceTag)
    var priceTag = divelmt.parentElement.parentElement.querySelector(".Price");
    // console.log(priceTag)
    var unitprice = UnitpriceTag.innerHTML;
    // console.log(unitprice)
    var price = quantity * unitprice;
    console.log(price)
    priceTag.innerHTML = price;


}
// boutton plus
var btnAddTag = document.getElementsByClassName("plus");
for (let i = 0; i < btnAddTag.length; i++) {
    btnAddTag[i].addEventListener("click", increment)

}


function increment(event) {
    var btnplus = event.target;
    var btnminus = event.target;
    // console.log(btnplus);
    var divelmt = btnplus.parentElement;
    var divelmt = btnminus.parentElement;
    // console.log(divelmt);
    var quantityTag = divelmt.querySelector("p");
    //  console.log(quantityTag);
    var quantity = quantityTag.innerHTML;
    //   console.log(quantity)
    var quantity = event.target.parentElement.querySelector("p").innerHTML;
    quantity++;
    //   console.log(quantity)
    event.target.parentElement.querySelector("p").innerHTML = quantity;
    quantityTag.innerHTML = quantity;
    var UnitpriceTag = divelmt.parentElement.parentElement.querySelector(".unitPrice");
    // console.log(UnitpriceTag)
    var priceTag = divelmt.parentElement.parentElement.querySelector(".Price");
    // console.log(priceTag)
    var unitprice = UnitpriceTag.innerHTML;
    // console.log(unitprice)
    var price = quantity * unitprice;
    console.log(price)
    priceTag.innerHTML = price;






}
//boutton total
var checkTag = document.getElementsByClassName("check");
for (let i = 0; i < checkTag.length; i++) {
    checkTag[i].addEventListener("click", Total);

}

function Total(e) {
    var checktag = e.target;
    var trtag = checktag.parentElement.parentElement;
    var pricetag = trtag.querySelector(".Price");
    var price = Number(pricetag.innerHTML);
    var totaltag = document.getElementById("total");
    var total = Number(totaltag.innerHTML);
    var btnplus = checktag.parentElement.parentElement.querySelector(".plus");
    var btnminus = checktag.parentElement.parentElement.querySelector(".minus");

    if (checktag.checked == true) {
        total += price;
        btnplus.setAttribute("disabled", true);
        btnminus.setAttribute("disabled", true);

    } else {
        total -= price;
        btnplus.removeAttribute("disabled");
        btnminus.removeAttribute("disabled");

    }
    totaltag.innerHTML = total;

}



let remove = Array.from(document.querySelectorAll(".remove"))
remove.forEach((x) => {
    x.addEventListener("click", (Event) => {
        let del = Event.target
            .parentElement
            .parentElement
            .parentElement
            .parentElement



        del.parentElement.removeChild(del)



    })
})




var likes = document.getElementsByClassName('fas fa-heart')
for (const like of likes) {

    like.addEventListener('click', function() {
        like.classList.toggle('active')
        event.target.style.color = '#c9302c'
    })
}

var dislikes = document.getElementsByClassName('fas fa-heart')
for (const dislike of dislikes) {
    console.log(dislikes)
    dislike.addEventListener('dblclick', function() {
        dislike.classList.toggle('active')
        event.target.style.color = '#000000'


    })
}