import mongoose from "mongoose";
const URI =
  "mongodb+srv://hoangphan:Ke1ZdPsc5I50NE0x@cluster0.sxtlxbo.mongodb.net/todo-project?retryWrites=true&w=majority";

function connectDatabase() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(URI)
    .then(() => console.log("========= connect successfully ========="))
    .catch((err) => console.log("--------- connect fail ---------" + err));
}

export default connectDatabase;
