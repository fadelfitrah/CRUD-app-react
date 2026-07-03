import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

const COLLECTION_NAME = "cultures";

export const createCulture = async (data) => {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return docRef.id;
};

export const getCultures = async () => {
  const q = query(
    collection(db, COLLECTION_NAME),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getCultureById = async (id) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
};

export const updateCulture = async (id, data) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: new Date(),
  });
};

export const deleteCulture = async (id) => {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
};
