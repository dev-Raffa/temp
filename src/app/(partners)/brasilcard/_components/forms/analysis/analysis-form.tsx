"use client";

import axios from "axios";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidCpf, maskCPF } from "@/utils/mask/mask-cpf";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { occupations } from "@/utils/enums/occupations-enum";
import { UFs } from "@/utils/enums/ufs-enum";
import { format } from "date-fns";
import { maskDate } from "@/utils/mask/mask-date";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useClientSolicitationContext } from "../../../contexts/client/client-context";
import { useRouter } from "next/navigation";

export interface AnalysisForm  {
    cpf: string
    uf: string
    employment_status: string
    birth_date: string
}

export function AnalysisForm() {
  const { setClientData, stateOptions } = useClientSolicitationContext()
  const router = useRouter()
  const form = useForm<AnalysisForm>();

  const { watch, setValue, setError, clearErrors } = form;

  const cpf = watch("cpf");
  const uf = watch('uf');
  const employment_status = watch("employment_status")
  const birthday = watch('birth_date')

  useEffect(() => {
    if(cpf){
        setValue("cpf", maskCPF(cpf))
    }
  }, [cpf, setValue]);

  useEffect(()=>{
    setValue('birth_date', maskDate(birthday))

  }, [birthday, setValue ])

  function validateCPF(){
    if(!cpf){
        setError('cpf', {message: "CPF é obrigatório"})
        return false;
    }
    if(!isValidCpf(cpf)){
        setError('cpf', {message: "Informe um CPF válido."})
          return false;
    }
    
    clearErrors("cpf")
    return true;
  }

  function validateUF(){
    if(!uf){
        setError("uf", { message: "UF é obrigatório"})
        return false
    }

    return true
  }

  function validateEmploymentStatus(){
    if(!employment_status){
        setError('employment_status', { message: 'Situação empregatícia é obrigatório'})
        return false
    }

    return true
  }

  function validateBirthDay(){
    if(!birthday){
        setError("birth_date", {message: "Data de aniversário é obrigatório"})
        return false;
    }
    return true;
  }

  function validateInputs(){
    const isCPFValid = validateCPF()
    const isUFValid = validateUF()
    const isEmploymentStatusValid = validateEmploymentStatus()
    const isBirthDayValid = validateBirthDay()

    if(!isCPFValid || !isUFValid || !isEmploymentStatusValid || !isBirthDayValid) return false;

    return true;
  }

  function onSubmit(data: AnalysisForm) {
    if(!validateInputs()) return;

    axios.post('/api/brasilcard/client-analyse', data)
      .then((resp)=>{
        if(resp.data.status === "approved"){
          setClientData({
            cpf: data.cpf,
            uf: data.uf,
            employment_status: data.employment_status,
            birth_date: data.birth_date
          })

          router.push('/brasilcard/analise/solicitacao')
        }
        if(resp.data.status === "rejected"){
          router.push('/brasilcard/analise/reprovado')
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md w-full">
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="CPF"
                  maxLength={14}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uf"
          render={({ field }) => (
            <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a sua UF" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      stateOptions.map((state, index)=>{
                        return(
                          <SelectItem key={`uf-${uf}`} value={state.codigo}>
                            {state.descricao}
                          </SelectItem>
                        )
                      })
                    }
                  </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employment_status"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Situação Empregatícia" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {occupations.map((occupation, index)=>{
                    return(
                      <SelectItem key={`${occupation}-${index}`} value={`000${index + 1}`} >{occupation}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="birth_date"
          render={({field})=>(
            <FormItem>
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
                          captionLayout="dropdown"
                          onSelect={(value)=>{
                            if(value){
                              setValue('birth_date', format(value, 'dd/MM/yyyy'))
                            }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-[#024C89] font-bold" type="submit">Quero o Meu BrasilCard</Button>
      </form>
    </Form>
  );
}

