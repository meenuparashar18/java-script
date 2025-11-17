const form= document.getelementbyId('Company form');
const cardContainer= document.getelementbyId('card-container');
 form.addEventListener('submit', function(event) {
      event.preventDefault();
 });
  const companyData = {
        name: document.getElementById('company').value,
        motto: document.getElementById('motto').value,
        image: document.getElementById('image').value
      };
const card = document.createElement('div');
      card.classList.add('card');
 card.innerHTML = `
        <img src="${companyData.image}" alt="${companyData.name}">
        <h2>${companyData.name}</h2>
        <p>"${companyData.motto}"</p>
      `;
       cardContainer.appendChild(card);