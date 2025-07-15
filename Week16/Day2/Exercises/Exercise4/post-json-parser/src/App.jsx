import React from "react";

function App() {
  const handlePostData = async () => {
    const url = "https://webhook.site/f8bf0b0d-f4fe-49f9-a1a3-4318827f2db8"; // replace with your real URL

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text(); // Webhook.site may return plain text
      console.log("Response from webhook:", result);
    } catch (error) {
      console.error("Error posting to webhook:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Exercise 4: Post JSON Data</h2>
      <button onClick={handlePostData}>Send JSON to Webhook</button>
    </div>
  );
}

export default App;

