const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB  = require('./config/db.js')

const contactRoute = require("./routes/contact");
const servicesRoute = require("./routes/Service");
const faqRoute = require("./routes/faq");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/contact", contactRoute);
app.use("/services", servicesRoute);
app.use("/faq", faqRoute);

const PORT = process.env.PORT || 5001;

console.log(process.env.MONGO_URI);
connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});