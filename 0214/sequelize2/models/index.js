'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
//모델
db.Post = require('./post')(sequelize);
db.Member = require('./member')(sequelize);
db.Profile = require('./profile')(sequelize);
db.comment = require('./comment')(sequelize);

// 1:1 관계
db.Member.hasOne(db.Profile, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Profile.belongsTo(db.Member, {
    foreignKey: 'memberId',
    onDelete: 'CASCADE',
});

// 1:다 관계
db.Post.hasMany(db.comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
db.comment.belongsTo(db.comment, { foreignKey: 'postId', onDelete: 'CASCADE' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
