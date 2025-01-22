export interface Feed {
  title: string;
  description: string;
  author: string;
  link: string;
  portrait: string | null;
  newsletter: string;
  createdAt: Date;
}

export class FeedDTO implements Feed {
  title: string;
  description: string;
  author: string;
  link: string;
  portrait: string | null;
  newsletter: string;
  createdAt: Date;

  constructor(
    title: string,
    description: string,
    author: string,
    link: string,
    portrait: string | null,
    newsletter: string
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.link = link;
    this.portrait = portrait;
    this.newsletter = newsletter;
    this.createdAt = new Date();
  }

  toObject(): Feed {
    return {
      title: this.title,
      description: this.description,
      author: this.author,
      link: this.link,
      portrait: this.portrait,
      newsletter: this.newsletter,
      createdAt: this.createdAt,
    };
  }
}
