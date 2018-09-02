const initialState = {
    articles:[],
    article:{}
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case 'LOAD_ARTICLES':
            return {
                ...state,
                articles: action.articles
            }
        case 'VIEW_ARTICLE':
            return {
                ...state,
                article: action.article
            }
        case 'CLAP_ARTICLE':
        let clap_article = Object.assign({}, state.article)
           clap_article.claps++
            return {
                ...state,
                article: clap_article
            }
        default:
            return state
    }
}