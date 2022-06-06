import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
import { DbType } from "../firebase/config";
import { StatusEnum } from "../utils/contants";

/**
 *
 * @param payload {
 *  name: string,
 *  type: string,
 *  oldStatus: number,
 *  status: number,
 *  updateTime: moment()
 * }
 * @param db
 */

export async function sendData(payload: any, db: DbType) {
  try {
    const switchRef = doc(db, "iotswitches", `${payload.id}`);
    await updateDoc(switchRef, {
      oldStatus: payload.oldStatus,
      status: payload.status,
      updateTime: payload.updateTime,
    });
    if (payload.type === "motion") {
      await addDoc(collection(db, "iothistories"), {
        name: payload.name,
        type: payload.type,
        status: `${payload.oldStatus} >> ${payload.status}`,
        updateTime: payload.updateTime,
      });
    } else {
      await addDoc(collection(db, "iothistories"), {
        name: payload.name,
        type: payload.type,
        status: `${payload.oldStatus ? StatusEnum.OPEN : StatusEnum.CLOSE} >> ${
          payload.status ? StatusEnum.OPEN : StatusEnum.CLOSE
        }`,
        updateTime: payload.updateTime,
      });
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
