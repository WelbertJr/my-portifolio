export interface CarouselItem {
  id: number;
  url: string;
  img: string;
  title: string;
  description: string;
  frontend?: string;
  backend?: string;
  mobile?: string;
  aem?: string;
  hosting: boolean;
  onlyFrontHosting?: string;
}

export const state: { items: CarouselItem[] } = {
  items: [
    {
      id: 0,
      url: "https://turistando-front.netlify.app/",
      img: "src/assets/turistando.webp",
      title: "Turistando",
      description:
        "Portal de recomendação de itinerários para viajantes, pesquise seu destino e receba recomendações de custo e hospedagem!",
      onlyFrontHosting: "Apenas o front-end está hospedado.",
      frontend: "Front-end",
      backend: "Back-end",
      hosting: true,
    },
    {
      id: 1,
      url: "https://calculadora-de-investimentos.netlify.app/",
      img: "src/assets/calculadora-investimentos.webp",
      title: "Calculadora de Investimentos",
      description:
        "Faça o calculo de seus investimentos através da calculadora, basta preencher o formulário e efetuar o cálculo!",
      frontend: "Front-end",
      hosting: true,
    },

    {
      id: 2,
      url: "https://the-sentiment-analysis.netlify.app/",
      img: "src/assets/sentiment-analysis.webp",
      title: "Análise de Sentimentos",
      description:
        "Aplicação de análise de sentimentos utilizando IA, escreva uma expressão e aguarde a análise!",
      onlyFrontHosting: "Apenas o front-end está hospedado.",
      frontend: "Front-end",
      backend: "Back-end",
      hosting: true,
    },
    {
      id: 3,
      url: "https://github.com/WelbertJr/Compass-UOL/tree/master/src/WebSquadRed",
      img: "src/assets/aem-form.gif",
      title: "Formulário de cadastro (AEM)",
      description:
        "Formalário de cadastro desenvolvido utilizando React + Adobe Experience Manager. Além de fazer o cadastro dos dados a aplicação é altamente personlizada no AEM.",
      frontend: "Front-end",
      aem: "AEM",
      hosting: false,
    },
    {
      id: 4,
      url: "https://github.com/WelbertJr/Compass-UOL/tree/master/src/Compass%20Logon",
      img: "src/assets/compass-logon.gif",
      title: "Compass Logon",
      description:
        "Página de login, com integração com api de clima, rota protegida e lógica para encerramento da sessão de forma automática.",
      frontend: "Front-end",
      hosting: false,
    },
    {
      id: 5,
      url: "https://desafio-final-welbert.netlify.app/",
      img: "src/assets/calculadora-imc.webp",
      title: "Caluladora de IMC",
      description: `Calcule o seu índice de massa corporal através da calculadora,
      basta inserir o peso e altura para que o calculo seja efetuado!`,
      frontend: "Front-end",
      hosting: true,
    },
    {
      id: 6,
      url: "https://github.com/WelbertJr/NLW-Setup-Ignite/tree/main",
      img: "src/assets/nlw-setup.gif",
      title: "Habits",
      description:
        "O Habits é um programa de gestão de hábitos dos usuários. Nele é possível cadastrar um hábito e depois usar uma lista de checagem para controlar as atividades já realizadas.",
      frontend: "Front-end",
      backend: "Back-end",
      mobile: "Mobile",
      hosting: false,
    },
    {
      id: 7,
      url: "https://desafio-codelandia-02.netlify.app/",
      img: "src/assets/loja-tenis.webp",
      title: "Loja Jordan",
      description: "Conheça a loja de tênis da Jordan!",
      frontend: "Front-end",
      hosting: true,
    },
    {
      id: 8,
      url: "https://codelandia-1-welbertjr.netlify.app/",
      img: "src/assets/site-noticias.webp",
      title: "Site de Notícias",
      description:
        "Site de notícias, leia sua notícia e favorite as suas preferidas!",
      frontend: "Front-end",
      hosting: true,
    },
    {
      id: 9,
      url: "https://github.com/WelbertJr/Compass-UOL/tree/master/src/FlexBlog",
      img: "src/assets/flex-blog.gif",
      title: "FlexBlog",
      description:
        "Um página de blog criada com um layout responsivo no CSS utilizando apenas as propriedades do Flexbox.",
      frontend: "Front-end",
      hosting: false,
    },
    {
      id: 10,
      url: "https://github.com/WelbertJr/Compass-UOL/tree/master/src/Lista%20de%20presen%C3%A7a",
      img: "src/assets/lista-de-presenca.gif",
      title: "Lista de Presença",
      description:
        "Página web que funciona como uma lista de presença, ao salvar um nome na lista, são salvos nome e o horário da inclusão.",
      frontend: "Front-end",
      hosting: false,
    },
  ],
};
