import mongoose from "mongoose"

export const db = async () => {

  const mongo_uri = `mongodb+srv://harsh:harsh_7080@file-sharing.0mwn8co.mongodb.net/?retryWrites=true&w=majority`
  try {
    await mongoose.connect(mongo_uri, { UseNewUrlParser: true })
    console.log("database connected sucessfully")
  }
  catch (error) {
    console.error("error connecting url", error.message)
  }
}