const model=require('../model/userModel');
const getAllUsers=(req,res)=>{
  const users=model.getAll();
  res.json(users); //we get json and send json response to the client
}

const getUserByRoll = (req, res) => {
  const id = parseInt(req.params.roll, 10);
  const user = model.getByRoll(id); // Fixed: was model.getById
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const createUser = (req, res) => {
  try {
    const savedUser = model.save(req.body);
    res.status(201).json(savedUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateUser=(req,res)=>{
  const id=parseInt(req.params.roll,10);
  const updated=model.update(id,req.body);
  if(updated){
    res.status(200).json(updated);
  }else{
    res.status(404).json({message:'User not found'});
  }
}

const deleteUser=(req,res)=>{
  const id=parseInt(req.params.roll,10);
  const user=model.getByRoll(id);
  if(user){
    model.Delete(id);
    res.status(200).json({message:'User deleted successfully'});
  }else{
    res.status(404).json({message:'User not found'});
  }
}

module.exports={getAllUsers,getUserByRoll,createUser,updateUser,deleteUser};


