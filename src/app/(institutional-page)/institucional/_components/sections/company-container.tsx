import Image from "next/image";


export function InstitutionalCompanyContainer() {
  return (
    <div className="grid grid-cols-1 px-6 pb-6 md:grid-cols-2 md:h-[460px] md:max-w-6xl md:w-full md:mx-auto md:px-0 md:py-12">
      <div className="size-full py-6">
        <Image
          src="/smartconsig.jpg"
          width={1536}
          height={1024}
          alt="Homem sorrindo no telefone"
          className="w-full rounded sm:w-[90%]"
        />
      </div>

      <div className="space-y-4 md:py-6">
        <h2 className="text-lg text-black font-medium">
          Muito além de uma empresa financeira. Uma solução para a sua vida.
        </h2>

        <p className="text-[#555] text-[15px]">
          A Smart Consig nasceu com o propósito de transformar a relação das pessoas com a própria vida financeira. Mais do que oferecer um serviço, entregamos uma solução: analisamos cada situação com cuidado, identificamos oportunidades de melhoria e ajudamos nossos clientes a tomarem decisões que geram economia, equilíbrio e tranquilidade no dia a dia.
        </p>

        <p className="text-[#555] text-[15px]">
          Acreditamos que todo mundo merece ter controle sobre suas finanças — e é isso que nos move. Com uma equipe especializada, processos simples e atendimento humanizado, atuamos para facilitar a jornada financeira de quem busca sair do aperto, organizar as contas ou aproveitar melhor seu dinheiro. Aqui, cada cliente é único e cada conquista é motivo de orgulho.
        </p>
      </div>
    </div>
  )
}