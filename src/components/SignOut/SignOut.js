import React    from "react";
import template from "./SignOut.jsx";
import * as firebase from "firebase";
import swal from "sweetalert2";

class SignOut extends React.Component {

	constructor(props){
		super(props);

		this.toast = swal.mixin({
	      toast: true,
	      position: 'center',
	      showConfirmButton: false,
	      timer: 3000
		});

		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		const toast = this.toast;
		const history = this.props.history;
		firebase.auth().signOut().then(function() {
	      toast({
	        type: 'success',
	        title: 'Have a nice day! '
	      })
	      history.push("/Login");
				//window.location.reload();
	    }).catch(function(error) {
	      // An error happened.
	      alert("Yikes somethng HAPPEND",error);
	    });
	}
	componentDidMount(){
	  this.signOut();
	}
  render() {
    return template.call(this);
  }
}


export default SignOut;
