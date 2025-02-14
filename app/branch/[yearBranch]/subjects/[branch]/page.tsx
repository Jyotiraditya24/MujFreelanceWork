export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  // Await the params Promise to extract branch and yearBranch
  const { branch, yearBranch } = await params;

  // Subjects grouped by branch and year
  const subjectsYearWise: Record<string, Record<string, string[]>> = {
    IT: {
      second: ["Economics", "Data Com", "CSA", "OOP", "RDBMS"],
      third: ["FDS", "SE", "DAA", "CN", "AI/ML", "ACD", "CIS"],
      fourth: ["Economics", "Data Com", "CSA", "OOP"],
    },
    CSE: {
      second: [
        "Economics",
        "EM-3",
        "Data Com",
        "CSA",
        "OOP",
        "EM-4",
        "OS",
        "RDBMS",
      ],
      third: ["AISC", "DAA", "ACD", "CN", "SE", "ISS", "Data Science & ML"],
      fourth: ["Economics", "Data Com", "CSA", "OOP"],
    },
    PhysicsCycle: {
      first: ["EMM", "EP", "CM", "BFE", "MATLAB", "COI", "UHV", "EVS"],
    },
    ChemistryCycle: {
      first: ["EES", "CAM", "EC", "PSUC", "CAI", "TWC"],
    },
    DSE: {
      second: [
        "MFDS-1",
        "Finance & Econometrics",
        "Introduction to data analytics",
        "OOP",
        "DSA",
        "CSA",
        "MFDS-2",
        "RDBMS",
        "ML",
        "DAA",
        "DCN",
      ],
      third: [
        "MFDS-3",
        "DL",
        "OS",
        "NLP",
        "Cloud Computing",
        "Operations Research",
        "AI",
        "Parallel Programming",
        "Big Data Analytics",
        "Data Privacy and Security",
      ],
    },
    CCE: {
      second: [
        "Economics",
        "EM-3",
        "Data Com",
        "DDCA",
        "OOP",
        "EM-4",
        "OS",
        "RDBMS",
        "CN",
      ],
      third: [
        "SE",
        "DAA",
        "FDS",
        "CIS",
        "AI/ML",
        "Wireless Communication",
        "ACD",
      ],
    },
  };

  // Get subjects based on branch and year
  const subjects = subjectsYearWise[branch]?.[yearBranch];

  // Reusable function to render subjects
  const renderSubjects = (subjects: string[] | undefined) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="flex flex-col gap-y-6 mt-20 p-10 text-black">
        {subjects.map((subject) => (
          <div key={subject}>{subject}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {renderSubjects(subjects)}
    </div>
  );
}
