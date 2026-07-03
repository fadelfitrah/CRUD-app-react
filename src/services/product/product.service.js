import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const productCollection = collection(db, "products");

// GET ALL
export const getProducts = async () => {
  const q = query(productCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// GET ONE
export const getProductById = async (id) => {
  const snapshot = await getDoc(doc(db, "products", id));

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

// CREATE
export const createProduct = async (data, uid) => {
  return await addDoc(productCollection, {
    ...data,
    uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
};

// UPDATE
export const updateProduct = async (id, data) => {
  return await updateDoc(doc(db, "products", id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

// DELETE
export const deleteProduct = async (id) => {
  return await deleteDoc(doc(db, "products", id));
};
