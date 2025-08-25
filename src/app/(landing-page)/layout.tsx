import FacebookPixel from "@/components/shared/facebook-pixel"

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <FacebookPixel pixelId="695701959550843" />
    </>
  )
}