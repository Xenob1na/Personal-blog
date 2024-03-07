import { defineStore } from "pinia";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  category: string;
}

export const useBlogStore = defineStore("blog", {
  state: () => {
    return {
      isCloseOverlay: false,
      blogs: [] as Blog[],
      currentPage: 1
    };
  },
  actions: {
    async getBlogs() {
      try {
        const result: any = await $fetch(
          `http://localhost:3001/api/v1/blogs/Blogs?page=${this.currentPage}&limit=4`
        );
        this.blogs = result?.data.rows as Blog[];
      } catch (error) {
        console.log(error);
      }
    },
    async deletBlog(id: number) {
      const token = useCookie("accessToken");
      try {
        await $fetch("http://localhost:3001/api/v1/blogs/Blogs/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token.value}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async addBlog({ title, content, image, author, category }: Blog) {
      const token = useCookie("accessToken");
      try {
        const { data, pending, error }: any = await useFetch(
          "http://localhost:3001/api/v1/blogs/Blogs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token.value}`,
            },
            body: {
              title,
              content,
              image,
              author,
              category,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
