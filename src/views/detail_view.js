const PubSub = require('../helpers/pub_sub.js');

const DetailView = function(container){
this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected', (event) => {
    // console.log(event.detail);
    this.render(event.detail);
  })
};

DetailView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = `Country Selected: ${country.name}`;

  const region = document.createElement('p');
  region.textContent = `Region: ${country.region}`;

  const flag = document.createElement("img");
  flag.classList.add('country-flag');
  flag.textContent = `Flag:`;
  flag.src = country.flag

  this.container.appendChild(heading);
  this.container.appendChild(region);
  this.container.appendChild(flag);
};




module.exports = DetailView;
