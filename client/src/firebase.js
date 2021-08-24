import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL

})

// const restaurantRepo = new RestaurantRepository();

// // Saving data
// const restaurant = await restaurantRepo.save({
//   name: 'FreshFoods',
//   address: 'SomeStreet 123',
//   city: 'New York',
//   type: 'vegan'
// });

// console.log(restaurant);
// /*
// {
//   id: '0vdxYqEisf5vwJLhyLjA',
//   name: 'FreshFoods',
//   address: 'SomeStreet 123',
//   city: 'New York',
//   type: 'vegan',
//   createdAt: Date('2019-04-29T16:35:33.195Z'),
//   updatedAt: Date('2019-04-29T16:35:33.195Z')
// }*/

// // Listing all documents
// const allRestaurants = await restaurantRepo.list();

// // Filtering documents based on attributes
// const restaurantsInNewYork = await restaurantRepo.list({
//   city: 'New York'
// });

// // More complex queries
// const date = new Date('2019-02-01');
// const restaurants = await restaurantRepo.query((qb) => {
//   return qb
//     .where('openDate', '<=', date)
//     .orderBy('openDate', 'asc');
// });

export const auth = app.auth()

export default app