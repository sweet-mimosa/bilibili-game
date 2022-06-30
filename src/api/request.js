import axios from 'axios'

export const getGameList = () =>
    axios.get(`https://www.fastmock.site/mock/477f993fb8b86e1e7fa9aa8ca719a766/bilibili-game/gamelist`)

export const getVideoList = () =>
    axios.get('https://www.fastmock.site/mock/477f993fb8b86e1e7fa9aa8ca719a766/bilibili-game/videoinfo')