// criei uma promise - funcao async.

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(2);  // pending => resolved, fulfilled
        reject(new Error('message error')); // pending => reject
    }, 2000);
  
    // reject(new Error('message error'));
});

// consumir essa minha promise

p.then((result) => {
    console.log('Resultado: ', result);
}).catch(error => {
    console.log('Erro: ', error.message);
});


