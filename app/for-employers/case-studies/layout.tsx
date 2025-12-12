import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | AcceptRec - Recruitment Success Stories',
  description: 'Discover how AcceptRec has helped companies achieve their recruitment goals through innovative solutions and dedicated partnerships. Explore our portfolio of successful recruitment campaigns.',
  alternates: {
    canonical: '/for-employers/case-studies'
  },
  openGraph: {
    title: 'Case Studies | AcceptRec',
    description: 'Discover how AcceptRec has helped companies achieve their recruitment goals through innovative solutions and dedicated partnerships.',
    type: 'website',
  }
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
