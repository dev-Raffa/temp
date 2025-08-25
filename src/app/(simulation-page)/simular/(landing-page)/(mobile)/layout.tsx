'use client'

import logo from '@/app/assets/images/logo-black.png'
import Image from "next/image"

import { UtmLink } from "@/components/shared/utm-link"
import { ProposalsProvider } from "@/context/proposals-context"
import { UtmProviderSuspense } from '@/context/utm-context'

interface MobileFormLayoutProps {
  children: React.ReactNode
}

export default function MobileFormLayout({ children }: MobileFormLayoutProps) {
  return (
    <UtmProviderSuspense>
      <ProposalsProvider>
        <div className="min-h-screen w-full flex justify-center items-center overflow-hidden sm:hidden">
          <div className="grid grid-cols-1">
            <div className="flex justify-center items-center p-12">
              <UtmLink href="/">
                <Image
                  src={logo}
                  width={450}
                  height={253}
                  className="w-32"
                  alt="Smartconsig logo"
                />
              </UtmLink>
            </div>
            {children}
          </div>
        </div>
      </ProposalsProvider>
    </UtmProviderSuspense>
  )
}

