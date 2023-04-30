import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function addUser(user) {
  try {
    if (user.email == "ghogareom397@gmail.com") {
      user.role = "authority";
    } else {
      user.role = "user";
    }
    delete user.providerUserInfo;
    await setDoc(doc(db, "users", user.email), user, { merge: true });
  } catch (err) {
    return new Error("not able to add user to firestore: ", err);
  }
}
async function addImage(file) {
  const filename = uuidv4();
  const extension = file.type?.split("/")[1];
  const storageRef = ref(storage, filename + extension);

  const snapshot = await uploadBytes(storageRef, file);

  const url = await getDownloadURL(snapshot.ref);

  return url;
}
export async function createPost(post, status) {
  // addImage(post.file);
  const url = await addImage(post.file);
  post.url = url;
  post.status = status;
  post.id = uuidv4();
  post.date = new Date().toDateString();
  delete post.file;
  await setDoc(doc(db, "posts", post.id), post);
}
export async function createReply(reply, status, originalPost) {
  // addImage(post.file);
  const url = await addImage(reply.file);
  reply.url = url;
  reply.status = status;
  reply.id = uuidv4();
  reply.forPost = originalPost.id;
  reply.date = new Date().toDateString();
  delete reply.file;
  await setDoc(doc(db, "replies", reply.id), reply);
  // change the status of post,
  await setDoc(
    doc(db, "posts", originalPost.id),
    {
      status: true,
    },
    { merge: true }
  );
}
export async function getReplies(forPost) {
  const q = query(collection(db, "replies"), where("forPost", "==", forPost));

  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => doc.data());
  return documents;
}
export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  // const posts = querySnapshot.map((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   return doc.data();
  // });
  let posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return posts;
}

export async function getSinglePost(id) {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}
