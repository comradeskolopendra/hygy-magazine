import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IArticle {
    shortInfo: string;
    heading: string;
    photo: string;
    id: string;
}

interface IArticles {
    name: string;
    articles: IArticle[]
}

interface IInitialState {
    articles: IArticles[]
}

const initialState: IInitialState = {
    articles: [],

}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setArticles(state, action: PayloadAction<IArticles[]>) {
            state.articles = action.payload;

            return state;
        }
    }
})

export const { setArticles } = appSlice.actions;
export default appSlice.reducer;