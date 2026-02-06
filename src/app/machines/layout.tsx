import MachineCategories from "../../../components/machines/MachineCategories";
import MachinePages from "../../../components/machines/MachinePages";


export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F7FAFC] py-6">
      <div className="max-w-[1440px] mx-auto px-6">
     
       <MachineCategories/>
        <MachinePages />
        {children}
      </div>
    </section>
  );
}
