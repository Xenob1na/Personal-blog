import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  authorName: string;
}

const blogsCollectionRef = collection(db, "blogs");

export const useBlogStore = defineStore("blog", {
  state: () => {
    return {
      isCloseOverlay: false,
      blogs: [] as Blog[],
      isPendding: false,
    };
  },
  actions: {
    async getNotes() {
      this.isPendding = true;
      onSnapshot(blogsCollectionRef, (querySnapshot) => {
        let Blogs: any = [];
        querySnapshot.forEach((doc) => {
          let blog: any = {
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            authorName: doc.data().authorName,
          };
          Blogs.push(blog);
        });
        this.blogs = Blogs;
        this.isPendding = false;
      });
    },
  },
});
