$(onReady);

function onReady() {
    console.log(`JQ`);

    $('#productForm').on('submit', onAddProduct);
}

function onAddProduct(event) {
    console.log(`product added`);
    event.preventDefault();
}