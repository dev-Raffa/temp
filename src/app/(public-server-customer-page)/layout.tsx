import FacebookPixel from "@/components/shared/facebook-pixel";

export default function PublicServerCustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <FacebookPixel pixelId="1124010946274670" />
    </>
  )
}