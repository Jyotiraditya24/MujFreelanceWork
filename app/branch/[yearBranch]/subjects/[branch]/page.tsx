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
        roadmap: string;
      }[]
    >
  > = {
    PhysicsCycle: {
      first: [
        {
          name: "Engineering Materials & Mechanics",
          image: "/EMM.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1w54A2Vd87DQtFwEoUuy8m0nX9rANb4RA",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1nxBvjZVxG2QL4W_B8skkg4z-VYibmF7n",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6RcutYOUEk_7Je8K-Z3ixz_4TS&si=lrOP6_OjoMmUWZR3",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/lbx5d6voz4tthryaqhmv.png",
        },
        {
          name: "Biology For Engineers",
          image: "/Biology.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1kNkblB1RDznXNJmehDohPTvMGckCHAfY",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/178MPsfJrZA6TSfvdAbdpcjww1KFAeXiL",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6RcuukNazriXq2TZYTyq8D_5uR&si=miKXCJcM_Ao8uesi",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/o4vwis57ft48pox5if44.png",
        },
        {
          name: "Engineering Physics",
          image: "/Physics.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1cdiHPynlmRHmneEPs7P6EV1DB7wzQGsh",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17txyc5ZmKvQepWdVK1TCnJQgxaoou6Ke",
          playlistLink:
            "https://youtube.com/playlist?list=PLuAADu3OvBt495Awir13ZNM-gv5IwLGQy&si=1BSh9BoCqXFGAWei",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/z18vg5vuoqvpp06tqeio.png",
        },
        {
          name: "Computational Mathematics",
          image: "/C&M.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1wE3l2pM-frCwyFS8DaRIW13-XCbmnAmv",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/17PMTzl-T1TOhnpWUxlVwIkY7OGhDM7TO",
          playlistLink:
            "https://youtube.com/playlist?list=PLDh_nHdEw3KPPjngTAmQgcYY8zBA6kkX8&feature=shared",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ubzhdxxlucajxgatioal.png",
        },
        {
          name: "MATLAB",
          image: "/MATLAB.png",
          pyqLink:
            "https://drive.google.com/drive/u/0/folders/1d75bxh_L7JvAKNheNZ3c6YOeqikO1CTB",
          notesLink:
            "https://drive.google.com/drive/u/0/folders/1VVt2FfnbjhGTebrL7ditH--K_BfWMJZa",
          playlistLink:
            "https://youtube.com/playlist?list=PLB_MQaW6Rcut-VLlP29zTzka8hs24bqJ9&si=K7xlUK78s8e2TC3V",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/rvhpz7ufrtmeyawulyxt.png",
        },
      ],
    },
    ChemistryCycle: {
      first: [
        {
          name: "Calculus & Matrices",
          image: "/Calculus&Matrices.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Pr_H4-fb_80Jo6Du96qIIpa6FIVEDTNm",
          notesLink:
            "https://drive.google.com/drive/folders/1sC2cCnpEBGosunT4snNZf2Y8pUj5-uqV",
          playlistLink:
            "https://www.youtube.com/watch?v=p5rBJj5CKCg&list=PLU6SqdYcYsfLPxjd-k-MaoG7qgRQ-2fKc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/ongrvhynp6lryhvrsua5.png",
        },
        {
          name: "Electrical & Electronics System",
          image: "/Electrical&ElectronicsSystem.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1T2KhOCchylff1UyLZ2jyipmGmHtDx1Sd",
          notesLink:
            "https://drive.google.com/drive/folders/1JnVhkK5vg93hTzYq11Cr7NE8seneqdU1",
          playlistLink:
            "https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887269/RoadMaps/bybkj1x0juxncpvtij3m.png",
        },
        {
          name: "Engineering Chemistry",
          image: "/Chemistry.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1pP4zpZHNyD9Zp1peFPRYePpMXvwEWZCV",
          notesLink:
            "https://drive.google.com/drive/folders/1hER7WzvapxKzG4i3pIayLRU3ICTYwjSF",
          playlistLink:
            "https://www.youtube.com/watch?v=XCZakSI-M0I&list=PLLf6O8XdGj03gLo6znlqJbMzgIgt8tSU1",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887268/RoadMaps/oyi0gutsftteevvthtl3.png",
        },
        {
          name: "Problem Solving using Computers",
          image: "/PSUC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/14E0SRP4X0EbccxY9jMo44E7_zlUEARJb",
          notesLink:
            "https://drive.google.com/drive/folders/1nj16NcCCIgI3kmmkT-eisrKg_BKN2yKA",
          playlistLink:
            "https://www.youtube.com/watch?v=aZb0iu4uGwA&t=8493s&pp=ygUdYyBsYW5ndWFnZSBmb3IgYnRlY2ggMXN0IHllYXI%3D",
          roadmap:
            "https://res.cloudinary.com/dndyofbi8/image/upload/v1741887267/RoadMaps/jkguajp0hhuepbv0mnps.png",
        },
        {
          name: "Technical Writing using Computers",
          image: "/TWC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Ka7AT18HKHu_WjIBSoloGI_9VHm-ar5t",
          notesLink:
            "https://drive.google.com/drive/folders/1y-t8alIoH2J7w_f1vBWYTWKcYkpHAIDV",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IT: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1NTLC89Ma4eU6yJSyD9dGymJSoXDYuobo",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image: "/images/csa.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/11NekAzIeiLGry2Am0m5qfuEUtEYgtCRR",
          notesLink:
            "https://drive.google.com/drive/folders/10wjhn9aGixqaIa2BQGGZ-yOAEqcTZKHq",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/images/oop.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/16MvJzoUA1CyivRESx9_4sMbREdIq1WXt",
          notesLink:
            "https://drive.google.com/drive/folders/1RwavgM2xKSw0sD_d-kn8IOOODB1UpKuX",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/images/em4.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/images/os.jpg",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/images/rdbms.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1LDmfiAajgHOsTUq8_xKqDAqGDcJY-0ov",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image: "/images/web-tech.jpg",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1fz3nzYRiFbXVceq-8GUrfP2hHL9vm_dI",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/images/dsa.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1fTlbkE4JHBuJniK8GK0npv5AYaEtRvK3",
          notesLink:
            "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/images/mot.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1cTALhsY_zFL883HTrRJBOhx671LO2jmb",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_IT/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_IT/ACD.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CIS",
          image: "/3_IT/CIS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },

    CSE: {
      second: [
        {
          name: "Economics",
          image: "/images/economics.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1kKgdwQ89xpnIqFrbByKshn8Vip_go4eP",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "EM-3",
          image: "/images/em3.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cryptography",
          image: "/images/economics.jpg",
          notesLink:
            "https://drive.google.com/drive/folders/1HBeISehoI9nR6HTIu5YHuJe0cueRUCh0",
          playlistLink: "",
          roadmap: "",
          pyqLink:
            "https://drive.google.com/drive/folders/1GhfJBD036iUIJBaFPo6JRdy8_n22d2fx",
        },
        {
          name: "Data Com",
          image: "/images/data-com.jpg",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "CSA",
          image: "/images/csa.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1Rz9fB5QEbMz2_jCbapalm8AKAMvYjvx5",
          notesLink:
            "https://drive.google.com/drive/folders/1EV_QwyogySTsELn9FY2M3VUzSzTy7eK6",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "OOP",
          image: "/images/oop.jpg",
          pyqLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          notesLink:
            "https://drive.google.com/drive/folders/1BrbJkAWIKlss0Azby6z3W7QKVMMI-D3R",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "AISC",
          image: "/3_CSE/AISC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design & Analysis of Algorithms",
          image: "/3_CSE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_CSE/ACD.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1Sxocdt8c71BfwJeDJbnz2ABt5FOHLQg2",
          notesLink:
            "https://drive.google.com/drive/folders/1w9HQdLofig_rM3zWnCgY9xlFZtQofucC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_CSE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CSE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "ISS",
          image: "/3_CSE/ISS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Science & ML",
          image: "/3_CSE/DS&ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    CCE: {
      second: [
        {
          name: "Economics",
          image: "/2_CCE/Economics.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1MIviTRv8LkpB0WLz-XmBeLchMY3XxBtE",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image: "/2_CCE/EM3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image: "/2_CCE/DataCom.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1zN95UHvxH31eqNOguKs_x90uvkpf8SX4",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image: "/2_CCE/DDCA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_CCE/OOP.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image: "/2_CCE/EM4.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/2_CCE/OS.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_CCE/RDBMS.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/2_CCE/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_CCE/DSA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management and Organizational Theory",
          image: "/2_CCE/MOT.png",
          pyqLink: "",
          notesLink:
            "https://drive.google.com/drive/folders/1UJblblj9dCg6GMKO5-CZh7rpupZ4xyrt",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Foundation of Data Science",
          image: "/3_CCE/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_CCE/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_CCE/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image: "/3_CCE/ACD.png",
          pyqLink: "",
          roadmap: "",
          notesLink: "",
          playlistLink: "",
        },
        {
          name: "Wirless Communication",
          image: "/3_CCE/WC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Aritificial Intelligence & Machine Learning",
          image: "/3_CCE/AL_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    AIML: {
      second: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/2_AIML/DAA.png",
          pyqLink:
            "https://drive.google.com/drive/folders/12XTPn-zlRQTVsm1qr_Ldouzz8K-7etkX",
          notesLink:
            "https://drive.google.com/drive/folders/187KV-bondddfwbTRSSFItzWwV0kpZJuf",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/2_AIML/OS.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1do4sEQSQj6J1-7u41mfcR2fpgV3TaGCf",
          notesLink:
            "https://drive.google.com/drive/folders/1Uvg_5I8O_qEy8a9viTl-mXXRLxE9RkEB",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Agile Software Development",
          image: "/2_AIML/ASD.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1f8RLDUOrvM_UvJXxB3OBFKv1cRTI8g-G",
          notesLink:
            "https://drive.google.com/drive/folders/1I8iTLlUGsFOHupmEG0wYw2f_aN_KQy1J",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/2_AIML/CC.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1NNK82Zs2_FJtDTP0OLVzuFMhuGWiRIQX",
          notesLink:
            "https://drive.google.com/drive/folders/1TdrgiDukGedsPSjYRxMSwQsZOsamh9dC",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image: "/2_AIML/SP.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1x1swB_m4TRA8caHbYFyMaiO05s4588nD",
          notesLink:
            "https://drive.google.com/drive/folders/1jMrTLdLlR_UPfjZBKBllpo6fajmAFjr9",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image: "/2_AIML/DSA.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1dor9PUWEgRIHD7PRqOJT3m1o4JFhFpiW",
          notesLink:
            "https://drive.google.com/drive/folders/1XlZbicmJD80dPDwCGnINvMDlsnxNUcrA",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image: "/2_AIML/RDBMS.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1eW0n3LgA4_uMULhJD-bUFj8dXI7d8Wis",
          notesLink:
            "https://drive.google.com/drive/folders/1jk_FY3TwT63OUbNOI1tmucZvp4CvQtDZ",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image: "/2_AIML/OOP.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1kG0km0W1nqwj2TUTW8_BNLUJrBKxYdZY",
          notesLink:
            "https://drive.google.com/drive/folders/1b_e32HdEpIxHPFv26rHVzfbHZZNSSAD-",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image: "/2_AIML/MOT.png",
          pyqLink:
            "https://drive.google.com/drive/folders/1A-cszL6CulRBg_a5iam_hTKvfDGY0zc6",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Principles of Artificial Intelligence",
          image: "/2_AIML/PAI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Organization and Architecture",
          image: "/2_AIML/COA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Soft Computing Methods",
          image: "/3_AIML/SCM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_AIML/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_AIML/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Foundation of Data Science",
          image: "/3_AIML/FDS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Game Theory",
          image: "/3_AIML/GT.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image: "/3_AIML/ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Vision",
          image: "/3_AIML/CV.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_AIML/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image: "/3_AIML/DM.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Fundamentals of Automobile Engineering",
          image: "/3_AIML/FAE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    IOT: {
      second: [
        {
          name: "Engineering Mathematics - 3",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039801/2ND%20YEAR%20CARDS/IOT%202nd%20year/bmxpm9mx7vy49ucqagrz.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039772/2ND%20YEAR%20CARDS/IOT%202nd%20year/lz7jymoizrg6gks8fgcl.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039788/2ND%20YEAR%20CARDS/IOT%202nd%20year/gfets8ef5odufipmrnok.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039766/2ND%20YEAR%20CARDS/IOT%202nd%20year/hcdmotjxn7dkjark630a.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Economics",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039747/2ND%20YEAR%20CARDS/IOT%202nd%20year/q1qgvcvbbgk7pxxau3nd.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039801/2ND%20YEAR%20CARDS/IOT%202nd%20year/ta5dnlqd5tzcgavdds1y.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039763/2ND%20YEAR%20CARDS/IOT%202nd%20year/lagfoenluhkkoatmsuie.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039777/2ND%20YEAR%20CARDS/IOT%202nd%20year/npjp2txfop9v78nnw7rt.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039779/2ND%20YEAR%20CARDS/IOT%202nd%20year/fpmat12ullrvzhjju6la.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata and Compiler Design",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039794/2ND%20YEAR%20CARDS/IOT%202nd%20year/wqvq1s13xchfb2riwezf.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "Design and Analysis of Algorithms",
          image: "/3_IOT/DAA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence and Machine Learning",
          image: "/3_IOT/AI_ML.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Sensors and Microcontrollers",
          image: "/3_IOT/S&M.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Architecture & Its Protocols",
          image: "/3_IOT/IOTARCH.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering",
          image: "/3_IOT/SE.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cyber and Information Security",
          image: "/3_IOT/CIS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "IoT Design",
          image: "/3_IOT/IOT_DESIGN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_IOT/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image: "/3_IOT/CN.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
    },
    DSE: {
      second: [
        {
          name: "MFDS-1",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Finance & Econometrics",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039721/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/ievspwctstqf6s6hcaol.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Introduction to Data Analytics",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039721/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/ix4l2hhhydjglowq4ngh.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039745/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/bi8kei1fjtagptcgd0rk.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "MFDS-2",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039737/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/ersz2hykjy1eletyrtz3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Machine Learning",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Design and Analysis of Algorithms",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Mining",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039734/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/xyctdaxnify6lgxu0ogw.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039732/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/edehoo8p5bugsedgbonf.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Analytics and Visualization",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039720/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/hpinbpexpnhsufixadti.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication and Networking",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Image Processing",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039724/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/efajffcnhaqu20dcmgdn.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039728/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/zt0hsllmhon5xgpgibzp.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039727/2ND%20YEAR%20CARDS/2nd%20year%20Data%20Science/y74xxbavtpxi2fmplafm.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
      ],
      third: [
        {
          name: "MFDS-3",
          image: "/3_DSE/MFDS_3.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Deep Learning",
          image: "/3_DSE/DL.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image: "/3_DSE/OS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Natural Language Processing",
          image: "/3_DSE/NLP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image: "/3_DSE/CC.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operations Research",
          image: "/3_DSE/OR.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Artificial Intelligence",
          image: "/3_DSE/AI.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Parallel Programming",
          image: "/3_DSE/PP.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Big Data Analytics",
          image: "/3_DSE/BDA.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Privacy and Security",
          image: "/3_DSE/DPS.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
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
        roadmap: string;
      }[]
      | undefined
  ) => {
    if (!subjects) return <div>No subjects found</div>;
    return (
      <div className="min-h-screen px-4 py-4  bg-cover bg-center mt-12">
        <div
          className="p-6 sm:p-8 md:p-10 text-black 
             grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             gap-6 justify-items-center"
        >
          {subjects.map(
            ({ name, image, pyqLink, notesLink, playlistLink, roadmap }) => (
              <div key={name} className="w-full flex justify-center">
                <CardWithSelect
                  subjectName={name}
                  subjectImage={image}
                  pyqLink={pyqLink}
                  notesLink={notesLink}
                  playlistLink={playlistLink}
                  roadmap={roadmap}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center mt-12">
      {renderSubjects(subjects)}
    </div>
  );
}
