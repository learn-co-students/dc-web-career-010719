
const changeSearchText = (text) => ({type:"CHANGE_SEARCH_TEXT", text})

const voteForPainting = (paintingId) => ({type: "VOTE_FOR_PAINTING", paintingId })

const updatePaintingInfo = (info) => ({type: "UPDATE_PAINTING_INFO", info})

export {changeSearchText, voteForPainting, updatePaintingInfo}
