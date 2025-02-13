import AnimatedHeader from "@/components/AnimatedHeader";
import { FocusCards } from "@/components/ui/focus-cards";

export default async function ({
  params,
}: {
  params: Promise<{ yearBranch: string }>;
}) {
  const { yearBranch } = await params;
  const cards = [
    {
      title: "Information Technology",
      src: "/IT_Branch.png",
    },
    {
      title: "Data Science",
      src: "/DataScienceBranch.png",
    },
    {
      title: "Computer Science",
      src: "/CSE_CORE_Branch.png",
    },
    {
      title: "Camping is for pros",
      src: "/IOT_Branch.png",
    },
    {
      title: "Computer & Communication Engineering",
      src: "/CCE_Branch.png",
    },
  ];
  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-y-6 mt-20 p-10">
        <AnimatedHeader title={yearBranch ?? ""} />
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}
