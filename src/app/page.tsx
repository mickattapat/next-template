import testService from "@/apis/services/testService";
import Posts from "@/components/templates/Posts/Post";
import { IPost } from "@/models/posts.interface.model";

export default async function Home() {
  try {
    const infoData = await testService.testGetApi();
    var posts = await infoData.data;

    const payload: IPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const infoPostData = await testService.postTest(payload);
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
