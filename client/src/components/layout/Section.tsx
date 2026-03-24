import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  background?: "white" | "gray";
  className?: string;
}

export default function Section({ children, background = "white", className }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 px-4 md:px-6",
        background === "gray" ? "bg-gray-50" : "bg-white",
        className
      )}
    >
      {children}
    </section>
  );
}
