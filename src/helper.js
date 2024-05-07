export const scrollTo = (id) => {//skills
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
};
