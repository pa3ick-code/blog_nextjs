type Result = {
    title: string,
    description: string,
    content?: string,
    url?: string,
    image: string,
    publishedAt: string,
    source?: {
        name?: string,
        url?: string,
    }
  }

  type Params = {
        category: string,
        lang: string,
        max?: string | undefined,
        apikey: string
    }

type SearchResult = {
    title: string,
    description: string,
    content?: string,
    url?: string,
    image: string,
    publishedAt: string,
    source?: {
        name?: string,
        url?: string,
    }
  }