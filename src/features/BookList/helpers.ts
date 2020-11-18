import { BookWithId } from "../../models/Book";

export function calcualteTotalPrice(
  allBooks: BookWithId[],
  bookIds: number[]
): number {
  const selectedBooks: BookWithId[] = allBooks.filter(function (
    book: BookWithId
  ) {
    return bookIds.includes(book.bookId);
  });

  const totalPrice: number = selectedBooks.reduce<number>(function (
    price: number,
    book: BookWithId
  ) {
    return Math.round((price + book.price) * 100) / 100;
  },
  0);

  return totalPrice;
}
