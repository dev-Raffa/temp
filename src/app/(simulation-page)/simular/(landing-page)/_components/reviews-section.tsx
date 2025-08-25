import Marquee from "@/components/magic-ui/marquee";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const getRandomStars = () => {
  const numStars = Math.floor(Math.random() * 2) + 4;
  return Array.from({ length: numStars }, (_, i) => (
    <Star key={i} className="size-4 fill-yellow-400" />
  ));
};

const reviews = [
  {
    name: "Adelar Cendron",
    stars: getRandomStars(),
    body: "Ótima empresa para consignado, fui muito bem atendido. Conseguiram baixar as parcelas de outro empréstimo que eu tinha.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWUEcby4AEK6OwwQdZebZYCH4x03zH4Df771s7vLh7SbYKPT4GB=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Sandra Suely",
    stars: getRandomStars(),
    body: "Gostaria muito de agradecer à todos pela dedicação e empenho, principalmente por todo o carinho, dedicação e responsabilidade.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVBGB6m0ATDO8AVLPC3yIBgXRvo1HpUULECS_kuk8uEC4DEWdce=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Sergio Garcia",
    stars: getRandomStars(),
    body: "Funcionárias bem preparadas e ótimo atendimento. Empresa séria com disposição para orientar e explicar.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWE4gF9WKNYsIATND6kahbIW2fFHCqAAld7FWJLAIeAgMqrf-6C=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Marco Antonio Valle",
    stars: getRandomStars(),
    body: "Atendente Rayssa bem atenciosa e muito profissional nas informações repassada ao cliente,dando o feedback mais rápido possível.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVWeI09GP70MBdRxV-B__ZlIw0l3qaoaZU8Nii2hCcOQfKPB7wo=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Claudia Morato",
    stars: getRandomStars(),
    body: "Olá...A Giovanna Ayello foi quem me atendeu. Muito simpática, me explicou tudo com muita exatidão e clareza.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUu8u_0fAzrBwn3bVZUSAw_OuxJ8noWQLAbq-Q2JvIZD394GKV7=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Aristides Nogueira",
    stars: getRandomStars(),
    body: "A minha experiência foi boa, gostei. Quando eu optei em aceitar o serviço de vocês, foi pelo o atendimento, serviço nota 10.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUjVTVOfOfqhvuPDMogT9l6-ie8YvprtV3vj5HDTt2q9cPF2c5U=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Manoel Venceslau",
    stars: getRandomStars(),
    body: "Fui muito bem atendido pelo Lucas Randon, sempre que solicito retorna informando tudo durante o processo! Recomendo.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVch2aWfCC50P6TBviuvjyLwHL5AQoYSr4K-D2xXLg0Ie_elUXI=w36-h36-p-rp-mo-br100",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  stars,
  body,
}: {
  img: string;
  name: string;
  stars: React.ReactNode;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-zinc-950 hover:bg-zinc-50/[.10]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          src={img}
          width={32}
          height={32}
          className="rounded-full"
          alt="circúlo colorido"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="flex text-xs font-medium text-white/40">{stars}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs">{body}</blockquote>
    </figure>
  );
};

export function SimulationPageReviewsSection() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden text-white md:shadow-xl">
      <h5 className="max-w-52 text-2xl text-center font-bold text-danger-red leading-tight pb-12 sm:text-4xl md:max-w-full md:text-5xl md:font-semibold">
        Avaliações dos nossos clientes
      </h5>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
}
