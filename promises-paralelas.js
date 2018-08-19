const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async 1');
       resolve(1);
       // reject('Erro')
    }, 2000);
});
const p2 = new Promise((resolve) => {

    setTimeout(() => {
        console.log('Async 2');
        resolve(2);
    }, 2000);
});
// só resolve a primeira promise, se tiver um reject e cair no catch, soh mostra o erro
Promise.race([p1, p2])
.then(result => console.log('rolou: ', result))
.catch(error => console.log(error))


// resolve todas as promises, se tiver um reject e cair no catch, soh mostra o erro
Promise.race([p1, p2])
.then(result => console.log('rolou: ', result))
.catch(error => console.log(error))