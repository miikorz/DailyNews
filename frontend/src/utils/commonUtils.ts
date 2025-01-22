export const getNewsLetterPage = (newsletter: string | null) =>
  `https://www.${newsletter?.split(' ').join('').replace('í', 'i')}.es`;
