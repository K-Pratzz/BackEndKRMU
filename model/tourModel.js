const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const getById = (id) => {
  const packages = getAll();
  return packages.find((tour) => tour.id === id);
};

const save = (newTourData) => {
  const packages = getAll();
  const newId = packages.length > 0 ? packages[packages.length - 1].id + 1 : 1;
  const tourToSave = { id: newId, ...newTourData };

  packages.push(tourToSave);
  fs.writeFileSync(filePath, JSON.stringify(packages, null, 2), 'utf-8');
  return tourToSave;
};

const update = (id, updatedTour) => {
  const packages = getAll();
  const index = packages.findIndex((tour) => tour.id === id);
  if (index !== -1) {
    packages[index] = { ...packages[index], ...updatedTour };
    fs.writeFileSync(filePath, JSON.stringify(packages, null, 2), 'utf-8');
    return packages[index];
  }
  return null;
};

const Delete =(id)=>{
  const packages = getAll();
  const index = packages.findIndex((tour) => tour.id === id);
  const updatedPackages = packages.filter((tour) => tour.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(updatedPackages, null, 2), 'utf-8');
}
module.exports = {
  getAll,
  getById,
  save,
  update,
  Delete
};