import { defineStore } from "pinia";

interface User {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    user: "",
    err: "",
  }),
  actions: {
    async authenticateUser({ email, password }: User) {
      const { data, pending, error }: any = await useFetch(
        "http://localhost:3001/api/v1/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("accessToken", {
          sameSite: "strict",
          secure: true,
          maxAge: 60 * 60 * 24 * 30,
          httpOnly: false,
        });
        token.value = data?.value?.accessToken;
        this.authenticated = true;
      }
    },
    async logUserOut() {
      try {
        await $fetch("http://localhost:3001/api/v1/users/logout");
        const token = useCookie("accessToken");
        token.value = null;
        this.authenticated = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
