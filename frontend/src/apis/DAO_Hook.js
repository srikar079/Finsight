import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toaster } from "../util/Toast";
import api from "./api";

//! UseFetch
export const useFetch = (url, key) => {
    const { isLoading, data, error, refetch } = useQuery({
        queryKey: [key],
        queryFn: () => api.Account.fetchFn(url),
        onError: (error) => {
            console.log(error.response.data.errors)
            console.error(error)
            // toaster({ data: error.response.data.errors, state: "error", title: "Operation Failed" });
        },
    })
    return { isLoading, data, error, refetch }
}

//! Update
export const usePost = (url, key) => {
    const queryClient = useQueryClient();
    const { mutate: post, isPending, error, data } = useMutation({
        mutationFn: (body) => api.Account.postFn(url, body),
        mutationKey: [key],
        onSuccess: (response) => {
            // toaster({ data: response, state: "success", title: "Operation Successful" });
            queryClient.invalidateQueries({ queryKey: [key] });
        },
        onError: (error) => {
            console.log(error.response.data.errors)
            // toaster({ data: error.response.data.errors, state: "error", title: "Operation Failed" });
        },
    });
    return { isPending, post, data, error };
};

//! Delete Function
export const useDelete = (key) => {
    const queryClient = useQueryClient();
    const { mutate: deleteFn, isPending, error } = useMutation({
        mutationFn: (url) => api.Account.deleteFn(url),
        onSuccess: (response) => {
            // toaster({ data: response, state: "success", title: "Successfully" });
            queryClient.invalidateQueries({ queryKey: [key] });
        },
        onError: (error) => {
            // toaster({ data: error.response.data.errors, state: "error", title: "Deletion Failed" });
        },
    });
    return { deleteFn, isPending, error };
}