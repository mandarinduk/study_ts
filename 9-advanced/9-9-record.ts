{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // Record: 하나의 Type을 Key, 다른 Type을 Value로 묶어서 사용할 때
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
