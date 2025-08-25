import { env } from "@/utils/env";
import { NextRequest, NextResponse } from "next/server";
import { AnalysisForm } from "@/app/(partners)/brasilcard/_components/forms/analysis/analysis-form";
import { loginBrasilcard } from "../../functions/login-brasilcard";
import { preApprovalBrasilcard } from "../../functions/pre-approval-brasilcard";
import { clientAnalyseBrasilcard } from "../../functions/client-analyse";
import { ClientAnalyseResponse } from "../../types/customer-analyse";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body) {
      return NextResponse.json({ error: "Corpo da requisição ausente" }, { status: 400 });
    }

    const client: AnalysisForm = body

    client.birth_date = client.birth_date.split("/").reverse().join("-")
    client.cpf = client.cpf.replaceAll(".",'').replaceAll("-","")
          
    const login = await loginBrasilcard({
      relative: env.NEXT_PUBLIC_BRASIL_CARD_RELATIVE,
      username: env.NEXT_PUBLIC_BRASIL_CARD_USERNAME,
      password: env.NEXT_PUBLIC_BRASIL_CARD_PASSWORD,
      captcha: env.NEXT_PUBLIC_BRASIL_CARD_CAPTCHA
    })

    if(!login.access_token){
      return NextResponse.json({ error: "Erro ao autenticar na Brasilcard" }, {status: 401} );
    }

    const preAnalyseResponse = await preApprovalBrasilcard(client, login.access_token)

    if(preAnalyseResponse.released_value <= 0){
      const response: ClientAnalyseResponse = {
          pre_approved: false,
          card_limit: 0,
          status: "rejected",
          message: "Cliente não foi aprovado"
        }

      return NextResponse.json(response);
    } 
      
    const analysisReponse = await clientAnalyseBrasilcard(client, login.access_token)
      
    return NextResponse.json(analysisReponse);
    
  } catch (error) {
    return NextResponse.json({ error }, {status: 500} );
  }
}
