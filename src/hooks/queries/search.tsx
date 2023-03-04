import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getSearchResult = async (keyword: string) => {
    return axios.get(URL,
        params: {
            searchText: keyword,
        })
    .then((res)=> {
        return res.data
    })
}