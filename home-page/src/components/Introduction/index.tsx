import icon from "../../icons";

export const Introduction = () => {
  return (
    <section className="flex-col justify-start text-left font-semibold flex max-[545px]:text-center">
      <div className="flex">
        <h1 className="text-white text-6xl max-[1069px]:text-4xl max-[545px]:text-3xl max-[412px]:text-2xl max-[335px]:whitespace-normal mb-8 border-r-4 max-[335px]:border-r-0 border-white w-[24ch] max-w-[max-content] whitespace-nowrap overflow-hidden animate-typing max-[335px]:animate-none">
          Olá, eu sou o Welbert :)
        </h1>
      </div>
      <p className="text-aboutMeText text-2xl max-[1069px]:text-xl mb-16 ml-8 max-[768px]:ml-0 ">
        Sou um desenvolvedor front-end, com mais de dois anos de experiência
        especializado em React. Tenho experiencia na criação de páginas web
        altamente responsivas e no desenvolvimento de componentes React
        desacoplados, garantindo uma experiência de usuário perfeita em todos os
        dispositivos. Minha expertise se estende ao JavaScript e TypeScript,
        além disso, tenho conhecimentos atrelados ao AEM.
      </p>
      <a
        href="/public/cv-front-developer.pdf"
        download="cv-welbertJr-front-developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center gap-2 bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] w-[230px] max-[545px]:w-full h-16 text-xl text-white items-center rounded-[5.18rem] hover:scale-110 duration-1000 ml-8 max-[768px]:ml-0"
      >
        Baixe meu CV
        <icon.RiDownload2Fill />
      </a>
    </section>
  );
};
