import { img1, img2, img3, img4, img5, img6, img7 } from "@/assets/images";

const contestants = [
  {
    office: "president",
    contestants: [
      {
        name: "John Doe",
        img: img2,
        nickname: "JD",
      },
      {
        name: "Jane Doe",
        img: img3,
        nickname: "Jane",
      },
      // Add more contestants for the president position if needed
    ],
  },
  {
    office: "vice-president",
    contestants: [
      {
        name: "Alex Smith",
        img: img4,
        nickname: "Alex",
      },
      {
        name: "Chris Johnson",
        img: img5,
        nickname: "Chris",
      },
      {
        name: "Emma White",
        img: img6,
        nickname: "Emma",
      },
      // Add more contestants for the vice-president position if needed
    ],
  },
  {
    office: "public-relations-officer",
    contestants: [
      {
        name: "Sophia Brown",
        img: img7,
        nickname: "Sophia",
      },
      // Add more contestants for the public relations officer position if needed
    ],
  },
  {
    office: "general-secretary",
    contestants: [
      {
        name: "Michael Green",
        img: img1,
        nickname: "Mike",
      },
      {
        name: "Olivia Davis",
        img: img2,
        nickname: "Olivia",
      },
      // Add more contestants for the general secretary position if needed
    ],
  },
  // Add more positions as necessary
];

export default contestants;
