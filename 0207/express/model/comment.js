// 임시 DB

const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comment: '안녕하세요',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-02-03',
        comment: '반갑습니다',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comment: '행복하세요',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comment: '축구망했다',
    },
];
// 모듈화 : 외부에서 접근 가능하도록
module.exports = comments;
