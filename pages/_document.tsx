import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NetReachGo",
              url: "https://www.netreachgo.com",
              description: "Autonomous AI agents, premium web development, and marketing automation for businesses.",
              email: "info@netreachgo.com",
              telephone: "+1 888 831 7318",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "New York",
                  addressRegion: "NY",
                  addressCountry: "US"
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Florida",
                  addressRegion: "FL",
                  addressCountry: "US"
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Panama City",
                  addressCountry: "PA"
                }
              ],
              sameAs: [
                "https://www.linkedin.com/company/netreachgo",
                "https://www.instagram.com/netreachgo"
              ]
            })
          }}
        />

        {/* LocalBusiness Schema for Panama */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "NetReachGo Panama",
              url: "https://www.netreachgo.com",
              telephone: "+507 6323 0903",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Panama City",
                addressCountry: "PA"
              },
              description: "AI agents, web development, and marketing automation in Panama."
            })
          }}
        />

        {/* Impact Tracking */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A7595331-cdcc-47ae-ab25-5713746bf73a1.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');`
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
