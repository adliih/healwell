export default function ProductCardInformationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-2 flex flex-col">{children}</div>;
}
