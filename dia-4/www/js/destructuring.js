//DESTRUCTURING

// const family = ['peter', 'jennifer', 'Sebas', 'Badi', 'Camila']

//ARRAYS-------------------------------->

// const [name1, name2] = family

// console.log(name1)

//OMITIR ELEMENTOS----------------------->

// const [, , name3, name4] = family

// console.log(name3);

// const [t1, t2, ...tail] = family

// console.log(...tail);


//OBJETOS ------------------------------->

// const peterP = {
//     name: 'peter Parker',
//     especie: 'human',
//     age: 40,
//     status: 'alive'
// }
/* <---------------------------------------------> */
// const { name, age } = peterP

// console.log(name, age);
/* <---------------------------------------------> */
// const { bar = false } = peterP

// console.log(bar);
/* <---------------------------------------------> */
// const { status, ...others } = peterP

// console.log(others);
/* <---------------------------------------------> */
// const { name: nombre } = peterP

// console.log(nombre);
/* <---------------------------------------------> */

//CREAR ARRAYS

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const fusionArr = [0, ...arr1, ...arr2]

// console.log(fusionArr);
/* <---------------------------------------------> */

//CREAR OBJETOS

// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 3, d: 4}
// const fusionObj = {...obj1, ...obj2}

// console.log(fusionObj);
/* <---------------------------------------------> */

// const obj3 = {a: 'p', b: 'e', c:'r'}
// const colision = {...obj1, ...obj2, ...obj3}

// console.log(colision);
/* <---------------------------------------------> */

/*                      ______________________________
######################  ||El código no se ejecuta   ||
## DOMCONTENTLOADED ##  ||hasta que se haya cargado ||
######################  ||toda la página            ||
 */ //                  ******************************̣
