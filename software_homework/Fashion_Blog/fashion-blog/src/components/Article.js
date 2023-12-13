function Article (props) {
    return(
        <article className="Article">
            <h3 className="date">{props.date}</h3>
            <h2>{props.title}</h2>
            <img src={props.image}/>
            <p className="text">{props.text}</p>
            <p className="Continues">Continues...</p>
            <div className="line"></div>
        </article>
    )
}

export default Article;