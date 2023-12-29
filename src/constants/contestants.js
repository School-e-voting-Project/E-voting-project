//import the images you want to use
//Check Images.jsx (assets folder) for the names of the images exported
import { img1, img2, img3} from "@/assets/Images";

const contestants = [
  //Object between this comment and the one below is the basic structure of data

  {
    office: "president",
    contestants: [
      {
        name: "John Doe",
        img: img2,
        party: "PDP",
      },
      {
        name: "Evans Chuks",
        img: img1,
        party: "APC",
      },
      {
        name: "Bright White",
        img: img3,
        party: "NNPP",
      },
      // Add more contestants for the president position if needed
    ],
  },
  //End of structure.......

  {
    office: "vice-president",
    contestants: [
      {
        name: "Alex Smith",
        img: img1,
        party: "APC",
      },
      {
        name: "Chris Johnson",
        img: img2,
        party: "PDP",
      },
      {
        name: "Emma White",
        img: img3,
        party: "NNPP",
      },
      // Add more contestants for the vice-president position if needed
    ],
  },
  {
    office: "House of Representative",
    contestants: [
      {
        name: "Sophia Brown",
        img: img3,
        party: "NNPP",
      },
      {
        name: "Elizabeth Akindele",
        img: img2,
        party: "PDP",
      },
      // Add more contestants for the public relations officer position if needed
    ],
  },
  {
    office: "Local Government Chairman",
    contestants: [
      {
        name: "Michael Green",
        img: img1,
        party: "APC",
      },
      {
        name: "Olivia Davis",
        img: img2,
        party: "PDP",
      },
      // Add more contestants for the general secretary position if needed
    ],
  },
  // Add more positions as necessary
];

// Create a function to generate the initial state based on the contestants data
export const generateInitialState = () => {
  const initialState = {};
  contestants.forEach(({ office }) => {
    initialState[office] = "";
  });
  return initialState;
};

export default contestants;
