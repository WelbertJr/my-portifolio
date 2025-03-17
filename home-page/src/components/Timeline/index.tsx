import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  institution: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Curso de programação",
    description:
      "Curso de Programação Básica com Lógica, Scratch r Linguagem de Programação C#.",
    institution: "Puc Minas - 2016",
  },
  {
    id: 2,
    title: "Estágio em desenvolvimento Web - React, Js, Scrum, Git e AEM",
    description:
      "Desenvolvimento de aplicações front-end usando o ReactJs e Adobe Experience Manager.",
    institution: "Compass.uol - mai/2022 - ago/2022",
  },
  {
    id: 3,
    title: "Customer Attendant",
    description:
      "Primeira experiência profissional, na área de atendimento ao cliente.",
    institution: "Localiza&Co - dez/2019 - fev/2023",
  },
  {
    id: 4,
    title: "Graduação em Sistemas de Informação",
    description:
      "Desenvolvimento web, integração de sistemas e gestão de projetos.",
    institution: "PUC Minas - fev/2021 - dez/2024",
  },

  {
    id: 5,
    title: "Desenvolvedor front-end - React, Ts, nodejs, AEM",
    description:
      "Atuação em grandes clientes, desenvolvimento ágil, testes unitários e regresssivos, trackeamento de SPAs e componentes auoráveis e responsivos.",
    institution: "Compass.uol - abr/2023 - atual",
  },
];

export const Timeline = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section id="aboutMe" className="flex flex-col">
      <h1 className="text-6xl mb-24 mt-64 max-[1366px]:mt-24 max-[1366px]:mb-16 text-white max-[420px]:text-5xl max-[346px]:text-4xl">
        Sobre Mim
      </h1>
      <div className="relative w-full flex items-center justify-center max-[900px]:justify-start">
        <div
          className="absolute w-[4px] bg-gradient-to-b from-[#13ADC7] via-[#6978D1] to-[#945DD6] h-full"
          data-aos="zoom-out"
        ></div>
        <div className="w-full flex flex-col items-center justify-end space-y-16 max-[900px]:space-y-10">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`relative w-full flex items-center max-[900px]:gap-2 max-[768px]:gap-1 max-[900px]:flex-col max-[900px]:items-stretch`}
            >
              {index % 2 === 0 ? (
                <>
                  <div
                    className="w-1/2 flex justify-end pr-6 max-[900px]:justify-start max-[900px]:w-1/4 max-[900px]:pr-0 max-[900px]:pl-6"
                    data-aos="zoom-in"
                  >
                    <span className="text-3xl text-white max-[900px]:text-2xl">
                      {item.institution.split(" - ").pop()}
                    </span>
                  </div>
                  <div
                    className="w-1/2 flex justify-start pl-6 max-[900px]:w-full max-[900px]:pl-6"
                    data-aos="fade-right"
                  >
                    <div className="w-full bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                      <span className="text-xs">{item.institution}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="w-1/2 flex justify-end pr-6 max-[900px]:w-full max-[900px]:justify-start max-[900px]:order-2 max-[900px]:pr-0 max-[900px]:pl-6"
                    data-aos={"fade-right"}
                  >
                    <div className="w-full bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                      <span className="text-xs">{item.institution}</span>
                    </div>
                  </div>
                  <div
                    className="w-1/2 flex justify-start pl-6 max-[900px]:w-1/4 max-[900px]:order-1"
                    data-aos="zoom-in-up"
                  >
                    <span className="text-3xl text-white max-[900px]:text-2xl">
                      {item.institution.split(" - ").pop()}
                    </span>
                  </div>
                </>
              )}
              <div className="absolute left-[50%] max-[900px]:left-[0.45%] max-[900px]:top-6 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
