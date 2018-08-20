
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });


  async function displayAll() {
    try {
   const customer = await getCustomer(1);
   console.log('Customer: ', customer.name);
   const movies = await getTopMovies();
   console.log('Movies: ', movies);
   const email = await sendEmail(customer.email, movies);
   console.log(email);
    } catch(err) {
        console.log('Erro:' , err.message);
    }
  }

  displayAll();
  
  function getCustomer(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Allan Passos', 
              isGold: true, 
              email: 'allansuru@htomail.com' 
            });
          }, 4000); 
      });
 
  }
  
  function getTopMovies() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
      });

  }
  
  function sendEmail(email, movies) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Email: ${email}, yours ${movies}`);
          }, 4000);
      });
  }