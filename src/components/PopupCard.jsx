import "./_PopupCard.scss"
// import './_projects.scss'
import game from '../assets/game.png'
import gamegame from '../assets/gamegame.png'
import gamesignin from '../assets/gamesignin.png'

function PopupCard({popupContent, onClose}) {
    const layout = popupContent.popupInfo.layout;
    return (
        <div className="PopupCard" onClick={onClose} >

            <div className={`PopupCard__container PopupCard__container--${layout}`} >
                
                <button onClick={onClose} className="PopupCard__closeBtn"><i className="fa-solid fa-xmark"></i></button>
                
                <div className="PopupCard__image-section">
                    
                    {popupContent.popupInfo.images.map((img, index) => (
                        <img
                        key={index}
                        className="PopupCard__img"
                        src={img}
                        alt={`Project image ${index + 1}`}
                        />
                    ))}

                </div>

                <div className="PopupCard__text-section" onClick={(e) => e.stopPropagation()}>
                    <h2>{popupContent.title}</h2>
                    <p>{popupContent.popupInfo.shortWriteUp}</p>
                    <p>{popupContent.popupInfo.info}</p>
                    <p>Here you can see the <a href={popupContent.popupInfo.linkHost}>result</a></p>
                    <p>Here is the <a href={popupContent.popupInfo.linkRepo}>link</a> to the repository</p>
                </div>
                
            </div>

        </div> 
    )
}

export default PopupCard;