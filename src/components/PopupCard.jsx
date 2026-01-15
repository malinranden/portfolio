import "./_PopupCard.scss"
// import './_projects.scss'

function PopupCard({popupContent, onClose}) {
    
    return (
        <div className="PopupCard" onClick={onClose}>
            <div className="PopupCard__container">
                <button onClick={onClose} className="PopupCard__closeBtn"><i className="fa-solid fa-x"></i></button>
                <div className="PopupCard__image-section">
                    <img className="PopupCard__img" src={popupContent.popupInfo.images} alt="images" />
                </div>
                <div className="PopupCard__text-section" onClick={(e) => e.stopPropagation()}>
                    {/* <div className="PopupCard__info" > */}
                        
                        <h2>{popupContent.title}</h2>
                        {/* <img src={popupContent.img} alt={popupContent.title} /> */}
                        <p>{popupContent.popupInfo.shortWriteUp}</p>
                        <p>{popupContent.popupInfo.info}</p>
                        <p>Here you can see the <a href={popupContent.popupInfo.linkHost}>result</a></p>
                        <p>Here is the <a href={popupContent.popupInfo.linkRepo}>link</a> to the repository</p>
                        {/* <a href={popupContent.popupInfo.link}>
                            View GitHub Repo
                        </a> */}
                    {/* </div> */}
                </div>
                
            </div>
        </div> 
    )
}

export default PopupCard;