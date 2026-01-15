const lowerCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const upperCaseAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const digits = Array.from({ length: 10 }, (_, i) => i.toString());

const alphaNumeric = [...lowerCaseAlphabet, ...upperCaseAlphabet, ...digits];

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generatePublicId = () => {
  let sequence = "";
  for (let i = 0; i < 6; i++) {
    const result = randomElement(alphaNumeric);
    sequence = sequence + result;
  }

  return sequence;
};

export default generatePublicId;
