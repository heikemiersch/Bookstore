console.log("start");

fetch("https://api.myjson.com/bins/zyv02", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    // console.log(result);
    // console.log(result.books[0].cover);
    // console.log(result.books[7].title);
    // console.log(result.books[3].title);
    let books = result.books;
    createBooklist(books);
    createSearchbar(books);
  })

  .catch(function (error) {
    console.log(error, "<-- error");
  });

function createBooklist(books) {
  let container = document.getElementById("flipcard");
  container.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let flipCard = document.createElement("div");
    flipCard.setAttribute("class", "flip-card");
    let flipCardInner = document.createElement("div");
    flipCardInner.setAttribute("class", "flip-card-inner");
    let flipCardFront = document.createElement("div");
    flipCardFront.setAttribute("class", "flip-card-front");
    let flipCardBack = document.createElement("div");
    flipCardBack.setAttribute("class", "flip-card-back");
    let image = document.createElement("img");
    image.setAttribute("src", books[i].cover);
    image.setAttribute("class", "image-size");
    let title = document.createElement("h1");
    title.innerHTML = books[i].title;
    let description = document.createElement("h3");
    description.innerHTML = books[i].description;
    let button = document.createElement("button");
    button.setAttribute("src", books[i].detail);
    button.innerHTML = "Details";

    button.addEventListener("click", function () {

      createPopup(books)
      console.log(books[i].detail);
    });




    // putting elements into other elements

    flipCardBack.appendChild(title);
    flipCardBack.appendChild(description);
    flipCardBack.appendChild(button);
    flipCardFront.appendChild(image);
    flipCardInner.appendChild(flipCardBack);
    flipCardInner.appendChild(flipCardFront);
    flipCard.appendChild(flipCardInner);
    // flipCardBack.appendChild(popUpImage);

    container.appendChild(flipCard);
  }
}

function createPopup(books) {
  // let popUpImage = document.createElement("img");

  // popup.appendChild(popUpImage);

  // let showDetails = document.getElementById("popup");
  // showDetails.innerHTML = books[i].detail;
  // Get the modal
  let modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }


  // showDetails.display = "block";
  // let detail = document.createElement("image");
  // detail.setAttribute("src", books[i].detail);
  // detail.innerHTML = books[i].detail;
  // books[i].detail.display = "block";
}

function createSearchbar(books) {
  // filter books
  // grab input field in the form
  const searchbar = document.getElementById("searchbar");
  // attach event listener (key up event) plus callback function
  searchbar.addEventListener("keyup", function (event) {
    // grab value of the input field and convert to lower case
    const term = event.target.value.toLowerCase();
    // create array containing books that match (not -1), call createBooklist with new content
    let filteredBooks = [];
    books.forEach(function (oneBook) {
      if (
        oneBook.title.toLowerCase().indexOf(term) != -1 ||
        oneBook.cover.toLowerCase().indexOf(term) != -1 ||
        oneBook.description.toLowerCase().indexOf(term) != -1 ||
        oneBook.detail.toLowerCase().indexOf(term) != -1
      ) {
        filteredBooks.push(oneBook);
      }
    });
    createBooklist(filteredBooks);
  });
}