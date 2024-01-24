import React, { useRef, useState } from "react";

const TabOpener = () => {
  const intervalCount = useRef(1);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [fetchedWords, setFetchedWords] = useState([]);

  const openNewTab = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const word = data[0];

        // Update the title of the document with the current tab count
        document.title = `🚀 Tab Opener ${intervalCount.current} of ${
          intervalCount.current < 30 ? 30 : "Reward"
        } - Reyd 🚀`;

        const dynamicUrl = `https://www.bing.com/search?q=${word}+definition&cvid=unique_cvid_here&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPNIBBz${intervalCount.current}MWowaj${intervalCount.current}oAgCwAgA&FORM=ANAB01&ucpdpc=UCPD&PC=LCTS`;

        const newTab = window.open(dynamicUrl, "_blank");

        // Close the tab after 8 seconds (adjust as needed)
        setTimeout(() => {
          if (newTab) {
            newTab.close();
          }
        }, 8000);

        // Add the word to the fetchedWords array
        setFetchedWords((prevWords) => [...prevWords, word]);
      }
    } catch (error) {
      console.error("Error fetching random word:", error);
    }
  };

  const openRewardTab = () => {
    // Update the title of the document with the current tab count
    document.title = `🚀 Tab Opener Reward - Reyd 🚀`;

    // Open the 31st tab with the reward URL
    window.open("https://rewards.bing.com/pointsbreakdown", "_blank");
  };

  const startTabOpening = () => {
    // Disable the button
    setButtonDisabled(true);

    // Open the first tab immediately
    openNewTab();

    // Start opening tabs at the regular interval (after the first tab)
    const intervalId = setInterval(() => {
      if (intervalCount.current < 30) {
        intervalCount.current += 1;
        openNewTab();
      } else {
        openRewardTab();
        clearInterval(intervalId); // Stop the interval when 31 tabs are opened
        setButtonDisabled(false); // Enable the button after all tabs are opened
      }
    }, 8000); // Set the interval to 8 seconds
  };

  // Styles for body
  document.body.style.backgroundColor = "#333"; // Background color
  document.body.style.transition = "background-color 1s ease-in-out"; // Transition effect

  const featureContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    color: "#333", // Text color
  };

  const featureCardStyle = {
    flex: "0 0 calc(30% - 40px)",
    backgroundColor: "#f0f0f0", // Background color of the box
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "#f0f0f0" }}>
      <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>
        🚀 Exciting News: Patch v3 Unveiled! 🚀
      </h1>
      <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
        Dear Tab Opener Community,
      </p>
      <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
        I am thrilled to announce the release of Patch v3, introducing exciting
        changes to enhance your experience. Here's what's new:
      </p>
      <div style={featureContainerStyle}>
        <div style={featureCardStyle}>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            <strong>No More Spamming:</strong> Each tab will now be
            automatically closed, eliminating the need for manual tab
            management. Say goodbye to spamming and enjoy a more streamlined
            process.
          </p>
        </div>
        <div style={featureCardStyle}>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            <strong>Enhanced Search Experience:</strong> Tabs will now search
            for random words, boosting your vocabulary while you wait.
            Experience a more engaging and educational search journey.
          </p>
        </div>
        <div style={featureCardStyle}>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            <strong>Tab Counter:</strong> The main tab will now display a
            counter, indicating your progress. Know exactly which tab you are on
            during the process.
          </p>
        </div>
        <div style={featureCardStyle}>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            <strong>Reward Interface:</strong> After the 30th tab, you will be
            seamlessly redirected to the Reward interface. Check and redeem your
            points effortlessly.
          </p>
        </div>
        <div style={featureCardStyle}>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            <strong>Word of the Day:</strong> Each rerun is different, so you
            will encounter different words. Enjoy a new vocabulary challenge
            every time!
          </p>
        </div>
      </div>
      <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
        I believe these updates will make your Tab Opener experience smoother
        and more enjoyable. Thank you for your continued support and feedback!
      </p>

      <p
        style={{ fontSize: "1.2em", marginBottom: "20px", fontWeight: "bold" }}
      >
        Happy Browsing,
        <br />
        Reyd
      </p>

      <button
        style={{
          fontSize: "1.5em",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={startTabOpening}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? "Tab Opening..." : "Get Started"}
      </button>

      {fetchedWords.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
            Word of the Day:
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "10px",
            }}
          >
            {fetchedWords.map((word, index) => (
              <div
                key={index}
                style={{ fontSize: "1.2em", marginBottom: "10px" }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
          Want to give support? Send it here:
        </p>
        <a
          href="https://paypal.me/ReyDanteG"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2em",
            color: "#4CAF50", // Link color
            textDecoration: "underline",
          }}
        >
          paypal.me/ReyDanteG
        </a>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>
          You can reach me on:
        </p>
        <a
          href="https://web.facebook.com/profile.php?id=100074602249965"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2em",
            color: "#4CAF50", // Link color
            textDecoration: "underline",
          }}
        >
          https://web.facebook.com/profile.php?id=100074602249965
        </a>
      </div>
    </div>
  );
};

export default TabOpener;
