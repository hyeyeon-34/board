const { deletecontent } = require('../controllers/deletecontent');

const router = require('express').Router();

router.delete('/deletee/:title', deletecontent); // 컨트롤러 함수 연결 , : 은 정해지지 않은 문자열 표시

module.exports = router;
