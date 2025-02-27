import './globals.css'
import { Raleway } from 'next/font/google'
import MainNav from './components/mainnav'
import { ApolloWrapper } from './lib/apollo-wrapper'
import Footer from './components/footer'
import MainCTA from './components/MainCTA'
import Cookies from './components/Cookies'
import Script from 'next/script'
import FacebookMsg from './components/FacebookMsg'
import ChatMessage from './components/ChatMessage'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Highest Rated Recruitment Agency in Leicester | Driving and Warehouse Specialists',
  },
  description: 'As one of the best recruitment agencies in Leicester, we specialise in Warehouse Work, Driving Work, and Technical Work. Find your ideal job or hire top talent with us today!',
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
        strategy='beforeInteractive'
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
        
      </head>
      <body className={raleway.className} id='__next'>
        <Script
        src='https://cdn.botpress.cloud/webchat/v1/inject.js'
        ></Script>
        <Script
        src='https://mediafiles.botpress.cloud/5c404966-a856-4ccc-a11f-d1ae4eb4d233/webchat/config.js'
        ></Script>
        
          <ApolloWrapper>
            <ChatMessage />
            <Cookies />
            <MainNav/>
            {children}
            <MainCTA/>
            <Footer/>
          </ApolloWrapper>
      </body>
    </html>
  )
}