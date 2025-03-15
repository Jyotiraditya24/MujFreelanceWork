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
            "https://www.youtube.com/watch?v=3-4wNORPjXY&list=PLDN15nk5uLiBwwGZKmNzKJIRh4E0G9cfx",
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
          playlistLink: "",
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
            "https://www.youtube.com/watch?v=mDh7KWFBPXQ&list=PLnU_6InKwomFPUn1k5np6NtnoU38TW2PT",
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
            "https://www.youtube.com/watch?v=rWyTk9eubKM&list=PLU6SqdYcYsfLrTna7UuaVfGZYkNo0cpVC",
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
            "https://www.youtube.com/watch?v=7f50sQYjNRA&pp=ygUPbWF0bGFiIG9uZSBzaG90",
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
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039767/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/x7ijseiknycapscpzmwq.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039748/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/omujuk0muekripl81adq.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039724/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/cntatzd61bbbprpnjo2i.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer System Architecture",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039766/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/xpw00zvxlrsrycejb5lf.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039727/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/xpyv5k3rkdquvcgndiji.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039751/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/depxhktcm1esvldgiuku.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039746/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/uvjgordotytevbbtsrkl.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Web Technologies",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039730/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/ylox2auvkxyf4fhi0dhc.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039734/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/id59niw9ubyaknj1qk2e.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039744/2ND%20YEAR%20CARDS/2ND%20YEAR%20IT/awbeyc7hpnuikemr8ti2.png",
          pyqLink: "",
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
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039779/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/bq9naanalq37vlkdlmdu.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "EM-3",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Com",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039802/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/n0ylpdfmykzp7nekhaxy.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },

        {
          name: "CSA",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039799/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/kdotpzcxdr8d7aubv7ge.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "OOP",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039796/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/otcdhtcspvr3yhwtidno.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "EM-4",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039795/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/wgkqhxund994lsg93yar.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "OS",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039794/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/zctkquc2opxuhgjuetzw.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "RDBMS",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039778/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/uw8unrxurnz5re5xfzgl.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "DSA",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039796/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/otcdhtcspvr3yhwtidno.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "MOT",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039783/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/njdo3aajt5cqo1s84taf.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "COA",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039777/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/pmwtmj8ms9zundvnxepc.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "DAA",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039799/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/iu4ddpiavujdusormqno.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },

        {
          name: "High Performance Computing",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039723/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/nazelt7rnwajvm4wivi1.png",

          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cryptography",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039768/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/qxuloxzlryhyqt44ggt4.png",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
          pyqLink:
            "https://drive.google.com/drive/folders/1GhfJBD036iUIJBaFPo6JRdy8_n22d2fx",
        },
        {
          name: "Data Visualization",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039732/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/h4yd1kwyacjgfzrljmsw.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039784/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/yfarxnnni9s976n7zi8x.png",
          pyqLink: "",
          notesLink: "",
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
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039799/2ND%20YEAR%20CARDS/2nd%20Year%20cse%20core/iu4ddpiavujdusormqno.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Automata & Compiler Design",
          image: "/3_CSE/ACD.png",
          pyqLink: "",
          notesLink: "",
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
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039728/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/wnh7b3bo2ossrbur7e9x.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Communication",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Digital Design and Computer Architecture",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039775/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/bvxu60kb5iccu8tdnnr7.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039779/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/uabfwo3oebrpi9idfksg.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 3",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039739/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/jbpi3jtgw51hyfpmbxtk.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Engineering Mathematics - 4",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039738/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/rzu0ddzwt8skwvpyujoy.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039774/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/rosjxri90tngcdee0jpe.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039728/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/w3gfsicgdkblmyqloduk.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Networks",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039794/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/jexribwpnyop9lum7cx2.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://img.freepik.com/free-vector/coming-soon-web-page-template_23-2147493769.jpg?t=st=1742051843~exp=1742055443~hmac=c9550b2a759a6d7a132e416bc84e5bbb966b7a35d9230f365e8fb4cb9dccd809&w=1380",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management and Organizational Theory",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039772/2ND%20YEAR%20CARDS/2ND%20YEAR%20CCE/rl5nthjialpgxo0cughr.png",
          pyqLink: "",
          notesLink: "",
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
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039723/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/o9z0vwcaq00l5dsodkr7.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Operating Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039737/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/f1kromlzzatcvp6csk1l.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Cloud Computing",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039717/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/xzawuqmy7sx0nr0elzph.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Statistics and Probability",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039716/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/hkpcxfzgns8dwtczmjo8.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Software Engineering & Product Management",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039716/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/lnror4xq5ck9im62spqm.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Data Structures and Algorithms",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039728/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/pupxms3zn6bc8nuzrlbh.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Agile Software Development",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039718/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/vadsmyfdnseuetpyp2cn.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Relational Database Management Systems",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039723/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/vdtk6bwsaogqcicxz9kf.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Object-Oriented Programming",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039722/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/rqbthef0hks1fpk8znsp.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Management of Technology",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039718/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/zcfrqcqsr4jcklux821j.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Principles of Artificial Intelligence",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039719/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/kq5uvpqg7zpjpokzv0yu.png",
          pyqLink: "",
          notesLink: "",
          playlistLink: "",
          roadmap: "",
        },
        {
          name: "Computer Organization and Architecture",
          image:
            "https://res.cloudinary.com/ddjnudeq0/image/upload/v1742039720/2ND%20YEAR%20CARDS/AIML%202ND%20YEAR/greszjoas8vswyxcbrzn.png",
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
