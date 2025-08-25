import axios from "axios";

import {
  CreateCustomerRequest,
  CreatePublicServerCustomerRequest,
  CustomerOrigin
} from "@/types/customer";

import { storageKeys } from "@/config/storage-keys";
import { InteractionResponse } from "@/types/interaction";
import { toast } from "sonner";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});

export class DataService {
  static async createCustomer(formData: CreateCustomerRequest) {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const { data } = await httpClient.post(`/customers`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error: any) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  }

  static async createPublicServerCustomer(formData: CreatePublicServerCustomerRequest) {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const { data } = await httpClient.post(`/customers`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error: any) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  }

  static async getContractsByCustomerDocument(document: string) {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const { data } = await httpClient.get(
        `/contratos/refinanciamentos/${document}/vanguard-inss`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch {
      const name = localStorage.getItem(storageKeys.customerName);
      const phonenumber = localStorage.getItem(storageKeys.customerContact);
      const cpf = localStorage.getItem(storageKeys.customerDocument);
      const utmSource = localStorage.getItem(storageKeys.utmSource) || "";
      const utmCampaign = localStorage.getItem(storageKeys.utmCampaign) || "";
      const utmId = localStorage.getItem(storageKeys.utmId) || "";
      const utmContent = localStorage.getItem(storageKeys.utmContent) || "";

      if (!name || !phonenumber || !cpf) {
        throw new Error("Dados do formulário não encontrados! Tente novamente.");
      }

      await DataService.createCustomer({
        customerOrigin: CustomerOrigin.Api,
        marketingDetails: {
          utmSource,
          utmCampaign,
          utmId,
          utmContent,
        },
        name,
        phonenumber,
        cpf,
        amountContractsElegible: 0,
      });

      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
        duration: 7000,
      });
    }
  }

  static async createInteractionWithOperator() {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);
      const name = localStorage.getItem(storageKeys.customerName);
      const phonenumber = localStorage.getItem(storageKeys.customerContact);
      const cpf = localStorage.getItem(storageKeys.customerDocument);

      if (!token || !name || !cpf || !phonenumber) {
        throw new Error("Dados necessários não encontrados. Tente novamente.");
      }

      const payload = {
        customer: {
          name: name,
          cpf: cpf,
          phoneNumber: phonenumber
        }
      }

      const { data } = await httpClient.post<InteractionResponse>(`/interaction`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error!");
    }
  }

  static async createInteraction(name: string, document: string, phoneNumber: string) {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);

      if (!token) {
        throw new Error("Unauthorized action.");
      }

      const payload = {
        customer: {
          name: name,
          cpf: document,
          phoneNumber: phoneNumber
        }
      }

      const { data } = await httpClient.post<InteractionResponse>(`/interaction`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error!");
    }
  }

  static async createInteractionWithDigisac() {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);

      if (!token) {
        throw new Error("Unauthorized action.");
      }

      const { data } = await httpClient.post<{ phoneNumber: string }>(
        `/interaction/assign-digisac`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error!");
    }
  }

  static async uploadFile(File: File, FileName: string) {
    try {
      const token = localStorage.getItem(storageKeys.accessToken);
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const formData = new FormData();
      formData.append("File", File);
      formData.append("FileName", FileName);

      const { data } = await httpClient.post(`/files/import/document`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        transformRequest: [(data) => data],
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Internal server error!");
    }
  }
}
