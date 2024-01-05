import testService from "@/apis/services/test.service";
import Posts from "@/views/home/Post";
import { IPost } from "@/models/posts.model";
import { AxiosResponse } from "axios";

export default async function Home() {
  try {
    const infoData = await testService.getApi() as AxiosResponse;
    var posts = await infoData.data;
    const payload: IPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const infoPostData = await testService.postTest(payload) as AxiosResponse;
    console.log(infoPostData.data);
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
