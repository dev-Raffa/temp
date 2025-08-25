import logo from "@/app/assets/images/logo-red.png";
import Image from "next/image";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon
} from "lucide-react";

export function InstitutionalFooterContainer() {
  return (
    <div className="bg-[#f5f5f6] size-full flex flex-col items-center justify-center pt-12 pb-48 sm:py-12 sm:overflow-hidden">
      <div className="w-full flex justify-between items-center px-12 lg:max-w-7xl lg:w-full lg:mx-auto lg:px-0">
        <div className="hidden sm:flex flex-col space-y-6">
          <Image
            src={logo}
            width={140}
            height={20}
            alt="logo"
            priority
          />
          <p className="max-w-md w-full whitespace-pre-line text-base font-medium tracking-tighter text-black">
            Há 5 anos atuando com credibilidade, segurança e qualidade. Nascemos do desejo de empreender ajudando as pessoas a melhorarem suas condições financeiras!
          </p>
          <small className="text-[#555]">
            Smart Consig Soluções Financeiras LTDA
          </small>
        </div>
        <div className="flex items-center space-x-20">
          <div className="grid grid-cols-1 gap-6">
            <Image
              src={logo}
              width={140}
              height={20}
              className="block w-1/3 mb-3 sm:hidden"
              alt="logo"
              priority
            />
            <div className="flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Contato
              </span>
              <p className="inline-flex items-center gap-2 text-sm text-black hover:underline hover:text-[#555]">
                <PhoneIcon className="size-4" />
                (11) 3308-7564
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-black hover:underline hover:text-[#555]">
                <MailIcon className="size-4" />
                contato@gruposmartconsig.com.br
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Localização
              </span>
              <p className="max-w-xs w-full whitespace-pre-line text-sm font-medium tracking-tighter text-black">
                R. Guaraciaba, 27 - Jardim Barbosa, Guarulhos - SP, 07111-020
              </p>
              <small className="text-[#555] font-medium">
                CNPJ: 37.044.794/0001-03
              </small>
            </div>
            <div className="hidden sm:flex flex-col space-y-3">
              <span className="text-lg font-bold text-primary-red">
                Redes sociais
              </span>
              <div className="flex items-center gap-6">
                <Link
                  href="https://www.instagram.com/smart_consig/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                  className="inline-flex items-center gap-2 text-sm text-black hover:underline hover:text-[#555]"
                >
                  <InstagramIcon className="size-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/smartconsigsf?mibextid=LQQJ4d"
                  className="inline-flex items-center gap-2 text-sm text-black hover:underline hover:text-[#555]"
                >
                  <FacebookIcon className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}