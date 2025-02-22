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
          image: "/EMM.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Biology For Engineers",
          image: "/Biology.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Engineering Physics",
          image: "/Physics.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Computational Mathematics",
          image: "/C&M.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "MATLAB",
          image: "/MATLAB.png",
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
          image: "/C&M.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Electrical & Electronics System",
          image: "/EMM.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Engineering Chemistry",
          image: "/Chemistry.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Problem Solving using Computers",
          image: "/PSUC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb?usp=drive_link",
          notesLink:
            "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA?usp=drive_link",
          playlistLink: "",
        },
        {
          name: "Technical Writing Clinic",
          image: "/TWC.png",
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
          name: "Engineering Mathematics - 3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Communication",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer System Architecture",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/images/em4.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operating Systems",
          image: "/images/os.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/images/rdbms.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Web Technologies",
          image: "/images/web-tech.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/images/dsa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Management of Technology",
          image: "/images/mot.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "FDS",
          image: "/3_IT/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "SE",
          image: "/3_IT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "DAA",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CN",
          image: "/3_IT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "AI/ML",
          image: "/3_IT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ACD",
          image: "/3_IT/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CIS",
          image: "/3_IT/CIS.png",
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
          image: "/3_CSE/AISC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "DAA",
          image: "/3_CSE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ACD",
          image: "/3_CSE/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "CN",
          image: "/3_CSE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "SE",
          image: "/3_CSE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "ISS",
          image: "/3_CSE/ISS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Science & ML",
          image: "/3_CSE/DS&ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
    },
    CCE: {
      second: [
        {
          name: "Economics",
          image: "/2_CCE/Economics.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image: "/2_CCE/EM3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Communication",
          image: "/2_CCE/DataCom.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "/2_CCE/DDCA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_CCE/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/2_CCE/EM4.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operating Systems",
          image: "/2_CCE/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_CCE/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Networks",
          image: "/2_CCE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_CCE/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Management and Organizational Theory",
          image: "/2_CCE/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_CCE/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CCE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/3_CCE/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Wirless Communication",
          image: "/3_CCE/WC.png",
          pyqLink: "",
          notesLink: "",  
          playlistLink: "",
        },
        {
          name: "Aritificial Intelligence & Machine Learning",
          image: "/3_CCE/AL_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "", 
        }
      ],
    },
    AIML: {
      second: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/2_AIML/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operating Systems",
          image: "/2_AIML/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Agile Software Development",
          image: "/2_AIML/ASD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Cloud Computing",
          image: "/2_AIML/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Statistics and Probability",
          image: "/2_AIML/SP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_AIML/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_AIML/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_AIML/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Management of Technology",
          image: "/2_AIML/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Principles of Artificial Intelligence",
          image: "/2_AIML/PAI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Organization and Architecture",
          image: "/2_AIML/COA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "Soft Computing Methods",
          image: "/3_AIML/SCM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_AIML/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Networks",
          image: "/3_AIML/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Foundation of Data Science",
          image: "/3_AIML/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Game Theory",
          image: "/3_AIML/GT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Machine Learning",
          image: "/3_AIML/ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Vision",
          image: "/3_AIML/CV.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_AIML/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Mining",
          image: "/3_AIML/DM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Fundamentals of Automobile Engineering",
          image: "/3_AIML/FAE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
    },
    IOT: {
      second: [
        {
          name: "Engineering Mathematics - 3",
          image: "/2_AIML/EM3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "/2_AIML/DDCA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Communication",
          image: "/2_AIML/DataCom.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_AIML/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_AIML/OOP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Economics",
          image: "/2_AIML/Economics.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/2_AIML/EM4.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operating Systems",
          image: "/2_AIML/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_AIML/RDBMS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Web Technologies",
          image: "/2_AIML/WebTech.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Management of Technology",
          image: "/2_AIML/MOT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/2_AIML/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_IOT/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IOT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Sensors and Microcontrollers",
          image: "/3_IOT/S&M.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "IoT Architecture & Its Protocols",
          image: "/3_IOT/IOTARCH.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IOT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Cyber and Information Security",
          image: "/3_IOT/CIS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "IoT Design",
          image: "/3_IOT/IOT_DESIGN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Deep Learning",
          image: "/3_IOT/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IOT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
    },
    DSE: {
      second: [
        {
          name: "MFDS-1",
          image: "/images/mfds1.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Finance & Econometrics",
          image: "/images/finance-econometrics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Introduction to Data Analytics",
          image: "/images/intro-data-analytics.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/images/oop.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/images/dsa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer System Architecture",
          image: "/images/csa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "MFDS-2",
          image: "/images/mfds2.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/images/rdbms.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Machine Learning",
          image: "/images/ml.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/images/daa.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Management of Technology",
          image: "/images/mot.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Mining",
          image: "/images/data-mining.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Cloud Computing",
          image: "/images/cloud-computing.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Analytics and Visualization",
          image: "/images/data-analytics-visualization.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Communication and Networking",
          image: "/images/dcn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Digital Image Processing",
          image: "/images/dip.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Computer Networks",
          image: "/images/cn.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Statistics and Probability",
          image: "/images/stats-probability.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
      ],
      third: [
        {
          name: "MFDS-3",
          image: "/3_DSE/MFDS_3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Deep Learning",
          image: "/3_DSE/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operating Systems",
          image: "/3_DSE/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_DSE/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Cloud Computing",
          image: "/3_DSE/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Operations Research",
          image: "/3_DSE/OR.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Artificial Intelligence",
          image: "/3_DSE/AI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Parallel Programming",
          image: "/3_DSE/PP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Big Data Analytics",
          image: "/3_DSE/BDA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Data Privacy and Security",
          image: "/3_DSE/DPS.png",
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
