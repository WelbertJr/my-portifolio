import icon from "../../icons";

export const Footer = () => {
  return (
    <footer className="relative z-50 bg-black flex justify-center h-32">
      <div className="flex w-1/2 max-[620px]:w-full items-center justify-between max-[620px]:justify-around text-white text-xl max-w-[1920px]">
        <div className="flex flex-col items-center hover:scale-110 duration-1000">
          <span className="max-[620px]:hidden">E-mail:</span>
          <icon.PiMicrosoftOutlookLogoFill
            size="32px"
            title="E-mail"
            color="white"
            cursor="pointer"
            onClick={() =>
              (window.location.href = "mailto:welbertjunior@live.com")
            }
          />
        </div>
        <div className="flex flex-col items-center hover:scale-110 duration-1000">
          <span className="max-[620px]:hidden">Linkedin:</span>
          <icon.IoLogoLinkedin
            size="32px"
            title="Linkedin"
            color="white"
            cursor="pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/welbert-junior/",
                "_blank"
              )
            }
          />
        </div>
        <div className="flex flex-col items-center hover:scale-110 duration-1000">
          <span className="max-[620px]:hidden">GitHub:</span>
          <icon.FaGithub
            size="32px"
            title="GitHub"
            color="white"
            cursor="pointer"
            onClick={() =>
              window.open(
                "https://github.com/WelbertJr?tab=repositories",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </footer>
  );
};
