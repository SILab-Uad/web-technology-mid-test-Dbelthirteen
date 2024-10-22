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
  if (!options.includeUppercase && !options.includeLowercase && 
      !options.includeNumbers && !options.includeSpecialChars) {
      throw new Error("At least one character type must be selected");
  }
  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
};


//  TODO: Add event listener to the button to call generatePassword and display the output
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generatePassword }
}

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
