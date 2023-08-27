import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const commitsApi = createApi({
    reducerPath:"commitsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dpg.gg/test/calendar.json"}),
    endpoints: (build) => ({
        getCommits: build.query({
            query: () => ""
        })
    }),
})

export const {useGetCommitsQuery} = commitsApi