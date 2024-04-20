import { axios } from "@/axios";
import { atom, useRecoilState } from "recoil";

interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  profilePic: { url: string; public_id: string };
  followers: string;
  following: string;
  bio: string;
  isFrozen: boolean;
}

export const userState = atom({
  key: "userState",
  default: {
    name: "",
    username: "",
    email: "",
    bio: "",
    profilePic: { url: "", public_id: "" },
  },
  effects: [
    ({ onSet, setSelf }) => {
      onSet(() => {
        axios
          .get("/users/profile", { withCredentials: true })
          .then((response) => {
            setSelf(response.data);
          })
          .catch((error) => {
            console.error("Error fetching new user data:", error);
          });
      });
    },
  ],
});

export const useUserState = () => {
  const [user, setUser] = useRecoilState(userState);

  const updateUser = (newUser: IUser) => {
    setUser(newUser);
  };
  return { user, updateUser };
};


