import { icons, images } from '../assets';


class Text {
    constructor({ ES, EN }){
        this.ES = ES;
        this.EN = EN;
    }
}

class Project{
    constructor({ title, description, image, github, preview, stack }){
        this.title = title;
        this.description = description;
        this.image = image;
        this.github = github;
        this.preview = preview;
        this.stack = stack;
    }
}

class LandingPage{
    constructor({image, link}){
        this.image = image;
        this.link = link;
    }
}

const projects = [
    new Project({ title: new Text({ EN: 'Timer App', ES: 'Timer App' }), image: icons.chronometer , github: 'https://github.com/jorgezerpa/timer-app-react-native', preview: '', stack: 'React Native', description:new Text({EN: 'Get as many chronometers as you need running at the same time on screen.' , ES:'Ten todos los cronómetros que necesites corriendo en una misma pantalla.'}) }),
    new Project({ title: new Text({ EN: 'PokemonApp', ES: 'PokemonApp' }), image: icons.pokemon, github: 'https://github.com/jorgezerpa/pokeapi-react-native', preview: '', stack: 'React Native', description: new Text({EN: 'Get info of your favorite pokemons.' , ES:'Obtén información de tus pokemons favoritos'}) }),
    new Project({ title: new Text({ EN: 'E-commerce API', ES: 'E-commerce API' }), image: icons.store, github: 'https://github.com/jorgezerpa/e-commerce-api', preview: '', stack: 'React Native', description: new Text({EN:'basic CRUD and login sistem for an e-commerce.' , ES:'CRUD y sistema de usuarios para una tienda online.'}) }),
    new Project({ title: new Text({ EN: 'Street Fighter Clone', ES: 'Street Fighter Clone' }), image: icons.karate, github: 'https://github.com/jorgezerpa/street-fighter-clone', preview: 'https://jorgezerpa.github.io/street-fighter-clone/', stack: 'Vanilla JS', description: new Text({EN:'Fighting game.' , ES:'Juego de pelea.'}) }),
    new Project({ title: new Text({ EN: 'Arcade Shoting Game', ES: 'Arcade Shoting Game' }), image: icons.ship, github: 'https://github.com/jorgezerpa/basic-shoting-game', preview: 'https://jorgezerpa.github.io/basic-shoting-game/', stack: 'Vanilla JS', description: new Text({EN:'Game style space invaders.' , ES:'Juego estilo space invaders.'}) }),
    new Project({ title: new Text({ EN: 'Height Stimator(only for mobile)', ES: 'Estimador de altura(only mobile)' }), image: icons.ruler, github: 'https://github.com/jorgezerpa/height-predictor-JS', preview: 'https://jorgezerpa.github.io/height-predictor-JS/', stack: 'Vanilla JS', description: new Text({EN: 'Use your phone camera to get an stimation of the height of an object.' , ES:'Usa la cámara de tu teléfono para tener un aproximado de la altura de un objeto.' }) }),
    new Project({ title: new Text({ EN: 'Figma Plugin', ES: 'Figma plugin' }), image: icons.figma, github: 'https://github.com/jorgezerpa/schnnel-hero-figma-plugin', preview: 'https://www.figma.com/community/plugin/1127303485921047861/Schnell-wireframe', stack: 'Typescript', description: new Text({EN: 'Wireframe  generator.' , ES:'Generador de wireframes.' }) }),
    // new Project({ title: new Text({ EN: 'Voral Store', ES: 'Tienda Voral' }), image: images.project, github: 'link', preview: 'link', stack: 'React, Node, Next', description: 'this is a really amazing project that works as a farm.' }),
    // new Project({ title: new Text({ EN: 'Bocadictos Store', ES: '' }), image: images.project, github: 'link', preview: 'link', stack: 'React, Node, Next', description: 'this is a really amazing project that works as a farm.' }),
    // new Project({ title: new Text({ EN: 'Real Time Chat App', ES: '' }), image: images.project, github: 'link', preview: 'https://venerable-dasik-0c5c7a.netlify.app/', stack: 'React, Node, Next', description: 'this is a really amazing project that works as a farm.' }),
]

const landingPages = [
    new LandingPage({image: images.lp6, link:'https://jorgezerpa.github.io/beer-home-landing-page/' }),
    new LandingPage({image: images.lp5,  link:'https://jorgezerpa.github.io/geritch-restaurant-REACT/'}),
    new LandingPage({image: images.lp4, link:'https://jorgezerpa.github.io/app-landing-page/'}),
    new LandingPage({image: images.lp3, link:'https://jorgezerpa.github.io/designer-page/' }),
    new LandingPage({image: images.lp2, link:'https://jorgezerpa.github.io/vr-landing-page/' }),
    new LandingPage({image: images.lp, link:'https://jorgezerpa.github.io/agency-landing-page/' }),
]




const texts = {
    menu: [
        new Text({ EN: 'about', ES: 'acerca' }),
        new Text({ EN: 'projects', ES: 'proyectos' }),
    ],
    home: {
        hello: new Text({ EN: "Jorge Zerpa", ES: 'Jorge Zerpa '  }),
        title: new Text({ EN: 'WEB DEVELOPER', ES: 'WEB DEVELOPER'  }),
        subtitle: new Text({ EN: 'FullStack |Designer', ES: 'FullStack | Diseñador'  }),
    },
    projects: {
        title: { EN: 'APPS', ES: 'APPS' },
        title2: { EN: 'TEMPLATES & LANDING PAGES', ES: 'PLANTILLAS Y LANDING PAGES' },
        title3: { EN: 'ART & DESIGN', ES: 'ARTE Y DISEÑO' },
        title3Text: { EN: 'Feel free to check my <a href="https://codepen.io/zerpa_coder">Codepen</a> or my Instagram', ES: 'Puedes checkear mi Codepen y mi Instagram' }
    },
    about: {
        title: new Text({ EN: 'ABOUT', ES: 'ACERCA'  }),
        text: new Text({ 
            EN: "Hello! I'm Jorge, I'm a developer and designer. I can help in your projects with the construction of Web applications, working from the initial design to production and maintenance. I specialize in the frontend area, although I can develop complete applications that range from E-commerce to incredible personal portfolios. Whatever you need! ask for it and I build it.",
            ES: "¡Hola! Soy Jorge, soy desarrollador y diseñador. Puedo ayudar en tus proyectos con la construcción de aplicaciones Web, trabajando desde el diseño inicial hasta la puesta a producción y el mantenimiento del mismo. Me especializo en el área del frontend, aunque puedo desarrollar aplicaciones completas que van desde E-commerce a increíbles portafolios personales. Lo que sea que necesites! pídelo y yo lo codeo."    
        }),
        abilities: {
            development: {
                title: new Text({ EN: 'DEVELOPMENT', ES: 'DEVELOPMENT' }),
                items: [
                    'React',
                    'Node',
                    'Laravel',
                    'Git/Github',
                    'SCSS',
                    'Material UI',
                    'Tailwind',
                    'Bootstrap',
                ]
            },
            design: {
                title: new Text({ EN: 'DESIGN', ES: 'DISEÑO' }),
                items: [
                    'Figma',
                    'Spline',
                ]
            },
            languages: {
                title: new Text({ EN: 'LANGUAGES', ES: 'IDIOMAS' }),
                items: [
                    new Text({ EN: 'Spanish', ES: 'Español' }),
                    new Text({ EN: 'English', ES: 'Ingles' }),
                ]
            },
        }
    },
}


export {
    projects,
    landingPages,
    texts,
}