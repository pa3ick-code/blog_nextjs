"use client"
import { useState } from 'react'
import getPosts from "@/lib/getPosts";
import Items from "./Items";

type Props = {
    category: string,
    max: string,
}

export default function Posts({category, max}: Props) {
    const [posts, setPosts] = useState(Result[] | undefined);

    const GetPost = async()=>{
        const title = category[0].toUpperCase() + category.slice(1);
        const getPostData = await getPosts({category, max});
        const postData = await getPostData;
        setPosts(postData);
    }
    
    const content = (
         <>
            <h2 className="mt-16 mb-7 font-semibold text-4xl text-left md:mt-3 md:mb-3">{title}</h2>
            <div className="flex flex-wrap justify-center">
                {   
                    posts?
                    (
                        posts.map(post => (
                            <Items result={post} key={post.publishedAt}/>
                        ))
                    ):
                    (
                        <p>error loading {title} posts</p>
                    )
                }
            </div>
         </>
    )

    return content
}
