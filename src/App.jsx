import UserPage from "./components/UserPage";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <UserPage />
      </UserProvider>
    </>
  );
}

export default App;
