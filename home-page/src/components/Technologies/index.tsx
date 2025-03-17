import { useEffect, useRef, useState } from "react";
import icon from "../../icons";
import { ReactNode } from "react";

interface TechnologyItemProps {
  name: string;
  icon: ReactNode;
}

const LoadingBar = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-4/5 h-5 mx-auto border-2 border-[#13ADC7] rounded-lg overflow-hidden shadow-[0_0_15px_#13ADC7,0_0_25px_#13ADC7]"
    >
      <div
        className={`h-full bg-[#945DD6] transition-all duration-[3000ms] ease-in-out ${
          isVisible ? "w-full" : "w-0"
        } shadow-[0_0_15px_#945DD6,0_0_30px_#945DD6]`}
      ></div>
    </div>
  );
};

const technologies = [
  {
    name: "Html",
    icon: <icon.FaHtml5 size="32px" color="#945DD6" title="HTML" />,
  },
  {
    name: "CSS e Sass",
    icon: <icon.FaCss3 size="32px" color="#945DD6" title="CSS/Sass" />,
  },
  {
    name: "TypeScript",
    icon: (
      <icon.BiLogoTypescript size="32px" color="#945DD6" title="TypeScript" />
    ),
  },
  {
    name: "React",
    icon: <icon.FaReact size="32px" color="#945DD6" title="React" />,
  },
  {
    name: "NodeJs",
    icon: <icon.IoLogoNodejs size="32px" color="#945DD6" title="NodeJs" />,
  },
  {
    name: "AEM",
    icon: (
      <icon.SiAdobe
        size="32px"
        color="#945DD6"
        title="Adobe Experience Manager"
      />
    ),
  },
  {
    name: "StyledComponents",
    icon: (
      <icon.SiStyledcomponents
        size="32px"
        color="#945DD6"
        title="StyledComponents"
      />
    ),
  },
  {
    name: "TailwindCss",
    icon: (
      <icon.SiTailwindcss size="32px" color="#945DD6" title="TailwindCss" />
    ),
  },
  {
    name: "TestingLibrary",
    icon: (
      <icon.SiTestinglibrary
        size="32px"
        color="#945DD6"
        title="TestingLibrary"
      />
    ),
  },
  {
    name: "Jest",
    icon: <icon.SiJest size="32px" color="#945DD6" title="Jest" />,
  },
  {
    name: "Cypress",
    icon: <icon.TbBrandCypress size="32px" color="#945DD6" title="Cypress" />,
  },
  {
    name: "Storybook",
    icon: <icon.SiStorybook size="32px" color="#945DD6" title="Storybook" />,
  },
  {
    name: "Git",
    icon: <icon.FaGitAlt size="32px" color="#945DD6" title="Git" />,
  },
  {
    name: "GTM",
    icon: (
      <icon.SiGoogletagmanager
        size="32px"
        color="#945DD6"
        title="Google Tag Manager"
      />
    ),
  },
  {
    name: "Figma",
    icon: <icon.FaFigma size="32px" color="#945DD6" title="Figma" />,
  },
  {
    name: "JavaScript",
    icon: (
      <icon.IoLogoJavascript size="32px" color="#945DD6" title="JavaScript" />
    ),
  },
];

const TechnologyItem = ({ name, icon }: TechnologyItemProps) => (
  <div className="w-full flex flex-col items-start">
    <span className="text-2xl text-white mb-4">{name}</span>
    <div className="w-full flex items-center justify-between flex-row gap-4">
      {icon}
      <LoadingBar />
    </div>
  </div>
);

export const Technologies = () => (
  <section id="technologies" className="flex-col w-full">
    <h1 className="text-6xl mb-24 mt-64 max-[1366px]:mt-24 max-[1366px]:mb-16 text-white max-[420px]:text-5xl max-[346px]:text-4xl">
      Tecnologias que domino
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <TechnologyItem key={index} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  </section>
);
