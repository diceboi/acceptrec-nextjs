interface ThemeHeroProps {
  title: string;     // Specify the type of title
  subtitle: string; 
  className: string; // Specify the type of subtitle
}

const ThemeHero:React.FC<ThemeHeroProps> = ({ title, subtitle, className }) => {
      
    return (
      <div className={className}>
        <div className="flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 m-auto h-full">
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter">{title}</h1>
            <p className="text-sm lg:text-lg font-medium tracking-widest uppercase">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default ThemeHero;