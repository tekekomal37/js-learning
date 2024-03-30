// Existing object
let professor = {
    certificate: ["First Certificate"] // Assuming certificate property is an array
  };
  
  // Adding a second value to "certificate" property using splice method
  if (!Array.isArray(professor.certificate)) {
    console.error("Certificate property is not an array.");
  } else {
    // Inserting the second certificate at index 1
    professor.certificate.splice(1, 0, "Second Certificate");
  }
  
  // Output the updated object
  console.log(professor);
  console.log(professor.certificate);
  