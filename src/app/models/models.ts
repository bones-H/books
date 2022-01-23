export interface IBook {
  name: string,
  author: string,
  description?: string,
  categoryId: number,
}

export interface ICategory {
  name: string,
  id: number,
  books: Array<IBook>,
  category?: ICategory,
}
