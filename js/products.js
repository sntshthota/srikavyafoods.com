const bestSellers = [
    "p (1).jpeg",
    "p (2).jpeg",
    "p (3).jpeg",
    "p (4).jpeg",
    "p (5).jpeg",
    "p (6).jpeg",
];

const newProducts = [
    "n (1).jpeg",
    "n (2).jpeg",
    "n (3).jpeg",
    "n (4).jpeg",
    "n (5).jpeg",
    "n (6).jpeg",
    "n (7).jpeg",
];

const allProducts = [
    "a (1).jpeg",
    "a (2).jpeg",
    "a (3).jpeg",
    "a (4).jpeg",
    "a (5).jpeg",
    "a (6).jpeg",
    "a (7).jpeg",
    "a (8).jpeg",
    "a (9).jpeg",
    "a (10).jpeg",
    "a (11).jpeg",
    "a (12).jpeg",
    "a (13).jpeg",
    "a (14).jpeg",
    "a (15).jpeg",
    "a (16).jpeg",
];

function loadProducts(containerId, folder, images) {
    const container = document.getElementById(containerId);
    images.forEach(img => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `<img src="images/${folder}/${img}" alt="product">`;
        container.appendChild(div);
    });
}

loadProducts("best-sellers", "best-sellers", bestSellers);
loadProducts("new-products", "new-products", newProducts);
loadProducts("all-products", "all-products", allProducts);
