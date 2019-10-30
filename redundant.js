let booksCover = [];
let booksTitle = [];
let booksDescription = [];
let booksDetail = [];

function createBooklist(result) {
    let flipcard = document.getElementById("flipcard");
    for (let i = 0; i < result.books.length; i++) {
        booksCover.push(result.books[i].cover);
        booksTitle.push(result.books[i].title);
        booksDescription.push(result.books[i].description);
        booksDetail.push(result.books[i].detail);

        let spot1 = document.createElement("flip-card-front");
        let spot2 = document.createElement("flip-card-back");
        let spot3 = document.createElement("flip-card-back");
        let spot4 = document.createElement("flip-card-back");

        spot1.innerHTML = booksCover;
        spot2.innerHTML = booksTitle;
        spot3.innerHTML = booksDescription;
        spot4.innerHTML = booksDetail;
    }
    console.log(booksCover);
    console.log(booksTitle);
    console.log(booksDescription);
    console.log(booksDetail);
}