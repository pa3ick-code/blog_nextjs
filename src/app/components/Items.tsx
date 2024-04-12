import Link from "next/link";
import GetDate from "../util/GetDate";

type Props = {
    result: Result
}

export default function Items({ result }: Props) {
    const items = (
        <Link href={`${result.url}`} target="_blank">
            <img 
                src={result.image} 
                alt={result.title} 
                className="w-full h-80 object-cover"
            />
            <div className="mt-5">
                <GetDate param={result.publishedAt} />
                <h3 className="text-2xl font-bold mb-4 mt-4">{result.title}</h3>
                <p className="text-sm text-slate-500">{result.content}</p>
                <div className="text-sm text-slate-500 mt-3">
                    <p>{result.source?.name}</p>
                    <p>{result.source?.url}</p>
                    
                </div>
            </div>
        </Link>
    )
  
    const content = (
        <div className="primary-bg m-2 w-[32%] md:w-full">
            {
                result? items: <p>Nothing Here</p>
            }
        </div>
    )

    return content
}
