import { Award, Check, Clock, UsersRound } from "lucide-react"

export function TheAdvantages(){
    const advantages = [
        {
            label: "Aprovação instantânea",
            icon: <Clock className="h-14 w-auto text-red-800" />
        },
        {
            label: "Sem comprovação de renda",
            icon: <Check className="h-14 w-auto text-red-800" />
        },
        {
            label: "Mais de 2 milhões de clientes em todo Brasil",
            icon: <UsersRound className="h-14 w-auto text-red-800" />
        },
        {
            label: "20 anos de tradição e crediibilidade",
            icon:<Award className="h-14 w-auto text-red-800" />
        }
    ]

    return(
        <ul className="grid py-10 px-4 lg:px-36 gap-6 w-full grid-cols-2 lg:grid-cols-4 relative">
            {advantages.map((advantage)=>{
                return(
                    <li className="h-full flex flex-col items-start pb-4 pl-1" key={`advantage-${advantage.label}`}>
                        <figure className="h-16">
                            {advantage.icon}
                        </figure>
                        <h4 className="font-semibold text-sm sm:text-base max-w-[250px]">
                            {advantage.label}
                        </h4>
                    </li>
                )
            })}
        </ul>
    )
}