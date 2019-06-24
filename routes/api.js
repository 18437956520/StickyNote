var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note
/*
1.获取所有的note:GET /api/notes req:{} res:{status:0, data:[{},{}]}
2.创建一个note:POST /api/note/add
3.修改一个note:POST /api/note/edit
4.删除一个note:POST /api/note/delete
*/

/* GET users listing. */
router.get('/notes', function (req, res, next) {
  Note.findAll({
    raw: true
  }).then(function (notes) {
    res.send({
      status: 0,
      data: notes
    })
  })
});

router.post('/notes/add', function (req, res, next) {
  var note = req.body.note;
  Note.create({
    text: note
  }).then(function () {
    res.send({
      status: 0
    })
  }).catch(function () {
    res.send({
      status: 1,
      errorMsg: '数据库出错'
    })
  })
})

router.post('/notes/edit', function (req, res, next) {
  Note.update({
    text: req.body.note
  }, {
    where: {
      id: req.body.id
    }
  }).then(function () {
    res.send({
      status: 0
    })
  })
})

router.post('/notes/delete', function (req, res, next) {
  Note.destroy({
    where: {
      id: req.body.id
    }
  }).then(function () {
    res.send({
      status: 0
    })
  })
})

module.exports = router;