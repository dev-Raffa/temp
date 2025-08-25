'use client';

import { useUtmParams } from "@/context/utm-context";
import { LinkProps } from "next/link";
import { useState, useEffect } from "react";

interface UtmLinkProps extends LinkProps {
  children: React.ReactNode;
  [key: string]: any; 
}

export const UtmLink = ({ href, children, ...props }: UtmLinkProps) => {
  const { utmSource, utmMedium, utmCampaign, utmContent, utmId } = useUtmParams();
  const [finalHref, setFinalHref] = useState(href.toString());

  useEffect(() => {
    if (!href) return;

    const urlObj = new URL(href.toString(), window.location.origin);
    if (utmSource) urlObj.searchParams.set("utm_source", utmSource);
    if (utmMedium) urlObj.searchParams.set("utm_medium", utmMedium);
    if (utmCampaign) urlObj.searchParams.set("utm_campaign", utmCampaign);
    if (utmContent) urlObj.searchParams.set("utm_content", utmContent);
    if (utmId) urlObj.searchParams.set("utm_id", utmId);

    setFinalHref(urlObj.toString());

  }, [href, utmSource, utmMedium, utmCampaign, utmContent, utmId]);

  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
};