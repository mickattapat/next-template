import testService from "@/apis/services/testService";
import Posts from "@/components/templates/Posts/Post";

export default async function Home() {
  try {
    const infoData = await testService.testGetApi();
    var posts = await infoData.data;
  } catch (error) {
    // console.log(error);
  }
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
