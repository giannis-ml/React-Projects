const noop = () => {};

class Observable {
  constructor(subscription = noop) {
    this.subscription = subscription;
  }

  subscribe(next = noop, error = noop, complete = noop) {
    this.subscription({ next, error, complete });
  }

  //   pipe(...operations) {
  //     return operations.reduce((stream, operation) => operation(stream), this);
  //   }
}

// const map = (func) => (stream$) =>
//   new Observable((observer) => {
//     stream$.subscribe(
//       (x) => {
//         observer.next(func(x));
//       },
//       (error) => observer.error(error),
//       () => observer.complete(),
//     );
//   });

// const filter = (func) => (stream$) =>
//   new Observable((observer) => {
//     stream$.subscribe(
//       (x) => {
//         func(x) && observer.next(x);
//       },
//       (error) => observer.error(error),
//       () => observer.complete(),
//     );
//   });

// const tap = (func) => (stream$) => {
//   stream$.subscribe((x) => {
//     func(x);
//   });
//   return stream$;
// };

const nums$ = new Observable((observer) => {
  [1, 2, 3, 4, 5].forEach((x) => {
    observer.next(x);
  });
  observer.complete();
});

nums$
  //    .pipe(
  //      tap((x) => console.log("tap1", x)),
  //      filter((x) => x % 2),
  //      map((x) => x + 1),
  //      tap((x) => console.log("tap2", x)),
  //      map((x) => x * 2),
  //      tap((x) => console.log("tap3", x)),
  //    )
  .subscribe(
    (num) => {
      console.log(num);
    },
    (error) => {
      console.error(error);
    },
    () => {
      console.log("complete");
    },
  );
