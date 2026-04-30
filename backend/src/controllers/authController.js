export const registerUser = (req, res) => {
  res.status(201).json({ message: "Register route working" });
};

export const loginUser = (req, res) => {
  res.status(200).json({ message: "Login route working" });
};