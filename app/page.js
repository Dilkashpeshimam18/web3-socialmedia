import PostFormCard from "./_components/AddPostCard"
import Layout from "./_components/Layout"
import NavigationCard from "./_components/NavigationCard"
import PostCard from "./_components/PostCard"

export default function Home() {
  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  )
}
