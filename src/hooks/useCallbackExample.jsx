// The useCallback Hook only runs when one of its dependencies update.
// The useCallback and useMemo Hooks are similar.
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
import React, { useCallback, useState, memo } from "react";

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

const Example = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // Without useCallback, component will still render due to "referential equality"
  // Every time a component re-renders, its functions get recreated.
  // Because of this, the addTodo function has actually changed.
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default memo(Example);
