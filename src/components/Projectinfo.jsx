import Brhomaon from "../assets/brhomaon.png"; // ./ eller ../ ? 
// import genesis from "../assets/genesis.png";
import portfolio from '../assets/portfolio.png'
import game from '../assets/game.png'
import brhomaon2 from '../assets/brhomaon2.png'
import brhomaon3 from '../assets/brhomaon3.png'
import brhomaon4 from '../assets/brhomaon4.png'
import gamegame from '../assets/gamegame.png'
import gamesignin from '../assets/gamesignin.png'
const Projectinfo = [ 
    {
        id: 1,
        title: "Test - 12h deadline",
        img: Brhomaon,
        info: "info",
        tags: ["#CSS", " ", "#Javascript", " ", "#Sass"],
        popupInfo: {
            shortWriteUp: "A 12 hours deadline test to create this Figma file, adding interactivity and responsive design for all screen-sizes.",
            info: "info",
            linkHost: "https://github.com/malinranden/test-your-skills.git",
            linkRepo: "https://github.com/malinranden/test-your-skills.git",
            images: [brhomaon4, brhomaon2, brhomaon3]
        }
    },
    {
        id: 2,
        title: "My portfolio", 
        img: portfolio,
        info: "info",
        tags: ["#CSS", " ", "#Javascript", " ", "#Sass", " ", "#React"],
        popupInfo: {
            shortWriteUp: "Fully responsive (down to mobile screen).",
            info: "Info",
            linkHost: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
            linkRepo: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
            images: []
            // link: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
        }
    },
    {
        id: 3,
        title: "Game in React",
        img: game,
        info: "Group assignment to create any game using React and API's",
        tags: ["#CSS", " ", "#Javascript", " ", "#React"],
        popupInfo: {
            shortWriteUp: "This was a group assignment to create a simple game with javascript in React. One part of the assignment was to use an API which was one of my resposibilities. I have created the opponents page where there is a choice of characters to play against.",
            linkHost: "#",
            linkRepo: "#",
            // link: "#",
            images: [gamesignin, gamegame, game]
        }
    }
]

export default Projectinfo;

    // {
    //     id: 2,
    //     title: "Create from figma", 
    //     img: genesis,
    //     info: "info",
    //     tags: ["#Javascript", " ", "#CSS", " ", "#test"],
    //     popupInfo: {
    //         shortWriteUp: "This was an assignment to create a webpage from a Figma form. Simple instructions.",
    //         info: "Info",
    //         linkHost: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
    //         linkRepo: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
    //         // link: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
    //     }
    // },