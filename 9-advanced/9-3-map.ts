{
  type Video = {
    title: string;
    author: string;
  };
  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //   };
  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //   };
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type Readonly<T> = {
    readonly [P in keyof T]: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;
  const video: VideoOptional = {
    author: "bae",
  };
  const video2: Readonly<Video> = {
    title: "hi",
    author: "bae",
  };
  video2.title = "hello"; // readonly이기 때문에 변경 불가능

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    age: 12,
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
