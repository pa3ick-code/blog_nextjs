

export default async function SearchPosts(searchTerm: string) {
    const searchParams = new URLSearchParams({
        q: searchTerm,
        lang: "en",
        max: "9",
    });

    const url = `https://gnews.io/api/v4/search?${searchParams}&apikey=${process.env.API_KEY}`;
    const getData = await fetch(url);
    const res = await getData.json();
    const data = res.articles
    
    return data;
}

