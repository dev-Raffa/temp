import Image from 'next/image'

const images = [
  { src: '/banrisul.png', alt: 'Banco Banrisul' },
  { src: '/bmg.png', alt: 'Banco BMG' },
  { src: '/bradesco.png', alt: 'Banco Bradesco' },
  { src: '/c6.png', alt: 'Banco C6' },
  { src: '/caixa.png', alt: 'Banco Caixa' },
  { src: '/crefisa.png', alt: 'Banco Crefisa' },
  { src: '/daycoval.png', alt: 'Banco Daycoval' },
  { src: '/itau.png', alt: 'Banco Itaú' },
  { src: '/pan.png', alt: 'Banco Pan' },
  { src: '/safra.png', alt: 'Banco Safra' },
  { src: '/santander.png', alt: 'Banco Santander' },
]

export function SimulationPageInfiniteSliderBanksSection() {
  return (
    <div className="bg-white pb-16">
      <div className="w-full flex flex-col space-y-6 py-6 pl-5 md:max-w-6xl md:space-y-12 md:pl-0">
        <h2 className="text-4xl font-bold sm:w-full sm:text-4xl sm:text-center sm:font-bold md:text-5xl">
          Única instituição <br />
          autorizada por todos <br />
          os Bancos.
        </h2>
        <p className="max-w-[340px] w-full text-lg sm:max-w-5xl md:text-2xl md:max-w-4xl md:mx-auto">
          Somos a única instituição autorizada por todos os bancos para garantir segurança e
          confiança nas suas <strong>operações financeiras</strong>. Com a nossa expertise, {" "}
          você tem a tranquilidade de contar com as melhores condições de mercado.
        </p>
      </div>

      <div className="flex w-[200%] animate-[bannermove_10s_linear_infinite] md:py-6">
        <div className='w-full flex items-center space-x-6'>
          {images.map((image, imageIndex) => (
            <div key={imageIndex} className="flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1080}
                className="h-[120px] w-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}