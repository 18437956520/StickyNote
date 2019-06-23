var express = require('express');
var router = express.Router();
var Note = require('../model/note')
/*
1.获取所有的note:GET /api/notes req:{} res:{status:0, data:[{},{}]}
2.创建一个note:POST /api/note/add
3.修改一个note:POST /api/note/edit
4.删除一个note:POST /api/note/delete
*/

/* GET users listing. */
router.get('/notes', function (req, res, next) {
  var data = Note.getAll()
  res.send({
    status: 0,
    data: data
  })
});

router.post('/notes/add', function (req, res, next) {
  var note = req.nody.note;
})

router.post('/notes/edit', function (req, res, next) {

})

router.post('/notes/delete', function (req, res, next) {

})

module.exports = router;