import App from "../src/components/App";
import { StoreProvider } from "../src/context/StoreContext";

const index = () => {
  return (
    <StoreProvider>
     <App/>
     </StoreProvider>
  )
}

export default index

