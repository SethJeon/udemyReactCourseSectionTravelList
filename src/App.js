export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stat />
    </div>
  );
}

function Logo() {
  return <h1> ✔ Far Away</h1>;
}
function Form() {
  return (
    <div className="add-from">
      <h3>What do you need for your trip?😘</h3>
    </div>
  );
}
function PackingList() {
  return <div className="List"> LIST</div>;
}

function Stat() {
  return (
    <em>
      <footer>
        You have X items on your list, and you already packed X(X%)
      </footer>
    </em>
  );
}
