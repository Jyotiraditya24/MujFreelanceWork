export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  // Await the params Promise to extract branch and yearBranch
  const { branch, yearBranch } = await params;

  // Initialize the Map with subjects
  const ItSubjectsYearWise = new Map<string, string[]>([
    ["second", ["Economics", "Data Com", "CSA", "OOP", "RDBMS"]],
    ["third", ["FDS", "SE", "DAA", "CN", "AI/ML", "ACD", "CIS"]],
    ["fourth", ["Economics", "Data Com", "CSA", "OOP"]],
  ]);

  // Retrieve the subjects for the specified yearBranch
  const subjects = ItSubjectsYearWise.get(yearBranch);

  console.log(subjects);

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {branch === "IT" && subjects && (
        <div className="flex flex-col gap-y-6 mt-20 p-10 text-black">
          {subjects.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
