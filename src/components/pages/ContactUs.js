import React from 'react';
import '../../App.css';

export default function ContactUs() {
  return(
    <>
  <h1 className='contact-us'>ContactUs</h1>
  <h2>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="enter your email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contact Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="enter your number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Message</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="enter your message"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</h2>
</>
  );
}