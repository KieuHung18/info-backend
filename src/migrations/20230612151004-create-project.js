const DataTypes = require("sequelize").DataTypes;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("Project", {
      id: {
        type: DataTypes.UUID,
        field: "id",
        primaryKey: true,
        default: DataTypes.UUIDV4,
        allowNull: false,
      },
      images: {
        type: DataTypes.JSONB,
        field: "images",
      },
      name: {
        type: DataTypes.STRING,
        field: "name",
      },
      description: {
        type: DataTypes.STRING(800),
        field: "description",
      },
      content: {
        type: DataTypes.STRING(8000),
        field: "content",
      },
      feature: {
        type: DataTypes.BOOLEAN,
        field: "feature",
      },
      publish: {
        type: DataTypes.BOOLEAN,
        field: "publish",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updatedAt",
      },
      userId: {
        type: DataTypes.UUID,
        field: "userId",
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Project");
  },
};
