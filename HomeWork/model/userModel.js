const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/user.json');

const getAll = () => {
  const data = fs.readFileSync(filePath, 'utf-8'); //this line reads the contents of the user.json file synchronously and stores it in the variable data. The 'utf-8' encoding is specified to ensure that the data is read as a string.
  return JSON.parse(data); //this will parse the JSON string data into a JavaScript object and return it
};

const getByRoll = (roll) => {
  const users = getAll();
  return users.find((user)=>user.roll===roll);
};

const save = (user) => {
  const users = getAll();
  if (users.some((u) => u.roll === user.roll)) {
    throw new Error('User with this roll number already exists');
  }else{
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2)); // convetrs json to sting
  }
  return user;
}

const update=(roll, updatedUser) => {
  const users = getAll();
  const index = users.findIndex((user) => user.roll === roll);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    return users[index];

  }
  return null;
}

const Delete=(roll)=>{
  const users = getAll();
  const updatedUsers = users.filter((user) => user.roll !== roll);
  fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));
}

module.exports = { getAll, getByRoll, save, update, Delete };