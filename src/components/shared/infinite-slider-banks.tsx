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

export function InfiniteSliderBanksContainer() {
  return (
    <div className="bg-gray-200 py-6 sm:py-12">
      <div className="max-w-[322px] mx-auto w-full flex flex-col justify-center-center space-y-2 py-6 md:max-w-6xl md:space-y-12">
        <h2 className="text-2xl font-bold sm:w-full sm:text-4xl sm:text-center sm:font-bold md:text-5xl">
          Única instituição <br />
          autorizada por todos <br />
          os Bancos.
        </h2>
        <p className="w-full text-base font-medium sm:max-w-5xl md:text-2xl md:max-w-4xl md:mx-auto">
          Somos a única instituição autorizada por todos os bancos para garantir segurança e
          confiança nas suas operações financeiras. Com a nossa expertise, você tem a tranquilidade
          de contar com as melhores condições de mercado.
        </p>
      </div>

      <div className="flex w-[200%] animate-[bannermove_10s_linear_infinite] md:py-6">
        <div className='w-full flex items-center space-x-6'>
          {images.map((image, imageIndex) => (
            <div key={imageIndex} className="flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={120}
                height={120}
                className="h-[120px] w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}