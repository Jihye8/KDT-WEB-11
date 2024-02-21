const Visitor = require('../model/Visitor');

exports.allVisitor = async (req, res) => {
    const response = await Visitor.allVisitor();
    console.log(response);
    res.json({ result: response });
};
// 하나 방명록 조회
exports.getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await Visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};

exports.postVisitor = async (req, res) => {
    console.log(req.body);
    const data = await Visitor.postVisitor(req.body);
    console.log(data);
    res.json({
        result: true,
        id: data.insertId,
        name: req.body.name,
        comment: req.body.comment,
    });
};

exports.patchVisitor = async (req, res) => {
    await Visitor.patchVisitor(req.body);
    res.json({ result: true });
};
exports.deleteVisitor = async (req, res) => {
    await Visitor.deleteVisitor(req.body.id);
    res.json({ result: true });
};
// exports.deleteVisitor = async (req, res) => {};
