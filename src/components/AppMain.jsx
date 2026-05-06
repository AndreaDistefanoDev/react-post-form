import { useState } from "react"
import initialFormData from '../data/formData'

export default function AppMain() {

    const [formData, setFormData] = useState(initialFormData)
    function removeArticle(i) {

        const filteredArtticles = formData.filter((data, index) => index !== i)
        setFormData(filteredArtticles)

    }
    function submit(e) {
        e.preventDefault()

        setNewArticle('')

    }
    return (
        <>

            <div className="container">
                <div className="card p-3">
                    <form action="" onSubmit={submit}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Author"
                            value={formData.author}
                            onChange={e => setNewArticle(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Title"
                            value={formData.title}
                            onChange={e => setNewArticle(e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Body"
                            value={formData.body}
                            onChange={e => setNewArticle(e.target.value)}
                        />
                        <input
                            type="checkbox"
                            className="form-control mb-2"
                            placeholder="Public"
                            value={formData.public}
                            onChange={e => setNewArticle(e.target.value)}
                        />
                        <div className="d-flex justify-content-center">
                            <button className="text-uppercase btn btn-dark"><i className="bi bi-plus-circle"></i> aggiungi</button>
                        </div>
                    </form>

                    <hr />

                    {formData.length === 0 ? (<div className="text-uppercase">nessun articolo presente</div>) : (<ul className="list-group">
                        {formData.map((data, i) =>
                            <li key={i} className="list-group-item d-flex justify-content-between" key={i}>
                                {data}
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