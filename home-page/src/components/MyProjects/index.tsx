import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./Carousel/CarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Carousel/CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselItem, state } from "./Carousel/CarouselItems";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export const MyProjects: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const items = state.items;
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section id="projects" className="max-w-[100%] m-auto">
      <div className="flex justify-start w-full">
        <h1 className="text-6xl mb-24 mt-64 text-white max-[1366px]:mt-24 max-[1366px]:mb-16 max-[420px]:text-5xl max-[346px]:text-4xl">
          Projetos
        </h1>
      </div>
      <div className="overflow-hidden pt-[10px] pb-[10px]" ref={emblaRef}>
        <div
          className="flex w-full h-full gap-10"
          style={{
            touchAction: "pan-y pinch-zoom",
          }}
        >
          {items.map((item: CarouselItem) => (
            <div
              className="flex origin-center flex-col w-full h-auto max-[550px]:h-[630px] max-w-[550px] min-w-[440px] max-[550px]:min-w-full max-h-[700px] max-[550px]:max-h-full pt-6 pr-6 pb-11 pl-6 border-2 border-white rounded-tl-[50px] rounded-tr-0 rounded-bl-0 rounded-br-[50px] bg-primary  hover:scale-[1.01] transition-transform duration-1000 ease-in-out"
              key={item.id}
            >
              {item.hosting ? (
                <div className="relative flex space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75 mt-1 ml-2"></div>
                  <div className="absolute top-1 left-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-[#22C55E]">online</span>
                </div>
              ) : (
                <div className="relative flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-75 mt-1 ml-2"></div>
                  <div className="absolute top-1 left-0 w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-[#EF4444]">offline</span>
                </div>
              )}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col flex-end justify-between h-[600px]"
              >
                <div className="p-4 text-white flex gap-4 flex-col">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[auto] h-[176px] object-cover rounded-lg shadow-projects-preview mx-auto"
                  />
                  <h3 className="text-2xl font-bold text-center">
                    {item.title}
                  </h3>
                  <hr className="h-1 w-2/3 bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-[5.18rem] border-none mx-auto" />
                  <p className="text-center text-sm max-[550px]:text-xs">
                    {item.description}
                  </p>
                  <span className="text-center text-sm max-[550px]:text-xs text-[#13ADC7]">
                    {item.onlyFrontHosting}
                  </span>
                </div>
                <div className="max-[550px]:w-full">
                  <button
                    className="flex place-content-around bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] w-48 max-[550px]:w-full h-14 text-sm text-white items-center rounded-[5.18rem] hover:scale-[1.02] transition-all duration-200"
                    type="button"
                    onClick={() => {
                      window.open(`${item.url}`, "_blank");
                    }}
                  >
                    {item.hosting ? "Abrir projeto" : "Abrir repositório"}
                  </button>
                  <div className="flex flex-row space-x-4 mt-8 text-white">
                    <span className="flex items-center p-2 max-[412px]:text-xs rounded bg-[#13ADC7]">
                      {item.frontend}
                    </span>
                    {item.backend && (
                      <span className="flex items-center p-2 max-[412px]:text-xs rounded bg-[#945DD6]">
                        {item.backend}
                      </span>
                    )}
                    {item.mobile && (
                      <span className="flex items-center p-2 max-[412px]:text-xs rounded bg-[#6978D1]">
                        {item.mobile}
                      </span>
                    )}
                    {item.aem && (
                      <span className="flex items-center p-2 max-[412px]:text-xs rounded bg-[#945DD6]">
                        {item.aem}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem] max-[768px]:flex max-[768px]:justify-center">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center max-[768px]:gap-14">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center mr-[-calc((2.6rem - 1.4rem) / 2)] max-[768px]:hidden">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-[2.6rem] h-[2.6rem] rounded-full flex items-center justify-center
        ${
          index === selectedIndex
            ? 'after:content-[""] after:w-[1.4rem] after:h-[1.4rem] after:rounded-full after:flex after:items-center after:shadow-[inset_0_0_0_0.2rem_var(--text-body)]'
            : 'after:content-[""] after:w-[1.4rem] after:h-[1.4rem] after:rounded-full after:flex after:items-center after:shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)]'
        }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
