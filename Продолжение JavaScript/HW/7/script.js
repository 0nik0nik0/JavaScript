import featuredItemsData from './data.js';

const featuredItemsContainer = document.querySelector('.featured-items');
const cartItemsContainer = document.querySelector('.cart-items');
const itemTemplate = document.getElementById('item-template');
const cartItemTemplate = document.getElementById('cart-item-template');

featuredItemsData.featuredItems.forEach(item => {
    const clone = document.importNode(itemTemplate.content, true);

    clone.querySelector('.item-image').src = item.image;
    clone.querySelector('.item-image').alt = item.name;
    clone.querySelector('.item-name').textContent = item.name;
    clone.querySelector('.item-description').textContent = item.description;
    clone.querySelector('.item-price').textContent = `Price: $${item.price}`;
    clone.querySelector('.item-color').textContent = `Color: ${item.color}`;
    clone.querySelector('.item-size').textContent = `Size: ${item.size}`;
    clone.querySelector('.item-quantity').textContent = `Quantity: ${item.quantity}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => {
        const cartItemClone = document.importNode(cartItemTemplate.content, true);

        cartItemClone.querySelector('.cart-item-name').textContent = item.name;
        cartItemClone.querySelector('.cart-item-price').textContent = `$${item.price}`;

        const removeButton = cartItemClone.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            cartItemClone.remove();

            if (cartItemsContainer.children.length === 0) {
                cartItemsContainer.style.display = 'none';
            }
        });

        cartItemsContainer.appendChild(cartItemClone);
        cartItemsContainer.style.display = 'block';
    });

    clone.querySelector('.item-details').appendChild(addToCartButton);

    featuredItemsContainer.appendChild(clone);
});
