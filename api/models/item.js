export default function (sequelize, DataTypes) {
  const item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return item;
}
