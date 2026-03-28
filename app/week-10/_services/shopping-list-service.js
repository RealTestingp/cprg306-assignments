import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];
  const itemsQuery = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(itemsQuery);
  querySnapshot.forEach((docSnap) => {
    items.push({ id: docSnap.id, ...docSnap.data() });
  });
  return items;
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
  await deleteDoc(doc(db, "users", userId, "items", itemId));
};