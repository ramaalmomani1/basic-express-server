'use strict';

module.exports = (req, res, next) => {
  let pN = req.query.name
// let pN = name.toUpperCase()
//   let pN = req.params.name;
  console.log(typeof pN, ' ', pN)
  if(!isNaN(pN)) next({message: 'Not a name'});
  req.name = pN
  next()
}

