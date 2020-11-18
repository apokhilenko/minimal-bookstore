import { Book } from "../../models/Book";

export function calcualteTotalPrice(
  allBooks: Book[],
  bookIds: number[]
): number {
  const selectedBooks: Book[] = allBooks.filter(function (book: Book) {
    return bookIds.includes(book.bookId);
  });

  const totalPrice: number = selectedBooks.reduce<number>(function (
    price: number,
    book: Book
  ) {
    return price + book.price;
  },
  0);

  return totalPrice;
}
