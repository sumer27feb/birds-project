import React, { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClick = (content) => {
    let info;
    switch (content) {
      case "About":
        info =
          "This is a Bird classification model which is trained on an augmented dataset of 200 images each of 525 birds species. An F1 score in excess of 97.5% was achieved. Drop only JPG files!";
        break;
      case "Creator":
        info = "Sumer Dev Singh";
        break;
      case "Contact":
        info =
          "E-Mail : sumerdevsingh@gmail.com \n GitHub Repo link:\n wuxygweiugwiuecugwk";
        break;
      default:
        info = "";
    }
    setModalContent(info);
    setShowModal(true);
  };

  return (
    <div className="bg-green-500 text-white p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">
          <a href="#" className="hover:text-yellow-300">
            Predict
          </a>
        </div>
        <div className="space-x-4">
          <a
            onClick={() => handleClick("About")}
            className="hover:text-yellow-300"
          >
            About
          </a>
          <a
            onClick={() => handleClick("Creator")}
            className="hover:text-yellow-300"
          >
            Creator
          </a>
          <a
            onClick={() => handleClick("Contact")}
            className="hover:text-yellow-300"
          >
            Contact
          </a>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-green-500 text-white p-5 rounded shadow-lg w-1/3 flex flex-col items-center">
            <p className="">{modalContent}</p>
            <button
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-auto"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
