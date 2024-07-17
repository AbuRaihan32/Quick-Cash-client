export function isEmailOrNumber(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d+$/;

  if (emailRegex.test(value)) {
    return "email";
  } else if (phoneRegex.test(value)) {
    return "phone";
  } else {
    return "invalid";
  }
}
