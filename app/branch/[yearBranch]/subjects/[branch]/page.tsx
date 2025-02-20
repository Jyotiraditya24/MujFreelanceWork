import CardWithSelect from "@/components/CardSelectComponent";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ branch: string; yearBranch: string }>;
}) {
  const { branch, yearBranch } = await params;

  const subjectsYearWise: Record<
    string,
    Record<
      string,
      {
        name: string;
        image: string;
        pyqLink: string;
        notesLink: string;
        playlistLink: string;
      }[]
    >
  > = {
    PhysicsCycle: {
      first: [
        {
          name: "Engineering Materials & Mechanics",
          image: "/EMM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Biology For Engineers",
          image: "/BFE.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Engineering Physics",
          image: "/EP.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Computational Mathematics",
          image: "/CM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "MATLAB",
          image: "/MATLAB.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1d75bxh_L7JvAKNheNZ3c6YOeqikO1CTB?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1VVt2FfnbjhGTebrL7ditH--K_BfWMJZa?usp=drive_link",
          playlistLink: "",
        },
      ],
    },
    ChemistryCycle: {
      first: [
        {
          name: "Calculus & Matrices",
          image: "/EMM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Electrical & Electronics System",
          image: "/EMM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Engineering Chemistry",
          image: "/EMM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Problem Solving using Computers",
          image: "/EMM.webp",
          pyqLink:
            "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Technical Writing Clinic",
          image: "/images/technical_writing.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1Ka7AT18HKHu_WjIBSoloGI_9VHm-ar5t?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1y-t8alIoH2J7w_f1vBWYTWKcYkpHAIDV?usp=drive_link",
          playlistLink: "",
        },
      ],
    },
    IT: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Com",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CSA",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "OOP",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "RDBMS",
          image: "/images/rdbms.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "FDS",
          image: "/images/fds.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "SE",
          image: "/images/se.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "DAA",
          image: "/images/daa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CN",
          image: "/images/cn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "AI/ML",
          image: "/images/ai-ml.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ACD",
          image: "/images/acd.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CIS",
          image: "/images/cis.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
    },
    CSE: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "EM-3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Com",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CSA",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "OOP",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "AISC",
          image: "/images/aisc.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "DAA",
          image: "/images/daa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ACD",
          image: "/images/acd.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CN",
          image: "/images/cn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "SE",
          image: "/images/se.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ISS",
          image: "/images/iss.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Science & ML",
          image: "/images/dsml.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
    },
  };
  console.log(yearBranch + " " + branch);
  const subjects = subjectsYearWise[branch]?.[yearBranch];

  const renderSubjects = (
    subjects:
      | {
          name: string;
          image: string;
          pyqLink: string;
          notesLink: string;
          playlistLink: string;
        }[]
      | undefined
  ) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="flex flex-row flex-wrap gap-y-6 mt-20 p-10 text-black justify-between">
        {subjects.map(({ name, image, pyqLink, notesLink, playlistLink }) => (
          <CardWithSelect
            key={name}
            subjectName={name}
            subjectImage={image}
            pyqLink={pyqLink}
            notesLink={notesLink}
            playlistLink={playlistLink}
          />
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
