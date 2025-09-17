'use client';

const PIXEL_ID = '1241371224409965';

export default function FacebookPixelHead() {
  return (
    <>
      {/* Facebook Pixel Code - Head Version */}
      <script
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
            
            console.log('Facebook Pixel Head: Initializing with ID ${PIXEL_ID}');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
            console.log('Facebook Pixel Head: Initialized and tracked PageView');
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
