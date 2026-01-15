import "./_PopupCard.scss"
// import './_projects.scss'

function PopupCard({popupContent, onClose}) {
    
    return (
        <div className="PopupCard" onClick={onClose}>
            <div className="PopupCard__info" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="PopupCard__closeBtn">x</button>
                <h2>{popupContent.title}</h2>
                {/* <img src={popupContent.img} alt={popupContent.title} /> */}
                <p>{popupContent.popupInfo.shortWriteUp}</p>
                <p>{popupContent.popupInfo.info}</p>
                <p>Here you can see the <a href={popupContent.popupInfo.linkHost}>result</a></p>
                <p>Here is the <a href={popupContent.popupInfo.linkRepo}>link</a> to the repository</p>
                {/* <a href={popupContent.popupInfo.link}>
                    View GitHub Repo
                </a> */}
            </div>
        </div> 
    )
}

export default PopupCard;