import formImg from "@/app/assets/images/formulario.png";
import lgpdImg from "@/app/assets/images/lgpd.png";
import Image from "next/image";

export function SimulationPageLGPDSection() {
  return (
    <div className="bg-white py-16">
      <div className="flex flex-col items-center max-w-6xl w-full mx-auto space-y-6 py-6">
        <h2 className="w-full text-4xl font-bold pl-5 md:text-5xl md:text-center md:pl-0">
          Por que pedimos <br />
          os seus dados?
        </h2>
        <p className="max-w-md w-full text-lg px-5 md:text-2xl md:max-w-4xl md:mx-auto md:px-0">
          Para realizar uma simulação personalizada e direcionar você para um atendimento {" "}
          especializado, solicitamos algumas informações. Seguimos rigorosamente a {" "}
          <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, {" "}
          garantindo que seus dados sejam tratados com total segurança e sigilo. {" "}
          Além disso, só entraremos em contato com a sua autorização expressa.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <Image
            src={lgpdImg}
            width={200}
            height={100}
            alt="LGPD logo"
            priority
          />

          <Image
            src={formImg}
            width={13333}
            height={7500}
            className="w-full md:w-3/4"
            alt="Formulário em 3D do site"
            priority
          />
        </div>
      </div>
    </div>
  )
}