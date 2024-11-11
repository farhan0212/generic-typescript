export class Multiple<K, V> {
  constructor(public key: K, public value: V) {}
}

export class MultipleClass<K, V, T> {
  constructor(public first: K, public second: V, public third: T) {}
}
