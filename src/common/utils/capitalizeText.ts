export const capitalizeText = (text: string) => {
  const firstLetter = [...text][0].toUpperCase();
  const letters = [...text];
  letters.splice(0, 1);
  return [firstLetter, ...letters].join("");
};
