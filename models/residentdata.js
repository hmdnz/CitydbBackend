// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const residentdata = sequelize.define("residentdata", {
    FirstName: { type: DataTypes.STRING, allowNull: false },
    LastName: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING, allowNull: true },
    Phone: { type: DataTypes.STRING, allowNull: false },
  });
  return residentdata;
};
