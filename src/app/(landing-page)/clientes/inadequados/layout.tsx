'use client'

import { UtmProviderSuspense } from '@/context/utm-context'

interface UnsuitableCustomerLayoutProps {
  children: React.ReactNode
}

export default function UnsuitableCustomerLayout({ children }: UnsuitableCustomerLayoutProps) {
  return (
    <UtmProviderSuspense>
      {children}
    </UtmProviderSuspense>
  )
}