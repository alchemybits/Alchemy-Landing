import React from "react";
import template from "./Login.jsx";
import swal from "sweetalert2";

import * as firebase from "firebase";
import { db } from "../../Firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      auth: firebase.auth(),
      isActive: false,
      loading: false
    };

    this.toast = swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 3000
    });

    this.userLogin = this.userLogin.bind(this);
    this.register = this.register.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  register(e) {
    e.preventDefault();

    const toast = this.toast;
    const history = this.props.history;
    const self = this;
    this.setState({ loading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        Luser => {
          // [END createwithemail]
          // callSomeFunction(); Optional
          var user = firebase.auth().currentUser;
          user
            .updateProfile({
              displayName: this.state.name
            })
            .then(
              function() {
                toast({
                  type: "success",
                  title: "Signed in successfully"
                });

                db.collection("users")
                  .doc(user.uid)
                  .set({
                    name: user.displayName,
                    email: user.email,
                    Admin: false
                  })
                  .then(function(docRef) {
                    history.push("/");
                  })
                  .catch(function(error) {
                    console.error("Error adding document: ", error);
                  });
              },
              function(error) {
                this.setState({ loading: false });
                toast({
                  type: "error",
                  title: "Something bad happened... please report this.",
                  html: error
                });
              }
            );
        },
        function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/weak-password") {
            swal("oh OH?", "your password is too weak..?", "warning");
          } else {
            self.setState({ loading: false });
            toast({
              type: "error",
              title: "Something bad happened... please report this.",
              html: errorMessage
            });
          }
          // [END_EXCLUDE]
        }
      );
  }

  toggleClass(e) {
    const container = document.querySelector(".container");

    if (container.classList.contains("active")) {
      this.setState({ isActive: false });
      container.classList.remove("active");
    } else {
      this.setState({ isActive: true });
      container.classList.add("active");
    }
  }

  userLogin(e) {
    e.preventDefault();
    let self = this;
    this.setState({ loading: true });
    const toast = this.toast;
    const history = this.props.history;

    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.email.toLowerCase(),
        this.state.password
      )
      .then(function(user) {
        toast({
          type: "success",
          title: "Welcome " + user.user.displayName
        });
        history.push("/Dashboard");
      })
      .catch(function(error) {
        // Handle Errors here.
        self.setState({ loading: false });
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          toast({
            type: "error",
            title: error.message
          });
        } else {
          toast({
            type: "error",
            title: error.message
          });
        }
        console.log(error);
      });
  }

  handleChange(event) {
    const email = document.querySelector("#email");
    email.value = email.value.toLowerCase();
    this.setState({ [event.target.name]: event.target.value });
    //console.log("event",event.target.name);
  }
  render() {
    return template.call(this);
  }
}

export default Login;
