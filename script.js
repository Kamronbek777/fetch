let wrapper = document.createElement('div');
wrapper.className = 'wrapper';

fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json')
  .then(response => response.json())
  .then(data => {
    renderPokemon(data);

    const searchInput = document.querySelector('input');

    searchInput.addEventListener('input', function () {
      const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
      renderPokemon(filteredData);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

function renderPokemon(data) {
  wrapper.innerHTML = '';
  data.forEach(item => {
    let div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${item.pic}"></img>
      <h1>${item.name}</h1>
      <p>${item.fulldesc}</p>
    `;
    wrapper.appendChild(div);
  });
  document.body.append(wrapper);
}