import apiConfig from "../apiConfig";

const testService = {
  testGetApi: function () {
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
};

export default testService;
