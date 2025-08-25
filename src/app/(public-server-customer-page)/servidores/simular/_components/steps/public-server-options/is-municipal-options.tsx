"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useId, useState } from "react";
import { Control } from "react-hook-form";
import { PublicServerCustomerSchema } from "../../form";

interface PublicServerCustomerIsMunicipalOptionsProps {
  formControl: Control<PublicServerCustomerSchema>;
}

const options = [
  { value: "PermanentEmployee", label: "Concursado" },
  { value: "PermanentActive", label: "Ativo Permanente" },
  { value: "RetiredOrPensioner", label: "Aposentado ou pensionista" },
  { value: "CLTEmployee", label: "CLT/Celetista" },
  { value: "CommissionedPosition", label: "Cargo Comissionado" },
  { value: "TemporaryPosition", label: "Cargo Temporário" },
  { value: "Other", label: "Outro" },
];

export function PublicServerCustomerIsMunicipalOptions({
  formControl
}: PublicServerCustomerIsMunicipalOptionsProps) {
  const id = useId();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");

  return (
    <>
      <div className="hidden md:block">
        <FormField
          control={formControl}
          name="publicServerCustomerInfoForm.isMunicipalPublicServer"
          render={({ field }) => (
            <FormItem className="py-4 space-y-3">
              <FormLabel>
                Você é servidor público municipal de qual esfera?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  {options.map((option) => (
                    <FormItem key={option.value} className="flex items-center gap-x-2">
                      <FormControl>
                        <RadioGroupItem className="border-[#555]" value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal pb-1">{option.label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="md:hidden">
        <FormField
          control={formControl}
          name="publicServerCustomerInfoForm.isMunicipalPublicServer"
          render={({ field }) => (
            <FormItem className="py-4 space-y-3">
              <FormLabel>
                Você é servidor público municipal de qual esfera?
              </FormLabel>
              <FormControl>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id={id}
                      type="button"
                      variant="outline"
                      role="combobox"
                      aria-expanded={isOpen}
                      className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
                    >
                      <span className={cn("truncate", !label && "text-muted-foreground")}>
                        {label
                          ? options.find((option) => option.label === label)
                            ?.label
                          : "Escolher esfera"}
                      </span>
                      <ChevronDownIcon
                        size={16}
                        className="text-muted-foreground/80 shrink-0"
                        aria-hidden="true"
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
                    align="start"
                  >
                    <Command className="max-w-xs">
                      <CommandInput placeholder="Procurar..." />
                      <CommandList>
                        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                        <CommandGroup>
                          {options.map((option) => (
                            <CommandItem
                              key={option.label}
                              value={option.label}
                              onSelect={(currentValue) => {
                                setLabel(currentValue === label ? "" : currentValue)
                                field.onChange(options.find((opt) => opt.label === currentValue)?.value)
                                setIsOpen(false)
                              }}
                              className="cursor-pointer"
                            >
                              <CheckIcon
                                className={cn(
                                  "mr-2 size-4",
                                  field.value === option.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              <span className="text-xs">{option.label}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}