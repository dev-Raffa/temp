import { InfiniteSlider } from '@/components/magic-ui/infinite-slider';

import Image from 'next/image';

export function InfiniteSliderBanksDesktopContainer() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="hidden md:flex flex-col justify-center-center max-w-6xl w-full mx-auto space-y-12 py-6">
        <h2 className="hidden sm:block w-full text-4xl text-center font-bold md:text-5xl">
          Única instituição <br />
          autorizada por todos <br />
          os Bancos.
        </h2>
        <p className="hidden sm:block max-w-5xl w-full md:text-2xl md:max-w-4xl md:mx-auto">
          Somos a única instituição autorizada por todos os bancos para garantir segurança e
          confiança nas suas operações financeiras. Com a nossa expertise, você tem a tranquilidade
          de contar com as melhores condições de mercado.
        </p>
      </div>


      <InfiniteSlider className="hidden sm:flex sm:h-auto sm:py-6" gap={24} reverse>
        <Image
          src="/banrisul.png"
          alt="Banco banrisul"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/bmg.png"
          alt="Banco bmg"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/bradesco.png"
          alt="Banco bradesco"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/c6.png"
          alt="Banco c6"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/caixa.png"
          alt="Banco caixa"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/crefisa.png"
          alt="Banco crefisa"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/daycoval.png"
          alt="Banco daycoval"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/itau.png"
          alt="Banco itau"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/pan.png"
          alt="Banco pan"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/safra.png"
          alt="Banco safra"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
        <Image
          src="/santander.png"
          alt="Banco santander"
          className="h-[120px] w-auto"
          width={120}
          height={120}
          loading='lazy'
        />
      </InfiniteSlider>
    </div>
  );
}