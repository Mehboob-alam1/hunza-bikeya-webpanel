import { useState, useRef } from "react";
import { TbCameraPlus } from "react-icons/tb";
import Greeting from "../components/Greetings/Greeting";
import { MdDone } from "react-icons/md";
import { AiFillWarning } from "react-icons/ai";
import { ref as ref2 } from 'firebase/database'
import { db, storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ProfileDropDown from "../components/ProfileDropDown/ProfileDropDown";
import { set } from "firebase/database";
import { uid } from 'uid';

const OfferBanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showError, setShowError] = useState(false);
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  let bannerId = uid(12)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      file.size <= 5 * 1024 * 1024 &&
      file.type.startsWith("image/")
    ) {
      setImage(file);
      displayImage(file);
      setShowDialog(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowDialog(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file &&
      file.size <= 5 * 1024 * 1024 &&
      file.type.startsWith("image/")
    ) {
      displayImage(file);
      setShowDialog(true);
      setShowError(false);
    } else {
      // Handle error, display a message, etc.
      setShowError(true);
      setShowDialog(false);
    }
  };

  const displayImage = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCloseDialog = () => {
    const storageRef = ref(storage, `documents/admin/${Date.now()}${image.name}`);
    uploadBytes(storageRef, image)
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => {
            setUrl(url)
            set(ref2(db, `Banners/` + bannerId), {
              BannerImage: url,
              imageId: bannerId
            })
          })
        setShowDialog(false);
        setImage("");
        setSelectedImage(null)
      })
      .catch((error) => {
        console.log(error.message, "error getting in the uploading..");
      });
  };



  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="flex justify-between">
      <div className="w-[100%] bg-[#F7F7F8] p-6 min-h-[100vh]">
        <Greeting />
        <h5 className="font-bold text-xl pt-5 pl-[10%] pb-4">
          Add Deal card images
        </h5>
        <div
          className="flex items-center justify-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-[80%] h-64 border-2 border-[#0CAA0D] border-dashed rounded-lg cursor-pointer bg-[#FFFFFF] shadow-lg dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-[70%] h-[100%] object-fill p-2 rounded-[20px]"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className="w-[8rem] h-[8rem] bg-[#0caa0d4f] rounded-full flex justify-center items-center">
                  <TbCameraPlus className="text-5xl" />
                </div>
                <p className="mb-2 text-lg text-[#0B0A0A] dark:text-gray-400 font-bold">
                  Upload your Special Deal Banner here
                </p>
                <p className="text-lg text-[#DAD6D4] dark:text-gray-400">
                  Max file size 5 MB
                </p>
              </div>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-wide bg-[#4E4E4E] hover:bg-[#5E5E5E] text-white font-bold capitalize mt-12"
            onClick={handleBrowseClick}
          >
            Browse Images
          </button>
        </div>
        {showDialog && (
          <div className="flex items-center justify-center mt-10 ">
            <div className="bg-white p-2 rounded flex items-center shadow-lg gap-3">
              <div className="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#25AEFE] flex items-center justify-center text-white text-xl">
                <MdDone />
              </div>
              <p className="text-lg text-gray-800">
                Success! Upload your special banner!
              </p>
              <button
                className="btn  bg-[#0CAA0D] text-white font-bold capitalize hover:bg-[darkgreen]"
                onClick={handleCloseDialog}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
        {showError && (
          <div className="flex items-center justify-center mt-10 ">
            <div className="bg-white p-2 rounded flex items-center shadow-lg gap-3">
              <div className="w-[2.5rem] h-[2.5rem] rounded-lg text-red-500 flex items-center justify-center  text-2xl">
                <AiFillWarning />
              </div>
              <p className="text-lg text-gray-800">
                Error! File is too long Max .size 5MB
              </p>
              <button
                className="btn bg-outline border-red-500 text-red-500 font-bold capitalize hover:bg-[darkred] hover:text-white"
                onClick={handleBrowseClick}
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* <img src={url} alt="" width={300} /> */}
      </div>
      <div className="ml-14 mr-2 mt-5">
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default OfferBanner;
