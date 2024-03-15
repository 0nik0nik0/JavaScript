const apiUrl = 'https://api.thecatapi.com/v1/images/search';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const catData = data[0];
    console.log('Полученные данные о котике:', catData);

    processCatData(catData);
  })
  .catch(error => console.error('Произошла ошибка при получении данных:', error));

function processCatData(catData) {
  const event = new CustomEvent('catDataLoaded', { detail: catData });
  document.dispatchEvent(event);
}