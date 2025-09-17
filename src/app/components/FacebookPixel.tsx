'use client';
import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

const PIXEL_ID = '1241371224409965';

function FacebookPixelContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Dispara PageView a cada navegação interna (apenas se não for a primeira carga)
    if (typeof window !== 'undefined' && typeof window.fbq === "function" && isInitialized.current) {
      console.log('Facebook Pixel: Tracking PageView for navigation');
      window.fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  const handleScriptLoad = () => {
    console.log('Facebook Pixel: Script loaded successfully');
    isInitialized.current = true;
    
    // Aguarda um pouco para garantir que o fbq está disponível
    setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.fbq === "function") {
        console.log('Facebook Pixel: Initializing and tracking PageView');
        window.fbq('track', 'PageView');
      } else {
        console.error('Facebook Pixel: fbq function not available');
      }
    }, 100);
  };

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="beforeInteractive"
        onLoad={handleScriptLoad}
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
            
            console.log('Facebook Pixel: Initializing with ID ${PIXEL_ID}');
            fbq('init', '${PIXEL_ID}');
            console.log('Facebook Pixel: Initialized successfully');
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

export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelContent />
    </Suspense>
  );
}
