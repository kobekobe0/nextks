import Link from 'next/link'
function ResultCards({ title, image, id }) {
    return (
        <Link href={`/anime/${id}`}>
            <div className="mb-9 flex flex-col w-250">
                <div>
                    <img src={image} width="250px" />
                </div>
                <div>
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default ResultCards
