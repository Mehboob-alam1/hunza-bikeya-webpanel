import React, { useEffect, useState } from "react";
import { db } from '../../firebaseConfig'
import { onValue, ref } from "firebase/database";

const Notification = ({ onClose }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    onValue(ref(db, 'Riders/UserNotifications'), (snapshot) => {
      const notificationArray = Object.values(snapshot.val());
      setNotifications(notificationArray);
    })
  }, [])
  return (
    <>
      <ul className="w-[100%] bg-red-400 ">
        <li>Hello</li>
        <li>Hi</li>
        <button onClick={onClose}>close</button>
        <li>bye</li>
      </ul>
    </>
  );
};

export default Notification;
