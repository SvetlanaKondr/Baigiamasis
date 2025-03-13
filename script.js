    // const grizti = document.getElementById("grizti");

//perkeltas i kita puslapi
    // if (grizti) {
    //     grizti.addEventListener('click', function () {
    //         console.log("paspaustas")
    //         window.location.href = "index.html";
    //     });
    // }
   

  // 2. Randame HTML konteinerį, kur bus prekių sąrašas
  const productsContainer = document.querySelector(".products");
  const prekiuSelect = document.getElementById("prekiu-sarasas");

    //prekiu kintamosios
    // 1. Sukuriame masyvą su prekių informacija
    if (!productsContainer) {
        console.log("Šiame puslapyje nėra .products, todėl produktai nebus sugeneruoti.");
    } else {
    const prekes = [
        { id: "X001", kaina: 10, aprasymas: "Trumpas prekės aprašymas.", paveikslelis: "images/prek1.jpg" },
        { id: "X002", kaina: 11, aprasymas: "Trumpas prekės aprašymas.", paveikslelis: "images/prek2.jpg" },
        { id: "X003", kaina: 12, aprasymas: "Trumpas prekės aprašymas.", paveikslelis: "images/prek3.jpg" },
        { id: "X004", kaina: 13, aprasymas: "Trumpas prekės aprašymas.", paveikslelis: "images/prek4.jpg" }
    ];

  //issaugome prelkes local storage, kad galetume perduoti prekiu sarasa kitam puslapiui

    localStorage.setItem("prekes", JSON.stringify(prekes));

    // 3.  Dinamiškai sukuriame prekių HTML kodą
    prekes.forEach(preke => {

//prekiu masyvas
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
        <img src="${preke.paveikslelis}" alt="${preke.id}">
        <h3>${preke.id}</h3>
        <h4>Kaina: ${preke.kaina} Eur</h4>
        <p>${preke.aprasymas}</p>
    `;

        // 4.  Pridedame sukurtą prekę į `.products` konteinerį
        productsContainer.appendChild(productDiv);
    });

    //Paspaudimas, kad prekes padidetu
   
    document.addEventListener("DOMContentLoaded", function () {
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            product.addEventListener('click', function () {
                this.classList.toggle('padidintas');
            });
        });

    });
    }
  

