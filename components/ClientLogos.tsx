
import { cn } from "@/lib/utils";
import { clientLogos } from "@/data";

interface ClientLogosProps {
  title?: string;
  logos?: { name: string; src: string; }[];
  className?: string;
}

const ClientLogos = ({ title = "Trusted by Leading Companies", logos = clientLogos, className }: ClientLogosProps) => {
  return (
    <section className={cn("py-16 bg-gradient-to-b from-white to-gray-50", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 bg-gray-800 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-1"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
