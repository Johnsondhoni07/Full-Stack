const Api_Key="8867ee32e88d72e6d21ef084a3df3e44"

const requests={
    Fetching2020:`discover/movie?with_genres=18&primary_release_year=2020&api_key=${Api_Key}`,
    Fetching2019:`discover/movie?with_genres=18&primary_release_year=2019&api_key=${Api_Key}`,
    Trending:`trending/all/week?api_key=${Api_Key}`,
    day:`trending/all/day?api_key=${Api_Key}`
}
export default requests;