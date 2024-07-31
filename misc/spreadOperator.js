/**
 * Waht is the expeced output of the following script? why?
 */

let x = {
  firstname: 'ahmed',
  lastname: 'alaa',
  address: {
    city: 'Cairo',
    country: 'Egpt',
  }
}

const y = x;
const z = {...x};

y.lastname = 'magdi';

console.log(x);
console.log(y);
console.log(z);
console.log('___________________________');

y.address.city = 'New Capital';

console.log(x);
console.log(y);
console.log(z);
console.log('___________________________');

x = {
  a: 'anything'
}

console.log(x);
console.log(y);
console.log(z);



