export const getInitial = (name) => {
    if (name == undefined || name == null) return
    return name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("");
};

export const formatDate = (data) => {
    return new Date(data).toDateString();
};