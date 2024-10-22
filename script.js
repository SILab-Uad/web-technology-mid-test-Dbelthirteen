// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // TODO: Create a variable for the character set based on selected options
  let charset = "";
  if (options.includeUppercase) charset += uppercase;
  if (options.includeLowercase) charset += lowercase;
  if (options.includeNumbers) charset += numbers;
  if (options.includeSpecialChars) charset += specialChars;
  // TODO: Generate the password based on the selected criteria
  if (charset.length === 0) {
  alert("Please select at least one criteria.");
  console.log("Please select at least one criteria.");
  return;
};

  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
};

//  TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('passwordOutput').addEventListener('click', () => {
  const length = parseInt(document.getElementById('length').value, 10);
  const options = {
      includeUppercase: document.getElementById('includeUppercase').checked,
      includeLowercase: document.getElementById('includeLowercase').checked,
      includeNumbers: document.getElementById('includeNumbers').checked,
      includeSpecialChars: document.getElementById('includeSpecialChars').checked,
  };

  const password = generatePassword(length, options);

});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
  const passwordOutput = document.getElementById('passwordOutput').textContent;
  if (passwordOutput) {
      navigator.clipboard.writeText(passwordOutput).then(() => {
          console.log('Password copied to clipboard!');
      }).catch(err => {
          console.error('Could not copy text: ', err);
      });
  } else {
      console.log('No password to copy!');
  }
});
