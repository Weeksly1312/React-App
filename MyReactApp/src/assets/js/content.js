export const showAlert = () => {
  alert("You clicked this button!");
};

export const checkAge = (age) => {
  return age === 20 ? "Welcome!" : "You are not 20 years old.";
};

export const showMessage = (setMessage) => {
  // Update the content using state
  setMessage("New content");
};