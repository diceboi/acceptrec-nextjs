const BlogHero = ({ title, subtitle }) => {
      
    return (
      <div className="h-[40vh] mt-96">
        <div className="flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 m-auto h-full bg-[url('/truck-driver.avif')]">
            <h1 className="text-6xl lg:text-6xl font-black tracking-tighter">{title}</h1>
            <p className="text-sm lg:text-lg font-medium tracking-widest uppercase">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default BlogHero;