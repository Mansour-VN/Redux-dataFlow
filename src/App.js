import "./App.css";
import PostsList from "./features/posts/PostsList";
import AddedPostForm from "./features/posts/AddedPostForm";
function App() {
  return (
    <div className="App">
      <AddedPostForm />
      <PostsList />
    </div>
  );
}

export default App;
