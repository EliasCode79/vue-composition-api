// por defecto ts infiere el tipo cuando le asignamos un valor, en este caso numberArray infiere el tipo de un array de number.
export const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

// aca le decimos a ts q el array  puede ser de tipo string o number, si no lo hacemos al agregar el '4', este nos mostrara un error.
const numberArray2: (number | string)[] = [...numberArray];
numberArray2.push('4');

console.log({ numberArray, numberArray2 });
