export const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2, "0"); // Ensure 2-digit month
    return `${year}/${month}`;
};

export const validFormat = (str: String)=>{
    const newstr = str.replace(/\s+/g, '-').toLowerCase();
    return newstr;
}