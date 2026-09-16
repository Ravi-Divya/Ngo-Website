interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="py-6 md:py-8 px-4 bg-gradient-to-r from-[#0B1E36] via-[#16385C] to-[#0B1E36] border-b border-[#16385C]/60 shadow-xs flex items-center justify-center">
      <div className="container mx-auto text-center relative z-10 max-w-4xl flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight text-center">
            {title}
          </h1>
          {/* Small Blue Line Under Heading in the Middle */}
          <div className="w-12 md:w-14 h-1 bg-sky-400 mx-auto mt-2 rounded-full shadow-xs"></div>
        </div>
      </div>
    </div>
  );
}