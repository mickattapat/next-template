import { IPost } from "@/models/posts.model";
import apiConfig from "../apiConfig";

const testService = {
  getApi: function () {
    try {
      return apiConfig.getBaseURL(
        "posts",
        {},
        `${process.env.NEXT_PUBLIC_PORT_TARGET}`
      );
    } catch (error) {
      throw error;
    }
  },
  
  postTest: function (payload: IPost) {
    try {
      return apiConfig.postBaseURL(
        "posts",
        { payload: payload },
        `${process.env.NEXT_PUBLIC_PORT_TARGET}`
      );
    } catch (error) {
      throw error;
    }
  },
};

export default testService;
