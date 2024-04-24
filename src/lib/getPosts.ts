type Props = {
    category: string,
    max: string
}

export default async function getPosts({category, max}: Props) {
    const key = process.env.API_KEY;
    const searchParams = new URLSearchParams({
        category: category,
        lang: "en",
        max: max,
    });

    const url = `https://gnews.io/api/v4/top-headlines?${searchParams}&apikey=${process.env.API_KEY}`;
    const getData = await fetch(url, {next: {revalidate: 86400} } );
    const res = await getData.json();
    const data = await res.articles;
    
    return data;
}

