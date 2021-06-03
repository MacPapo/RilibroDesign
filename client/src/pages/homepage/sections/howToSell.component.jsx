import { BookOpenIcon, ClockIcon, CurrencyEuroIcon } from "@heroicons/react/outline";

const features = [
  {
    titolo: "Pubblica un annuncio",
    descrizione:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BookOpenIcon,
  },
  {
    titolo: "Pazienta",
    descrizione:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ClockIcon,
  },
  {
    titolo: "Affare Fatto!",
    descrizione:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CurrencyEuroIcon,
  }
];

export default function HowToSell() {
  return (
    <div className="container px-5 mx-auto py-14">
      <div className="mb-20 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 uppercase sm:text-2xl title-font">
          Come vendere su rilibro
        </h1>
        <div className="flex justify-center mt-6">
          <div className="inline-flex h-1 bg-green-400 rounded-full w-36 "></div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
        {features.map((feature) => (
          <div
            key={feature.titolo}
            className="flex flex-col items-center p-4 text-center md:w-1/3"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 text-gray-700 bg-green-100 rounded-full shadow-inner hover:bg-green-400">
              <feature.icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex-grow">
              <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                {feature.titolo}
              </h2>
              <p className="text-base leading-relaxed">{feature.descrizione}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
