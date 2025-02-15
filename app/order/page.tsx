import CardWithSelect from "@/components/CardSelectComponeny";
import { SelectDemo } from "@/components/SelectDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";

export default function OrderFood() {
  return (
    <div className="mt-20 mx-auto flex flex-col items-center gap-y-4 ">
      <h1 className="font-bold text-3xl nunito-className">Our Sponsors</h1>
      <WobbleCardDemo />
    </div>
  );
}
