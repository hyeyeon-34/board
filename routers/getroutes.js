const { get } = require('../controllers/get');

const router = require('express').Router();

router.get('/gete', get ); // 컨트롤러 함수 연결 , : 은 정해지지 않은 문자열 표시

module.exports = router;