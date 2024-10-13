import bloogs from "@/data/blogs.json";
import BlogCards from "../components/BlogCards";

export default async function Home() {
  return (
    <>
      {bloogs.length > 0 ? (
        bloogs.map((blog) => <BlogCards bloogs={blog} key={blog.id} />)
      ) : (
        <p>No Bloogs available at the moment</p>
      )}
    </>
  );
}
