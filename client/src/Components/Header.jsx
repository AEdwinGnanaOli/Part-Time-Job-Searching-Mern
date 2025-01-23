import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import { useAuth } from "../Context/auth";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [submitSuccess, setsubmitSuccess] = useState(false);
  const [datavalue, setValueData] = useState([auth.user]);

  const Logout = () => {
    navigate("/");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    localStorage.clear("utoken");
  };

  const accountDetails = () => {
    setsubmitSuccess(true);
    setValueData([auth.user]);
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const userProfileVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      {/* Navbar with animation */}
      <motion.div variants={slideDown}>
        <Navbar expand="md" className="bg-body-tertiary navbar-header">
          <Container fluid>
            <Navbar.Brand
              onClick={(e) => navigate("/")}
              className="logo"
            >
              PTJP
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {!auth.user ? (
                  <Nav.Link onClick={(e) => navigate("/")}>Home</Nav.Link>
                ) : (
                  <Nav.Link onClick={(e) => navigate("/userhome")}>Home</Nav.Link>
                )}
                <Nav.Link onClick={(e) => navigate("/about-us")}>About Us</Nav.Link>
                <Nav.Link onClick={(e) => navigate("/contect-us")}>
                  Contact Us
                </Nav.Link>
                {!auth.user ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant="success"
                        className="signin-btn"
                        onClick={(e) => navigate("/signup")}
                      >
                        SignIn
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant="success"
                        className="login-btn"
                        onClick={(e) => navigate("/login")}
                      >
                        Login
                      </Button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div className="user-p-c">
                      <UserOutlined
                        className="user-profile"
                        onClick={accountDetails}
                      />
                      <ShoppingCartOutlined
                        className="user-cart"
                        onClick={() => navigate("/usercart")}
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button variant="success" onClick={Logout}>
                        Logout
                      </Button>
                    </motion.div>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>

      {/* User Profile Animation */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            className="user-profile-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={userProfileVariants}
          >
            <div className="users-profile">
              {datavalue.map((user) => (
                <div className="user-profile" key={user.email}>
                  <div
                    className="user-profile-name"
                    style={{ background: "red" }}
                  >
                    <motion.div
                      className="user-first-letter"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      {user.name[0]}
                    </motion.div>
                  </div>
                  <motion.ul
                    className="user-profile-details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.phone}</li>
                  </motion.ul>
                  <div className="btns d-flex justify-content-between p-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      <Button
                        className="edit-btn button-update"
                        variant="success"
                        onClick={(e) => console.log("Edit user", user._id)}
                      >
                        <MdModeEdit className="edit-icon" />
                        Edit
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                    >
                      <Button
                        className="edit-btn button-update"
                        variant="success"
                        onClick={(e) => console.log("Delete user", user._id)}
                      >
                        <MdDelete className="edit-icon" />
                        Delete
                      </Button>
                    </motion.div>
                  </div>
                </div>
              ))}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Button
                  variant=""
                  className="button-close"
                  onClick={() => setsubmitSuccess(false)}
                >
                  <IoClose />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;
