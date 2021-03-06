const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');
const timestampConfig = require('../timestamp.config');

const { STRING, UUID, INTEGER } = DataTypes;

class Video extends Model {}

const videoDTO = {
    id: {
        type: UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    videoLink: {
        type: STRING,
        allowNull: false,
        field: 'video_link',
    },
    thumbLink: {
        type: STRING,
        allowNull: false,
        field: 'thumb_link',
    },
    views: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    ...timestampConfig.fields,
};

Video.init(videoDTO, {
    ...timestampConfig.tableOptions,
    sequelize,
    tableName: 'videos',
    underscored: true,
});

module.exports = {
    model: Video,
    videoDTO,
};
