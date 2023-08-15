const Info = require("../models/info");
const User = require("../models/user");
const jwt = require('jsonwebtoken')

const fetchInfo = async (req, res) => {
    try {
      console.log("bla")
      const token = req.body.token;
      const username = jwt.verify(token,process.env.SECRET)
      const specificUser = await User.findOne({username : username.username}).populate("info")
      res.status(200).json(specificUser);
    } catch (err) {
      res.status(500).json(err.message);
      console.log(err.message)
    }
  };

  const publishInfo = async (req, res) => {
    // console.log(req.body, "this is the req.body");
    try { 
      const token = req.body.token;
      const username = jwt.verify(token,process.env.SECRET)
      const User1 = await User.findOne({username : username.username});
      if(!User1.info){
        const newinfo = await Info.create(req.body)
        const UserExists = await User.findOneAndUpdate({username : User1.username},{info:newinfo._id});
        res.status(200).json(newinfo._id);
      }else{
        console.log(req.body);
        const InfoExists = await Info.findOneAndUpdate({_id : User1.info},req.body, {new: true});
          res.status(200).json(InfoExists);
        }
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

  module.exports = {fetchInfo, publishInfo}