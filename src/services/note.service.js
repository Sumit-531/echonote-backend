import generatePublicId from "#utils/generatePublicId.js";

// Validate Message
const validateMessage = (message) => {
  if (typeof message !== "string") {
    throw new Error("Message must be a valid string!");
  }

  const trimmedMessage = message.trim();

  if (trimmedMessage.length < 1) {
    throw new Error("Message cannot be blank.");
  }

  if (trimmedMessage.length > 500) {
    throw new Error("Message cannot exceed 500 characters.");
  }

  return trimmedMessage;
};

const createNote = async (message) => {
  const validatedMessage = validateMessage(message);

  // Public Id
  const publicId = generatePublicId();

  // will return in future
};

export default createNote;
