import { DataTypes, Model } from "../deps.ts";
import { db } from "../db/dbConfig.ts";

class Book extends Model {
  static table = "bookns";
  static timestamps = true;
  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 25,
      allowNull: false,
    },
    page_count: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
  };
}
db.link([Book]);
// db.sync({ drop: true });

export default Book;
