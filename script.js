const grizti = document.getElementById("grizti")

// grizti.addEventListener('click', function() {
//     window.location.href = "index.html";
    // Patikrina, ar mygtukas egzistuoja
    if (grizti) { 
        grizti.addEventListener('click', function() {
            window.location.href = "index.html";
        });
    } 
    // else {
    //     console.error("Klaida: Elementas su id='grizti' nerastas.");
    // }
// });


document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', function () {
            this.classList.toggle('padidintas');
        });
    });
});

