import { z } from "zod";

import { isValidCpf } from "@/utils/mask/mask-cpf";

export const BrasilCardSolicitationSchema = z.object({
    name: z
        .string()
        .min(4, "O nome completo é um campo obrigatório.")
        .refine(
          value => {
            const names = value.trim().split(" ");
            return names.length >= 2;
          },
          "Você deve preencher o seu nome completo."
        ),
    cpf: z
        .string()
        .min(14, "O CPF é obrigatório! Informe um CPF válido.")
        .refine((cpf: string) => isValidCpf(cpf), {
          message: "Informe um CPF válido.",
        }), 
    identity_document_number: z
        .string(),
    identity_document_state: z
        .string(),
    cellphone: z
        .string()
        .min(15, "Informe um telefone válido."),
    email: z
        .string(),
    birth_date: z
        .string()
        .min(6, "Data de Nascimento é obriatório"),
    sex: z
        .string(),
    marital_status: z
        .string(),
    mother_name: z
        .string()
        .min(4, "O nome completo é um campo obrigatório.")
        .refine(
          value => {
            const names = value.trim().split(" ");
            return names.length >= 2;
          },
          "Você deve preencher o seu nome completo."
        ),
    job: z
        .string(),
    job_company: z 
        .string(),
    employment_status: z
        .string()
        .length(4, "Situação empregatícia é obrigatória"),
    income: z
        .number()
        .min(0, "Renda é obrigatório"),
    zipcode: z
        .string(),
    city: z
        .string(),
    state: z
        .string(),
    type_street: z
        .string(),
    address: z
        .string(),
    number: z
        .string(),
    complement: z
        .string(),
    neighborhood: z
        .string(),
    politically_exposed_position: z
        .boolean(),
    politically_exposed_position_date: z
        .string(),
    politically_exposed_relative: z
        .boolean(),
    
})

export type BrasilCardSolicitationFormData = z.infer<typeof BrasilCardSolicitationSchema>
