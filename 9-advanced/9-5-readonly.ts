{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    todo.title = "update"; // readonly이기 때문에 수정 불가
  }
}
