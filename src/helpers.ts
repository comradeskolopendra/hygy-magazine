import { MAX_WIDTH_SHORT_INFO } from "./constants"

export const cutString = (value: string): string => {
    if (value.length >= MAX_WIDTH_SHORT_INFO) {
        return value.slice(0, MAX_WIDTH_SHORT_INFO) + ". . .";
    }

    return value;
}