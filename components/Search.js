import { useState } from 'react'

import ResultCards from './ResultCards'
function Search() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const fetchRes = async () => {
        setResults([])
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${query}?page=1&limit=5`
        ).then((res) => res.json())
        console.log(res)
        setResults(res.data)
    }
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className="w-screen flex flex-col">
            <input
                type="text"
                name="search"
                placeholder="search for anime"
                onChange={handleChange}
                className="text-black w-1/3 p-3 border-white border-r-2 ml-12 border-b-2 bg-black"
            />
            <button
                className="bg-gray-800 w-56 p-2 mt-9 ml-12"
                onClick={fetchRes}
            >
                Search
            </button>
            <div>
                {results?.map((result) => (
                    <ResultCards
                        image={result?.images.jpg.large_image_url}
                        title={result.title}
                        id={result.mal_id}
                        key={result.mal_id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Search
