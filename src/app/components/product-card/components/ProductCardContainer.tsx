export default function ProductCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-flex flex-col bg-white border shadow-sm rounded-xl aspect-square w-full h-full group">
      {children}
    </div>
  );
}
