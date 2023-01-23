import { PersonModel } from "./models/PersonModel";
import { PersonView } from "./views/PersonView";


const person = new PersonModel({
  first_name: 'Bob',
  last_name: 'Smith',
});

person.on('change', (...args) => {
  console.log('person change: ', args);
});

const personView = new PersonView({ model: person });
personView.render();
document.querySelector('body').append(personView.el);





