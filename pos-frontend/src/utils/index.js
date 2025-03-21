export const getRandomBG = () => {
  const classes = [
    "bg-yellow-500",
    "bg-blue-600",
    "bg-red-600",
    "bg-green-500",
  ];

  return classes[Math.floor(Math.random() * classes.length)];
};
