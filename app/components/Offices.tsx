import Link from 'next/link';
import OfficeTile from './OfficeTile'

interface Pages {
    slug: string;
    title: string;
    id: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      }
      
    }
  }

  interface OfficesProps {
    pages?: {
      edges: {
        node: Pages;
      }[];
    
    };
    classname: string;
  }

  const Offices: React.FC<OfficesProps> = ({ pages, classname }) => {

    if (!pages) {
        return null; // Handle the case where pages is undefined or null
      }
      
  return (
    <> 
        <section className={classname}>                  
            {pages.edges.map(({ node }) => (
                <Link href={`/offices/${node.slug}`} key={node.id}>
                <OfficeTile name={node.title} image={node.featuredImage.node.sourceUrl} />
                </Link>
            ))}  
        </section>
    </>
  )
}

export default Offices;
