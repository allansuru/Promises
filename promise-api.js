const p = Promise.resolve({ id: 1 });
const pe = Promise.reject(new Error('estudos'));


p.then(result => console.log(result));

pe.catch(error => console.log(error.message))

