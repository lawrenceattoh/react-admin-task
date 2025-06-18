// Book and Author interfaces

export interface Author {
  id: number;
  name: string;
  birthYear: number;
}

export interface Book {
  id: number;
  title: string;
  authorId: number;
  publishedYear: number;
}
