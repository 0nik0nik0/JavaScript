import featuredItemsData from './data.js';

const featuredItemsContainer = document.querySelector('.featured-items');
const itemTemplate = document.getElementById('item-template');

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

    featuredItemsContainer.appendChild(clone);
});