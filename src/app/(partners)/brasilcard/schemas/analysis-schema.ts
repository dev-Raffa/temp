import {z} from "zod"

export const BrasilCardAnalysisSchema = z.object({
    cpf: z
        .string()
        .min(14, "O CPF é obrigatório! Informe um CPF válido."),
    uf: z
        .string()
        .length(2, "UF é obrigatória"),
    employment_status: z
        .string()
        .min(1, "Situação empregatíca é obrigatória"),
    birth_day: z
        .string()
        .min(6, "Data de nascimento é obriatória")
})

export type BrasilCardAnalysisFormData = z.infer<typeof BrasilCardAnalysisSchema>;