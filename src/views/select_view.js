const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:ready', (event) => {
    console.log(event.detail);
    this.populate(event.detail);
  });

  this.element.addEventListener('change', (event) => {
  const selectedIndex = event.target.value;
  PubSub.publish('SelectView:selected', selectedIndex);
})

SelectView.prototype.populate = function (countryData) {
    countryData.forEach((country, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = country.name;
      this.element.appendChild(option);
    })
};
};

module.exports = SelectView;
