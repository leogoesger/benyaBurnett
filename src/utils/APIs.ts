import axios from "axios";
import { AxiosResponse } from "axios";

const token = localStorage.getItem("bbToken");
const url = `${process.env.SERVER_ADDRESS}/api`;

interface IArticle {
    title: string;
    text: string;
    url: string;
    date: string;
    imgUrl: string;
    type: string;
    _id: string;
}

export const createArticle = data => {
    return axios
        .post(`${url}/articles/post`, data, {
            headers: { bbToken: token },
        })
        .catch(e => localStorage.removeItem("bbToken"));
};

export const deleteArticle = (articleId: string) => {
    return axios
        .delete(
            `${process.env.SERVER_ADDRESS}/api/articles/remove/${articleId}`,
            {
                headers: { bbToken: token },
            }
        )
        .catch(e => localStorage.removeItem("bbToken"));
};

export const updateArticle = data => {
    return axios
        .put(`${process.env.SERVER_ADDRESS}/api/articles/update`, data, {
            headers: { bbToken: token },
        })
        .then((article: any) => article);
};
