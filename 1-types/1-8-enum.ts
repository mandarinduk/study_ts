{
  /**
   * Enum
   * 상수 값들을 한 곳에 모아서 정의
   * 타입이 정확하게 보장되지 않기 때문에 최대한 사용 X
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    // Enum에 값을 따로 할당하지 않을 경우
    // 자동으로 0부터 할당됨
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = "sun",
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  console.log(day);
  console.log(Days.Sunday);

  // Enum에 없는 값이 할당 됨(Type이 보장되지 않음)
  day = 10;
  // => Enum 대신 Union Type으로 대체하여 활용
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let daysOfWeek: DaysOfWeek = "Monday";
  daysOfWeek = "Tuesday";
}
