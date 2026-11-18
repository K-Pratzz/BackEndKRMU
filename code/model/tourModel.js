// const fs = require('fs');
// const path = require('path');
// const toursFilePath = path.join(__dirname, '../data/tours.json');

// const getAll = ()=>{
//     const toursData = fs.readFileSync(toursFilePath, 'utf-8');
//     return JSON.parse(toursData);
// }

// const getById = (id)=>{
//     const tours = getAll();
//     return tours.find(tour => tour.id === id);
// }

// const getbyQuery = (query)=>{
//     const tours = getAll();
//     return tours.filter(tour => tour.name.includes(query));
// }

// const save = (newTour)=>{
//         const tours = getAll();
//         tours.push(newTour);
//         fs.writeFileSync(toursFilePath,JSON.stringify(tours));
// }

// const updateTour = (id,updatedTour)=>{
//             const tours = getAll();
//             const index = tours.findIndex(tour => tour.id === id);
//             if(index === -1){
//                 return null;
//             }
//             tours[index] = {id,...updatedTour};

//             fs.writeFileSync(toursFilePath,JSON.stringify(tours));

//             return tours[index];

// }

// const deleteTour = (id)=>{
//     const tours = getAll();
//     const index = tours.findIndex(tour => tour.id === id);
//     if(index === -1){
//         return null;
//     }
//     tours.splice(index, 1);
//     fs.writeFileSync(toursFilePath, JSON.stringify(tours));
//     return true;
// }

// module.exports = {
//     getAll,
//     getById,
//     getbyQuery,
//     save,
//     updateTour,
//     deleteTour
// };

const Tour = require('../model/Tour');

const getAll = async ()=>{
    return await Tour.find(); //this will return all the tours from the database, tour.find() is a mongoose method that returns a promise, so we need to use await to wait for the promise to resolve and return the result
}

const save = async (newTour)=>{
    return await Tour.create(newTour); //tour.create is a mongoose method that creates a new document in the database, it returns a promise, so we need to use await to wait for the promise to resolve and return the result
}

module.exports = {
    getAll,
    save
}