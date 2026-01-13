import Brhomaon from "../assets/brhomaon.png"; // ./ eller ../ ? 
// import genesis from "../assets/genesis.png";
import portfolio from '../assets/portfolio.png'
import game from '../assets/game.png'

const Projectinfo = [ 
    {
        id: 1,
        title: "Test - 12h deadline",
        img: Brhomaon,
        info: "info",
        tags: ["#Javascript", " ", "#CSS", " ", "#Sass"],
        popupInfo: {
            shortWriteUp: "This was a test in the course where we had 12 hours to complete this Figma file. Besides from creating the image we had to add interactivity and a responsive design for all devices.",
            info: "info",
            linkHost: "https://github.com/malinranden/test-your-skills.git",
            linkRepo: "https://github.com/malinranden/test-your-skills.git",
        }
    },
    {
        id: 2,
        title: "My portfolio", 
        img: portfolio,
        info: "info",
        tags: ["#Javascript", " ", "#CSS", " ", "#test"],
        popupInfo: {
            shortWriteUp: "This was an assignment to create a webpage from a Figma form. Simple instructions.",
            info: "Info",
            linkHost: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
            linkRepo: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
            // link: "https://github.com/malinranden/Assignment-lesson-11-Sass.git",
        }
    },
    {
        id: 3,
        title: "Game in React",
        img: game,
        info: "Group assignment to create any game using React and API's",
        tags: ["#Javascript", " ", "#CSS", " ", "#React"],
        popupInfo: {
            shortWriteUp: "This was a group assignment to create a simple game with javascript in React. One part of the assignment was to use an API which was one of my resposibilities. I have created the opponents page where there is a choice of characters to play against.",
            linkHost: "#",
            linkRepo: "#",
            // link: "#",
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