import App from "../src/App";
import { UserProvider } from "../src/UserContext";

export default function Home() {
  return (
    <UserProvider>
    <App/>
    </UserProvider>
  )
}
