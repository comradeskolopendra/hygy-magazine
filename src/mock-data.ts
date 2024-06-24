import { BASE_URL, MOCK_IMAGES_ARTICLES } from "./constants";

const transformArrayToObject = (imagesArr: any[]): { shortInfo: string; heading: string; photo: string }[] => {
    return [...imagesArr].map((_e, _i, array) => ({
        shortInfo: "Watch any TikTok or IG Reel asking London’s Gen Z about their least favourite fashion trend and the answer is almost always some variation of ‘skiNNy JeAnS’.  ",
        heading: "Just Random Title LOL",
        photo: `${BASE_URL}/${MOCK_IMAGES_ARTICLES[Math.round(Math.random() * array.length)]}`
    }))
}

export const artBlock = { articles: transformArrayToObject(Array(MOCK_IMAGES_ARTICLES.length)), name: "art" }
export const fashionBlock = { articles: transformArrayToObject(Array(MOCK_IMAGES_ARTICLES.length)), name: "fashion" }
export const beautyBlock = { articles: transformArrayToObject(Array(MOCK_IMAGES_ARTICLES.length)), name: "beauty" }
export const socialBlock = { articles: transformArrayToObject(Array(MOCK_IMAGES_ARTICLES.length)), name: "social" }
export const eventsBlock = { articles: transformArrayToObject(Array(MOCK_IMAGES_ARTICLES.length)), name: "events" }