import React, { Component } from "react";
import "./Contact.css";
// get our fontawesome imports
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faComment } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const Contact = () => {
  return (
    <>
      <MDBContainer fluid>
          <MDBRow>
            <MDBCol xs="12">
              <h2>Contact</h2>
            </MDBCol>
          </MDBRow>
          <MDBRow id="straight-line">
            <MDBCol xs="12">

            </MDBCol>
          </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md='6'>
            <form action="mailto:dazacher2000@yahoo.com" method="POST" encType="text/plain" className='hoverable' style={{ padding: 38 }}>
              <div className='grey-text'>
                <MDBInput
                  label='Your Name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='E-mail Address'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Subject'
                  icon='tag'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  type='textarea'
                  rows='2'
                  label='Your message please...'
                  icon='pencil-alt'
                />
              </div>
              <div className='text-center'>
                <button outline className="fa submitButton">
                  Submit <MDBIcon far icon='paper-plane' className='ml-1' />
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: ""
//     }
//   }

//   onNameChange(event) {
//     this.setState({ name: event.target.value })
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value })
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log(this.state);

//     fetch('http://localhost:3000/send', {
//       method: "POST",
//       body: JSON.stringify(this.state),
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then(
//       (response) => (response.json())
//     ).then((response) => {
//       if (response.status === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }
//   resetForm() {
//     this.setState({
//       name: "",
//       email: "",
//       message: ""
//     })
//   }

//   render() {
//     return (

//       <div className="Contact">
//         <div className="container">
//           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//             <div className="form-group">
//               <label htmlFor="name" className="fa label"> <FontAwesomeIcon icon={faUser} /> Name</label>
//               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1" className="fa label"><FontAwesomeIcon icon={faEnvelope} /> Email address</label>
//               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message" className="fa label"><FontAwesomeIcon icon={faComment} /> Message</label>
//               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//             </div>
//             <button type="submit" className="btn-raised submitButton">Submit</button>
//           </form>
//         </div>
//       </div>
//     );
//   };
// };
//     // <!-- Container to hold the line and Contact header in -->
//     <div class="container">
//       <div class="row">
//         <div class="col-xs-12">
//           <h2>Contact</h2>
//         </div>
//       </div>
//       <div class="row" id="straight-line">
//         <div class="col-xs-12">

//         </div>
//       </div>
//     </div>
//     // <!-- Put form in a container -->
//     <div class="container">
//       {/* <!-- Start of the form --> */}
//       <form action="mailto:dazacher2000@yahoo.com" method="post" enctype="multipart/form-data" name="EmailForm">
//         {/* <!-- Form Started --> */}
//         <div class="container form-top">
//           <div class="row">
//             <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
//               <div class="panel panel-danger">
//                 <div class="panel-body">
//                   <form id="reused_form">
//                     <div class="form-group">
//                       <label><i class="fa fa-user" aria-hidden="true"></i> Name</label>
//                       <input type="text" name="name" class="form-control"
//                         placeholder="Enter Name"></input>
//                     </div>
//                     <div class="form-group">
//                       <label><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
//                       <input type="email" name="email" class="form-control"
//                         placeholder="Enter Email" required></input>
//                     </div>
//                     <div class="form-group">
//                       <label><i class="fa fa-comment" aria-hidden="true"></i> Message</label>
//                       <textarea rows="3" name="message" class="form-control" maxlength="3000"
//                         placeholder="Type Your Message" required></textarea>
//                     </div>

//                     <div class="form-group">
//                       <button class="btn btn-raised">Submit</button>
//                     </div>
//                   </form>
//                   <div id="error_message" style="width:100%; height:100%; display:none; ">
//                     <h4>Error</h4>
//                                         Sorry there was an error sending your form.
//                                     </div>
//                   <div id="success_message" style="width:100%; height:100%; display:none; ">
//                     <h2>Success! Your Message was Sent Successfully.</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <script>
//           $(function () {
//             function after_form_submitted(data) {
//               if (data.result == 'success') {
//                 $('form#reused_form').hide();
//                 $('#success_message').show();
//                 $('#error_message').hide();
//               }
//               else {
//                 $('#error_message').append('<ul></ul>');

//                 jQuery.each(data.errors, function (key, val) {
//                   $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
//                 });
//                 $('#success_message').hide();
//                 $('#error_message').show();

//                 //reverse the response on the button
//                 $('button[type="button"]', $form).each(function () {
//                   $btn = $(this);
//                   label = $btn.prop('orig_label');
//                   if (label) {
//                     $btn.prop('type', 'submit');
//                     $btn.text(label);
//                     $btn.prop('orig_label', '');
//                   }
//                 });

//               }//else
//             }

//                         $('#reused_form').submit(function (e) {
//             e.preventDefault();

//                             $form = $(this);
//                             //show some response on the button
//                             $('button[type="submit"]', $form).each(function () {
//             $btn = $(this);
//                                 $btn.prop('type', 'button');
//                                 $btn.prop('orig_label', $btn.text());
//                                 $btn.text('Sending ...');
//                             });


//                             $.ajax({
//             type: "POST",
//                                 url: 'handler.php',
//                                 data: $form.serialize(),
//                                 success: after_form_submitted,
//                                 dataType: 'json'
//                             });

//                         });
//                     });
//                 </script>

//         {/* <!-- Form Ended --> */}
//       </form>
//     </div>
//         </div >

//     </div >

//   );
// }

export default Contact;