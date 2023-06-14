const DataTypes = require("sequelize").DataTypes;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addConstraint("Artwork", {
      fields: ["userId"],
      type: "foreign key",
      name: "Artwork_userId_fkey",
      references: {
        table: "User",
        field: "id",
      },
    });
    await queryInterface.addConstraint("Project", {
      fields: ["userId"],
      type: "foreign key",
      name: "Project_userId_fkey",
      references: {
        table: "User",
        field: "id",
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeConstraint("Artwork", "Artwork_userId_fkey");
  },
};
