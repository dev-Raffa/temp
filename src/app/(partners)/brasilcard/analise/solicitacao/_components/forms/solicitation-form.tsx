'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { useClientSolicitationContext } from "@/app/(partners)/brasilcard/contexts/client/client-context";

export interface SolicitationFormData{
    name: string
    cpf: string, 
    identity_document_number: string,
    identity_document_state: string,
    cellphone: string,
    email: string,
    birth_date: string,
    sex: string,
    marital_status: string,
    mother_name: string,
    job: string,
    job_company: string,
    employment_status: string,
    income: string,
    zipcode: string,
    city: string,
    state: string,
    type_street: string,
    address: string,
    number: string,
    complement: string,
    neighborhood: string,
    politically_exposed_position: boolean,
    politically_exposed_position_date: string,
    politically_exposed_relative: boolean,
}

export function SolicitationForm(): JSX.Element{
    const {clientData } = useClientSolicitationContext()
    
    const form = useForm<SolicitationFormData>({
        defaultValues: clientData
    })

    const { watch, setValue } = form;

    function onSubmit(data: SolicitationFormData){
        console.log("...")
    }

    return(
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="py-12 flex flex-col gap-9">
                <section className="flex flex-col gap-6">
                    <h3 className=" font-semibold text-xl">
                        Dados Pessoais 
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-between">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field})=>(
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            placeholder="Nome Completo"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="CPF" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="birth_date"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <div className="flex flex-col gap-3">
                                            <div className="relative flex gap-2">  
                                                <Input
                                                    placeholder='Data de Nascimento'
                                                    {...field}
                                                />
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                    <Button
                                                        id="date-picker"
                                                        variant="ghost"
                                                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                                    >
                                                        <CalendarIcon className="size-3.5" />
                                                        <span className="sr-only">Select date</span>
                                                    </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent
                                                        className="w-auto overflow-hidden p-0"
                                                        align="end"
                                                        alignOffset={-8}
                                                        sideOffset={10}
                                                    >
                                                        <Calendar
                                                            mode="single"
                                                            locale={ptBR}
                                                            selected={ new Date(field.value) ?? undefined}
                                                            captionLayout="dropdown"
                                                            onSelect={(value)=>{
                                                            if(value){
                                                                setValue('birth_date', format(value.toDateString(), 'dd/MM/yyyy'))
                                                            }
                                                            }}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mother_name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Nome da Mãe" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="identity_document_number"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="RG" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="identity_document_state"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="UF do RG" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cellphone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Telefone com DD" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="E-mail" type="email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sex"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Telefone" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </section>
                <section className="flex flex-col gap-6">
                    <h3 className=" font-semibold text-xl">Endereço</h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <FormField
                            control={form.control}
                            name="zipcode"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="CEP" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Cidade" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="UF" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type_street"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Tipo de logradouro" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Logradouro" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Número" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="neighborhood"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Bairro" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="complement"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Complemento" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </section>
                <section className="flex flex-col gap-6">
                    <h3 className=" font-semibold text-xl">
                        Dados Complementares
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-between">
                        <FormField
                            control={form.control}
                            name="marital_status"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Estado cívil" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="job"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Profissão" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="income"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Renda" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="employment_status"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Situação empregatícia" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="job_company"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Empresa" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="politically_exposed_position"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between space-x-3">
                                    <FormLabel>
                                        Pessoa politicamente exposta?
                                    </FormLabel>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="mt-[0!important]"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="politically_exposed_position_date"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <div className="flex flex-col gap-3">
                                            <div className="relative flex gap-2">  
                                                <Input placeholder="Data da posição politicamente exposta" {...field} />  
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                    <Button
                                                        id="date-picker"
                                                        variant="ghost"
                                                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                                    >
                                                        <CalendarIcon className="size-3.5" />
                                                        <span className="sr-only">Select date</span>
                                                    </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent
                                                        className="w-auto overflow-hidden p-0"
                                                        align="end"
                                                        alignOffset={-8}
                                                        sideOffset={10}
                                                    >
                                                        <Calendar
                                                            mode="single"
                                                            locale={ptBR}
                                                            selected={ new Date(field.value) ?? undefined}
                                                            captionLayout="dropdown"
                                                            onSelect={(value)=>{
                                                            if(value){
                                                                setValue('politically_exposed_position_date', format(value.toDateString(), 'dd/MM/yyyy'))
                                                            }
                                                            }}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="politically_exposed_relative"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between space-x-3">
                                    <FormLabel>
                                        Parente de pessoa politicamente exposta?
                                    </FormLabel>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="mt-[0!important]"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </section>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Button className="sm:col-start-2 lg:col-start-3 bg-cyan-900 hover:bg-cyan-700" type="submit">Enviar Solicitação</Button>
                </div>                        
           </form>
        </Form>
    )
}