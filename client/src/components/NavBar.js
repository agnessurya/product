import { Link,useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
    const navigate = useNavigate()
    
  const HandleLogout = ()=> {
    console.log("LOGOUT GA?")
    localStorage.clear()
    navigate('/login')
  }

 return(
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#"><Link style={{ color: "white" }} to="/">Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#" onClick={()=>HandleLogout()}>Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

 )
}

export default NavBar