import React from 'react';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <a
      href={`https://www.${text.split(' ').join('').replace('í', 'i').toLocaleLowerCase()}.es`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text}
    </a>
  );
};

export default Tag;
