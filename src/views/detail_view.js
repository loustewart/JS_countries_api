const PubSub = require('../helpers/pub_sub.js');

const DetailView = function(){

};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected', (event) => {
    console.log(event.detail);
    this.render(event.detail);
  })
};

DetailView.prototype.render = function (country) {
  const countryDiv = document.querySelector('#country');
  const header = document.querySelector('h1');
  const region = document.createElement('p');
  const flag = document.createElement('img';

  header.textContent = `Country Selected: ${country.name}`;
  region.textContent = `Region: ${country.region}`;
  flag. = country.flag;


  countryDiv.innerHTML = '';
  countryDiv.appendChild(header);
  countryDiv.appendChild(region);
  countryDiv.appendChild(flag);

};

module.exports = DetailView;
