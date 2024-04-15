import getPosts from "@/lib/getPosts";
import Items from "./Items";

type Props = {
    category: string,
    max: string,
    title? : string
}

export const revalidate = 2;
export const dynamic = 'force-dynamic';

export default async function Posts({category, max, title}: Props) {
    const getPostData = await getPosts({category, max});
    const postData = await getPostData;
    const posts: Result[] | undefined = postData;
    const content = (
         <>
            <h2 className="mt-16 mb-7 font-semibold text-4xl text-left md:mt-3 md:mb-3">{title}</h2>
            <div className="flex flex-wrap justify-center">
                {   
                    posts?
                    (
                        posts.map(post => {
                        return <Items result={post} key={post.publishedAt}/>
                        })
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
