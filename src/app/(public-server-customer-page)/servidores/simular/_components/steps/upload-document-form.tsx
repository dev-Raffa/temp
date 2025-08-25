"use client"


import {
  AlertCircleIcon,
  CheckCircleIcon,
  CloudUploadIcon
} from "lucide-react";

import { EllipsisLoader } from "@/components/shared/ellipsis-loader";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { storageKeys } from "@/config/storage-keys";
import { useStepper } from "@/hooks/use-stepper";
import { PublicServerCustomerSchema } from "@/schemas/public-server-customer-form";
import { DataService } from "@/services/data-service";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";
import { SacLinkButton } from "../sac-link-button";

export function PublicServerCustomerUploadDocumentForm() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string>("");
  const [uploadError, setUploadError] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState(false);

  const form = useFormContext<PublicServerCustomerSchema>();
  const currentFile = form.watch("publicServerCustomerDocumentUpload.file");

  const { previousStep, nextStep } = useStepper();

  const validateFile = (file: File): string | null => {
    if (file.type !== "application/pdf") {
      return "Apenas arquivos PDF são permitidos";
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB
      return "O arquivo deve ter no máximo 10MB";
    }

    return null;
  };

  const handleFileSelection = (file: File) => {
    const error = validateFile(file);

    if (error) {
      setFileError(error);
      form.setValue("publicServerCustomerDocumentUpload.file", undefined as any);
    } else {
      setFileError("");
      form.setValue("publicServerCustomerDocumentUpload.file", file);
      form.trigger("publicServerCustomerDocumentUpload.file");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleUploadedFile = async () => {
    const isValid = await form.trigger("publicServerCustomerDocumentUpload.file");

    const customerContact = localStorage.getItem(storageKeys.publicServerCustomerContact);
    if (!customerContact) return null;

    const formattedCustomerContact = customerContact.replace(/[\s()-]/g, "");

    if (isValid) {
      try {
        if (currentFile) {
          setUploadError(false);
          setIsUploading(true);
          await DataService.uploadFile(currentFile, formattedCustomerContact);
          toast.success("Arquivo enviado com sucesso!");
          nextStep();
        }
      } catch {
        setUploadError(true);
        toast.error("Erro ao enviar o arquivo. Tente novamente.");
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 items-center py-6 sm:py-12 md:py-16">
      <h1 className="text-xl font-medium px-2">
        Anexe seu contracheque
      </h1>

      <div className="px-2 mt-4">
        <FormField
          control={form.control}
          name="publicServerCustomerDocumentUpload.file"
          render={() => (
            <FormItem>
              <FormControl>
                <div
                  className={`border-2 ${isDragging
                    ? "border-secondary-red"
                    : currentFile
                      ? "border-green-500"
                      : "border-muted-foreground"
                    } rounded-lg p-6 flex flex-col items-center justify-center transition-colors`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {currentFile ? (
                    <CheckCircleIcon className="text-green-500 size-12" />
                  ) : (
                    <CloudUploadIcon className="text-secondary-red size-12" />
                  )}

                  <span className="text-[#555] text-xl font-medium mb-1">
                    {currentFile ? "Arquivo selecionado" : "Arraste o arquivo aqui"}
                  </span>

                  <p className="w-64 text-muted-foreground text-xs text-center mb-4">
                    {currentFile
                      ? `${currentFile.name} (${(currentFile.size / 1024 / 1024).toFixed(2)} MB)`
                      : "Arraste e solte o arquivo PDF aqui ou navegue pelo seu dispositivo"
                    }
                  </p>

                  <Label htmlFor="file-upload">
                    <div className="bg-secondary-red text-xs text-white px-4 py-2 rounded cursor-pointer hover:bg-secondary-red/90 transition-colors">
                      {currentFile ? "Alterar arquivo" : "Procurar arquivo PDF"}
                    </div>

                    <Input
                      id="file-upload"
                      type="file"
                      accept=".pdf,application/pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fileError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <AlertCircleIcon className="size-4 text-secondary-red flex-shrink-0" />
            <p className="text-sm text-secondary-red">{fileError}</p>
          </div>
        )}

        {currentFile && !fileError && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <CheckCircleIcon className="size-4 text-green-500 flex-shrink-0" />
            <p className="text-sm text-green-700">
              ✓ Arquivo PDF válido selecionado
            </p>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground py-6">
        <strong className="text-black">
          Anexe seu contracheque mais recente (apenas PDF):
        </strong> <br />
        Utilizaremos este documento apenas para validar os dados do seu contrato consignado. Garantimos o uso seguro e sigiloso das suas informações.
      </p>

      {uploadError && <SacLinkButton />}

      <div className="w-full flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:items-center sm:space-x-6 sm:space-y-0 sm:mt-6">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="hidden sm:flex h-10 w-72 text-sm rounded text-secondary-red border-secondary-red disabled:bg-zinc-100 disabled:border-none"
          disabled={isUploading}
          onClick={() => previousStep()}
        >
          Voltar
        </Button>

        <Button
          type="button"
          size="lg"
          className="w-full h-14 bg-secondary-red rounded-sm sm:h-10 sm:w-72 sm:text-sm sm:rounded"
          disabled={isUploading}
          onClick={() => handleUploadedFile()}
        >
          {isUploading ? <EllipsisLoader /> : "Próximo"}
        </Button>

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-14 w-full rounded-sm text-secondary-red border-secondary-red sm:hidden disabled:bg-zinc-100 disabled:border-none"
          disabled={isUploading}
          onClick={() => previousStep()}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}