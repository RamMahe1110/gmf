let initialState = {
  currWord: '',
  possibleWords: {
    apple: {
      selected: false,
    },
    head: {
      selected: false,
    },
    place: {
      selected: false,
    },
    space: {
      selected: false,
    },
    help: {
      selected: false,
    },
    hat: {
      selected: false,
    },
    cap: {
      selected: false,
    },
    cat: {
      selected: false,
    },
    heap: {
      selected: false,
    },
    sad: {
      selected: false,
    },
    plate: {
      selected: false,
    },
    sat: {
      selected: false,
    },
    eat: {
      selected: false,
    },
    pace: {
      selected: false,
    },
    heat: {
      selected: false,
    },
    paste: {
      selected: false,
    },
    path: {
      selected: false,
    },
    last: {
      selected: false,
    },
    pad: {
      selected: false,
    },
    seat: {
      selected: false,
    },
    date: {
      selected: false,
    },
  },
  letters: ['p', 'l', 'p', 't', 's', 'a', 'c', 'e', 'h', 'd'],
  selectedLetters: {},
  allSelected: false,
  notifierString: { forReset: false, str: '' },
}

export default { initialState: initialState }
