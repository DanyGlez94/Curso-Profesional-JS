export interface Ad { //Definimos la interface Ad
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

const ALL_ADS: Ad[] = [ 
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
      title: 'Curso Profesional de JavaScript',
      body:
        'Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables.',
      url: 'https://platzi.com/cursos/javascript-profesional/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png',
      title: 'Curso de Frontend Developer',
      body:
        'Domina las bases de HTML y CSS. Define la arquitectura de tu código y construye un sitio web usando componentes estáticos. ',
      url: 'https://platzi.com/cursos/frontend-developer/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-backend-node-8e6aa8a9-f7cd-42b7-bf4a-e1ee916a942b.png',
      title: 'Curso de Backend con Node.js',
      body:
        'Crea aplicaciones backend utilizando Node.js, Express y Mongo. Entiende cómo funciona Javascript en un servidor y escribe aplicaciones con Node.js.',
      url: 'https://platzi.com/cursos/backend-nodejs/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png',
      title:
        'Comienza tus proyectos de desarrollo para JavaScript configurando un entorno de desarrollo cómodo y adaptado a tus necesidades.',
      body:
        'Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables.',
      url: 'https://platzi.com/cursos/prework/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-autenticacion-passport-6d45426a-2b24-4757-8927-7bfaf54529dd.png',
      title: 'Curso de Autenticación con Passport.js',
      body:
        'Genera estrategias de autenticación Sign-In y Sign-Out usando Passport.js. Agrega autenticación con Facebook, Twitter y Google a tus desarrollos.',
      url: 'https://platzi.com/cursos/passport/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-backend-frontend-02b2ac18-331a-4959-85bf-0bd3c2aa009c.png',
      title: 'Curso de Backend for Frontend',
      body:
        'La ingeniería de software evoluciona día a día, no te quedes atrás. Ahora que eres un Desarrollador FullStack JavaScript necesitas evolucionar con el software, construye arquitecturas de software modernas.',
      url: 'https://platzi.com/cursos/bff/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png',
      title: 'Curso Práctico de React JS',
      body:
        'React es una de las librerías más utilizadas hoy para crear aplicaciones web. Aprende a través de la creación de la interfaz de PlatziVideo todo lo que necesitas para crear increíbles componentes con React.      ',
      url: 'https://platzi.com/cursos/react-ejs/',
    },
  
    {
      imageUrl:
        'https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png',
      title: 'Curso de React Router y Redux',
      body:
        'Aprende de forma práctica a implementar React Router para manejar rutas en tus proyectos de frontend como un profesional.',
      url: 'https://platzi.com/cursos/react-router-redux/',
    },
  ]; //ALL_ADS es un array de Ad

class Ads {
    private static instance: Ads; 
    private ads: Ad[]; //

    private constructor() {
        this.initAds();
    }

    static getInstance() {
        if (!Ads.instance) { //Revisa si ya existe una instancia 
            Ads.instance = new Ads(); //Si no existe, la creamos;
        }

        return Ads.instance;
    }

    private initAds() { //Inicializamos los adds
        this.ads = [...ALL_ADS] //Destructuramos el arreglo, o sea que creamos una copia del array ALL_ADS de este modo [...ALL_ADS]
    }

    getAd() { 
        if (this.ads.length === 0) { //Si el length de ads es 0, quiere decir que ya se acabaron los anuncios
            this.initAds(); //SI se acabaron, aquí los inicializamos de nuevo
        }
        return this.ads.pop(); //Saca un valor del arreglo ads y lo retorna
    }
}

export default Ads;