import { collection, addDoc } from "firebase/firestore";
import { DbType } from "../firebase/config";

export async function sendMessage(payload: any, db: DbType) {
  try {
    const docRef = await addDoc(collection(db, "messages"), payload);
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
