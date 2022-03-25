import http from "../http-common";
import QuoteData from "../type/Quote";

const baseUrl = "/quotes"

const getAll = () => {
    return http.get(baseUrl);
};

// const get = (id: any) => {
//     return http.get(`/tutorials/${id}`);
// };
//
// const create = (data: QuoteData) => {
//     return http.post(baseUrl, data);
// };

const create = (data: any, files: FileList | Array<File> | undefined, needClientEmail: boolean = false) => {
    let formData = new FormData();

    if (files instanceof FileList || files instanceof Array) {
        Array.from(files).forEach(
            file =>
                formData.append("files", file)
        );
    }

    Object.keys(data).forEach(key => {
        formData.append(key, data[key] instanceof Array ? JSON.stringify(data[key]) : data[key]);
    })

    return http.post(`${baseUrl}?email=${needClientEmail}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        // onUploadProgress,
    });
}

 const getCategories = () => {
    return http.get(`${baseUrl}/categories`);
};

const getProjects = () => {
    return http.get(`${baseUrl}/projects`);
};
//
// const update = (id: any, data: ITutorialData) => {
//     return http.put(`/tutorials/${id}`, data);
// };
//
// const remove = (id: any) => {
//     return http.delete(`/tutorials/${id}`);
// };
//
// const removeAll = () => {
//     return http.delete(`/tutorials`);
// };
//
// const findByTitle = (title: string) => {
//     return http.get(`/tutorials?title=${title}`);
// };

const TutorialService = {
    getAll,
    // get,
    create,
    getCategories,
    getProjects
    // update,
    // remove,
    // removeAll,
    // findByTitle,
};

export default TutorialService;
