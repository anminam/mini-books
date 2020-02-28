export const INCREMENT = "INCREMENT";

export const increase = (diff) => {
    return {
        type: INCREMENT,
        addBy: diff
    };
}