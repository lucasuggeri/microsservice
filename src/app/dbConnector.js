import mongoose from "mongoose";
import { uuid } from "uuidv4";

const mongoConnector = async () => {
  await mongoose.connect(
    `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOSTNAME}:${process.env.DATABASE_PORT}`,
    (error) => {
      if (error) {
        return console.log("ocorreu um erro ao se conectar: ", error);
      }
      return console.log("conexão efetuada com sucesso");
    }
  );
};

export default mongoConnector;
