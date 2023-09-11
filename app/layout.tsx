import './globals.css'
import { Raleway } from 'next/font/google'
import MainNav from './components/mainnav'
import { ApolloWrapper } from './lib/apollo-wrapper'
import Footer from './components/footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Recruitment Agency in Leicester | Driving and Warehouse Specialists',
  description: 'Accept Recruitment are one of the best recruitment agencies in Leicester. As a specialist driving and industrial agency we are able to react quickly to client demands. with jobs in leicester, jobs in leeds and jobs in bristol we can cater for all your job needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`overflow-x-hidden ${raleway.className}`}>
          <ApolloWrapper>
            <MainNav/>
            {children}
            <Footer/>
          </ApolloWrapper>
      </body>
    </html>
  )
}