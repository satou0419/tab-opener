import React, { useState, useEffect } from "react";

const TabOpener = () => {
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentTab <= 30) {
        const dynamicUrl = `https://www.bing.com/search?q=${currentTab}&cvid=unique_cvid_here&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPNIBBz${currentTab}MWowaj${currentTab}oAgCwAgA&FORM=ANAB01&ucpdpc=UCPD&PC=LCTS`;

        window.open(dynamicUrl, "_blank");
        setCurrentTab((prevTab) => prevTab + 1);
      } else {
        clearInterval(intervalId); // Stop the interval when 30 tabs are opened
      }
    }, 8000); // Set the interval to 8 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentTab]);

  // Styles for body
  document.body.style.backgroundColor = "#333"; // Background color
  document.body.style.transition = "background-color 1s ease-in-out"; // Transition effect

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2em", color: "#f0f0f0" }}>
        Boss, please wait for 4 minutes.
      </h1>
      <h1 style={{ fontSize: "2em", color: "#f0f0f0" }}>
        It will open a new tab every 8 seconds until 30 tabs are opened.
      </h1>
      <h2 style={{ fontSize: "1.5em", fontStyle: "cursive", color: "#f01fff" }}>
        Love, Reyd &#10084;
      </h2>
    </div>
  );
};

export default TabOpener;
