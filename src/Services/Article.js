import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//         url: 'https://time.com/6266679/musk-ai-open-letter/',
//         length: '3'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'f02bb763b7mshb59b0b23f56f68ap18e5c5jsnbd4c4910e7aa',
//         'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };

const RapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'ttps://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (Headers) => {
            Headers.set('X-RapidAPI-Key', RapidAPIKey);
            Headers.set('X-RapidAPI-Host', 
            'article-extractor-and-summarizer.p.rapidapi.com');

            return Headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const {useLazyGetSummaryQuery} = articleApi;