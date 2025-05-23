const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main().then(()=>{
    console.log("DB connection sucessful");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner: "67af5b36f937879570f6d5ad"}));
    await Listing.insertMany(initData.data);
    console.log("data inserted to DB");
};

initDB();