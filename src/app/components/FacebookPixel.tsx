'use client';
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const PIXEL_ID = '1241371224409965';

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Dispara PageView a cada navegação interna (apenas se não for a primeira carga)
    if (typeof window !== 'undefined' && typeof window.fbq === "function" && isInitialized.current) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        onLoad={() => {
          // Marca como inicializado e dispara o primeiro PageView
          isInitialized.current = true;
          if (typeof window !== 'undefined' && typeof window.fbq === "function") {
            window.fbq('track', 'PageView');
          }
        }}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `
        }}
      />
      <noscript>
        <img
          alt="facebook-pixel"
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
