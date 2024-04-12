import Posts from "./components/Posts";

type Params ={
    params: {
        postRequest: string
    }
}

export async function generateMetadata({params: {postRequest}}: Params){
    if(!postRequest){
    return {
        title: `${postRequest} not found`
        }
    }else{
    return {
        title: `${postRequest}`,
        description: `${postRequest} posts`
       }
    }
}

export default function Post({params: {postRequest}}: Params) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Posts category={postRequest} max="9" title={postRequest} />
    </main>
  );
}
