/* Lee con detenimiento cada ejercicio y haz lo que se indica */

/* primer ejercicio */

const petsInTheStore = [
	{ name: 'gordo', pet: 'cat' },
	{ name: 'prince', pet: 'lizard' },
	{ name: 'joocho', pet: 'dog' },
	{ name: 'squishy', pet: 'hamster' },
	{ name: 'aragog', pet: 'spider' },
];

const myPet = petsInTheStore[0];
myPet.name = 'manchas';

/* Sin ejecutar el código. ¿Cuál crees que sea el resultado de la sig. línea? */
console.log(myPet);

/* ¿Qué conceptos necesitaste para resulver el ejercicio? Utiliza cuantas líneas necesites */
// -> ?
// -> ?
// -> ?
// ...

/* segundo ejercicio */

const personalInformation = {
	name: 'Brendan',
	lastName: 'Eich',
	gender: 'male',
	interests: 'JavaScript, programming languages, sleep',
}

function nameTagGenerator( name, lastName, gender ) {
	const honorific = gender === 'female' ? 'Mrs.' : 'Mr.';

	return `${honorific} ${name} ${lastName}`;
}

/* Sin ejecutar el código. ¿Cuál crees que sea el resultado de la sig. línea? */
console.log(nameTagGenerator(personalInformation.name, personalInformation.lastName, personalInformation.gender));
/* Ahora copia el ejercicio a un archivo de JS y ejectutalo hasta este punto.
 * ¿es lo qué esperabas?
 */

// -> ?
/* Si quieres que la siguiente línea: */
console.log(nameTagGenerator(name, lastName, gender));
/* imprima el mismo resultado que en el ejemplo anterior,
 * escribe la línea previa al console log que permita que esto suceda (dónde se indica con -> ?) */

// -> ?
/* Si quieres que la siguiente línea: */
console.log(nameTagGenerator(n, ln, g));
/* imprima el mismo resultado que en el ejemplo anterior,
 * escribe la línea previa al console log que permita que esto suceda (dónde se indica con -> ?) */

/* ¿Qué conceptos necesitaste para resulver el ejercicio? Utiliza cuantas líneas necesites */
// -> ?
// -> ?
// -> ?
// ...

/* tercer ejercicio */

/* Tu compañero utilzó la siguiente librería para date pickers: https://github.com/airbnb/react-dates,
 * él se encuentra de vacaciones por lo que cuando quieren actualizar algo en el código, te piden ayuda a ti.
 * aunque no comprendes del todo que hace la librería ni el componente,
 * sabes que puedes lograrlo con el conocimiento de JS y react que tienes.
 * La solicitud que te dieron es: 
 * "El SingleDatePicker debe mostrar un placeholder con la frase 'fecha de entrega' y su orientación debe ser horizontal"
 * revisas entonces el archivo. Además encuentras en la documentación las proptypes del componente de la librería:

	propTypes = {
		date: PropTypes.string,
		onDateChange: PropTypes.func.isRequired
		focused: PropTypes.bool,
		onFocusChange: PropTypes.func.isRequired
		id: PropTypes.string.isRequired,
	 	placeholder: PropTypes.string, 
	 	orientation: PropTypes.oneOf(['horizontal', 'vertical']),
	}

 * con todo ese conocimiento, modifica la implementación del componente para agregar lo que falta
 * y además podrías aprovechar para ahorrarte algunas líneas ;) */

const rootElement = document.getElementById('root');

const delivery = {
	date: '01-01-2020',
	onDateChange: (date) => console.log(date)
	focused: false,
	onFocusChange: (focused) => console.log(focused),
	id: 'myDatePicker',
	placeholder: 'fecha de entrega',
	orientation: 'horizontal',
}

const app = (
	<SingleDatePicker
		date={delivery.date}
		onDateChange={delivery.onDateChange}
		focused={delivery.focused}
		onFocusChange={delivery.onFocusChange}
		id={delivery.id}
	/>
);

ReactDOM.render(app, rootElement);

// -> Escribe la nueva y mejorada implementación del componente SingleDatePicker:



/* ¿Qué conceptos necesitaste para resulver el ejercicio? Utiliza cuantas líneas necesites */
// -> ?
// -> ?
// -> ?
// ...
