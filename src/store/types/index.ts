import { setErrorLatestNews, setErrorPopularNews, setLatestNews, setLoadingData, setPopularNews } from '../actions';

// News action
type SetLatestNews = ReturnType<typeof setLatestNews>
type SetPopularNews = ReturnType<typeof setPopularNews>

export type NewsActionsType = SetLatestNews | SetPopularNews

// Errors action

type SetErrorLatestNews = ReturnType<typeof setErrorLatestNews>
type SetErrorPopularNews = ReturnType<typeof setErrorPopularNews>
type SetLoadingData = ReturnType<typeof setLoadingData>

export type ErrorsNewsAction = SetErrorLatestNews | SetErrorPopularNews | SetLoadingData
