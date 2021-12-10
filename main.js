$(onReady);

function onReady() {
    console.log(`JQ`);

    //add product w form
    $('#productForm').on('submit', onAddProduct);

    //delete item w button
    $(document).on('click', '.deleteBtn', onDeleteBtn);
}
let inventory = [];

function onAddProduct(event) {
    console.log(`product added`);
    event.preventDefault();

    let name = $('#nameInput').val();
    let color = $('#colorInput').val();
    let size = $('#sizeInput').val();
    let price = $('#priceInput').val();

    let product ={
        name: name,
        color: color,
        size: size,
        price: price
    }
    inventory.push(product);

    console.log(inventory);

    //render teh inventory
    //loop thru inventory array
    //render each product
    //as a <tr>

    for (let product of inventory)
        $('productList').empty();

        $('#productList').append(`
        <tr>
            <td>${product.name}</td>
            <td>${product.color}</td>
            <td>${product.size}</td>
            <td>$${product.price}</td>
            <td>
                <button class="deleteBtn">
                    delete
                </button>
            </td>
        </tr>

        `);
}

function onDeleteBtn() {
    $(this).parent().parent('tr').remove();
}

