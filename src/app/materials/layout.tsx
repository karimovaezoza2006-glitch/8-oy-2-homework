import MaterialPages from "../../../components/materials/MaterailPages";
import MaterialCategory from "../../../components/materials/MaterialCategory";

export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F7FAFC] py-6">
      <div className="max-w-[1440px] mx-auto px-6">
     
        <MaterialCategory/>
        <MaterialPages />
        {children}
      </div>
    </section>
  );
}
