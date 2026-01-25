import './globals.css'
import { Raleway } from 'next/font/google'
import MainNav from './components/mainnav'
import FixedReviewBar from './components/FixedReviewBar'
import { ApolloWrapper } from './lib/apollo-wrapper'
import Footer from './components/footer'
import MainCTA from './components/MainCTA'
import Cookies from './components/Cookies'
import Script from 'next/script'
import FacebookMsg from './components/FacebookMsg'
import ChatMessage from './components/ChatMessage'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://acceptrec.co.uk'),
  title: {
    default: 'Top Recruitment Agency in Leicester - Accept Recruitment',
  },
  description: "Leading recruitment agency in Leicester, Coventry & Tamworth. Specialising in Industrial, Warehouse & Driving roles. Find jobs or hire talent!",
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W6M20W55E1"
        />
        <Script
          id='Analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html:
              `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-W6M20W55E1');`
          }}
        >
        </Script>
        <Script
          id='Hotjar'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html:
              `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3698579,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
          }}>

        </Script>

        <Script
          src="https://t.contentsquare.net/uxa/c58cf60508cff.js"
          strategy="afterInteractive"
        />

      </head>
      <body className={raleway.className} id='__next'>
        <Script src="https://widget.superchat.de/snippet.js?applicationKey=WCOzVqDdxywB4oPRE7ag28MkpX" referrerPolicy="no-referrer-when-downgrade"></Script>
        <ApolloWrapper>
          {/*<ChatMessage />*/}
          <Cookies />
          <MainNav />
          <FixedReviewBar />
          {children}
          <MainCTA />
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}