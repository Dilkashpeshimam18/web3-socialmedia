"use client";
import PostFormCard from "./_components/Post/AddPostCard"
import Layout from "./_components/Layout"
import PostCard from "./_components/Post/PostCard"
import { useState, useEffect } from "react";
import { urlClient, explorePublication } from './_queries/queries'

export default function Home() {

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await urlClient
      .query(explorePublication)
      .toPromise();

    console.log('Posts>>', response)
    const posts = response.data.explorePublications.items.filter((post) => {
      if (post.profile) return post;
      return "";
    });
    console.log(posts)
    setPosts(posts);
  }


  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Layout>
      <PostFormCard />
      {
        posts.length > 0 && posts.map((post) => {
          return (
            <PostCard key={post?.id} image={post?.profile?.metadata} name={post?.profile?.handle} content={post?.metadata?.content} />

          )
        })
      }
    </Layout>
  )
}
