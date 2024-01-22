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
    }, 8000); // Set the interval to 4 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentTab]);

  return (
    <div>
      {/* No need for a button since the tabs open automatically */}
      {/* <button onClick={openNextTab}>Open Tabs</button> */}
    </div>
  );
};

export default TabOpener;
