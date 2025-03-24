export const getRandomBG = () => {
  const classes = [
    "bg-yellow-500",
    "bg-blue-600",
    "bg-red-600",
    "bg-green-500",
  ];

  return classes[Math.floor(Math.random() * classes.length)];
};

export const getBgColor = () => {
  const bgarr = [
    "#b73e3e",
    "#7f167f",
    "#5b45b0",
    "#735f32",
    "#1d2569",
    "#285430",
  ];
  const randomBg = Math.floor(Math.random() * bgarr.length);
  const color = bgarr[randomBg];
  return color;
};
