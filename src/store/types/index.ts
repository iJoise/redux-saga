import { setErrorLatestNews, setErrorPopularNews, setLatestNews, setPopularNews } from '../actions';

// News action
type SetLatestNews = ReturnType<typeof setLatestNews>
type SetPopularNews = ReturnType<typeof setPopularNews>

export type NewsActionsType = SetLatestNews | SetPopularNews

// Errors action

type SetErrorLatestNews = ReturnType<typeof setErrorLatestNews>
type SetErrorPopularNews = ReturnType<typeof setErrorPopularNews>

export type ErrorsNewsAction = SetErrorLatestNews | SetErrorPopularNews
