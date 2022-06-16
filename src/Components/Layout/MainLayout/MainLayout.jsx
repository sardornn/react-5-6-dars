import { Header } from "../../Header"
import { Container } from "../Container"
export const MainLayout = ({children}) => {
    return(
      <>
        <Header />
        <Container>{children}</Container>
        </>
    )
}