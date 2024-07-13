

type Props = {
    category: string,
    max: string
}

export default async function getPosts({category, max}: Props) {
    const searchParams = new URLSearchParams({
        category: category,
        lang: "en",
        max: max,
        apikey: process.env.API_KEY!,
    });

    const url = `https://gnews.io/api/v4/top-headlines?${searchParams}`;
    const getData = await fetch(url, { next: { revalidate: 3600 } });
    const res = await getData.json();
    const data = res.articles;
    // console.log(data)
    return data;
}

