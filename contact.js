  // Send POST request to server
  fetch("send_email.php", {
      method: "POST",
      body: formData
  })
  .then(response => {
      if (response.ok) {
          return response.text();
      }
      throw new Error("Error: Unable to send email.");
  })
  .then(data => {
      alert(data); // Display success message
  })
  .catch(error => {
      alert(error.message); // Display error message
  });