import { useState } from "react"
import initialArticles from '../data/articles'

export default function AppMain() {

    const [newAtricle, setNewArticle] = useState('')
    const [articles, setArticles] = useState(initialArticles)
    function removeArticle(i) {

        const filteredArtticles = articles.filter((article, index) => index !== i)
        setArticles(filteredArtticles)

    }
    function submit(e) {
        e.preventDefault()
        setArticles([...articles, newAtricle])
        setNewArticle('')

    }
    return (
        <>

            <div className="container">
                <div className="card p-3">
                    <form action="" onSubmit={submit}>
                        <input type="text" className="form-control mb-2" value={newAtricle} onChange={e => setNewArticle(e.target.value)} />
                        <div className="d-flex justify-content-center">
                            <button className="text-uppercase btn btn-dark"><i className="bi bi-plus-circle"></i> aggiungi</button>
                        </div>
                    </form>

                    <hr />

                    {articles.length === 0 ? (<div className="text-uppercase">nessun articolo presente</div>) : (<ul className="list-group">
                        {articles.map((article, i) =>
                            <li className="list-group-item d-flex justify-content-between" key={i}>
                                {article}
                                <button className="btn btn-dark" onClick={() => removeArticle(i)}>
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </li>
                        )}
                    </ul>)}


                </div>
            </div>
        </>



    )
}