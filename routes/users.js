var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function (req, res){
  res.render('users/add')
})

router.post('/add', function (req, res, next){
     XuLyAdd(req.body)
    res.send("OK") // gửi dữ liệu trả về client
})
function  XuLyAdd(data){
  console.log(data)
}


router.get('/list', function (req,res){
    res.json([{id:1,name:"ABC"},{id:2,name:"Xyz"}])
})


module.exports = router;
