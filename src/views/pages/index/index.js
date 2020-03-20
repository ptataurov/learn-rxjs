import {
  interval,
  of,
  from,
  Observable,
  fromEvent,
  range,
  timer,
  Subject,
  BehaviorSubject,
  ReplaySubject
} from 'rxjs'
import {
  take,
  takeLast,
  takeWhile,
  filter,
  map,
  scan,
  tap,
  reduce,
  switchMap
} from 'rxjs/operators'

const people = [
  {
    name: 'Alex',
    age: 26
  },
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Joe',
    age: 16
  }
]

// interval(1000)
//   .pipe(
//     take(people.length),
//     filter(v => people[v].age >= 18),
//     map(v => people[v].name),
//     scan((acc, v) => acc.concat(v), [])
//   )
//   .subscribe(
//     res => console.log(res),
//     null,
//     () => {
//       console.log('completed')
//     }
//   )

// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(v => console.log(v))

// const arr$ = from([1, 2, 3, 4]).pipe(scan((acc, v) => acc.concat(v), []))

// arr$.subscribe(v => console.log(v))

// const stream$ = new Observable(observer => {
//   observer.next('First value')
//   observer.complete('Complete')
//   observer.error('Error')
// })

// stream$.subscribe(
//   v => console.log(v),
//   err => console.log(err),
//   () => console.log('Complete')
// )

// stream$.subscribe({
//   next(v) {
//     console.log(v)
//   },
//   error(err) {
//     console.log(err)
//   },
//   complete() {
//     console.log('Complete')
//   }
// })

// fromEvent(document.getElementById('_button'), 'click')
//   .pipe(
//     map(e => ({
//       target: e.target
//     }))
//   )
//   .subscribe(e => console.log(e))

// timer(1000).subscribe(v => console.log(v))

// range(42, 10).subscribe(v => console.log(v))

// document.addEventListener('click', () => {
//   const stream$ = new Subject()
//   stream$.subscribe(v => console.log(v))

//   stream$.next('Hello')
//   stream$.next('Rx')
//   stream$.next('JS')
// })

// document.addEventListener('click', () => {
//   const stream$ = new BehaviorSubject('First')

//   stream$.subscribe(v => console.log(v))

//   stream$.next('Hello')
//   stream$.next('Rx')
//   stream$.next('JS')
// })

// document.addEventListener('click', () => {
//   const stream$ = new ReplaySubject(2)

//   stream$.next('Hello')
//   stream$.next('Rx')
//   stream$.next('JS')

//   stream$.subscribe(v => console.log(v))
// })

fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return interval(200).pipe(
        // tap(v => console.log('Tap ', v)),
        // map(v => v * 3),
        // filter(v => v % 2 === 0),
        take(10),
        // takeLast(5),
        // takeWhile(v => v < 7)
        reduce((acc, v) => acc + v, 0)
      )
    })
  )
  .subscribe({
    next: v => console.log('Next ', v),
    complete: () => console.log('Complete')
  })
