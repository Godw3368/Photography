<% include ./partials/header %>

<h1 id="book">Booking</h1>
<section id="form"><div class="formcontent"><input  type="text" name="name" placeholder="Full Name"><input type="email" name="email" placeholder="Email"><input type="tel" name="phone" placeholder="Phone Number"><h5>Desired Date</h5><input type="date" name="date">
<h5>Desired Time</h5>
<!--<input type="time" name="time">-->
<select name="time"><option>Please Select</option></option><option>Morning</option><option>Afternoon</option><option>Evening</option></select>
<div id="comment"><textarea name="text" placeholder="Message / Comments" rows="10" cols="30"></textarea></div><button> Submit </button></div></section>
<div id="contact"><div id="contactText"><h1>Contact Us Directly</h1><h4>Contact One</h4><div id="numbers"><a href="tel:+15555555555" id="num">(775) 775-7775</a><h4>Person Two</h4><a href="tel:+15555555555" id="num">(775) 775-7775</a></div><h4>Email</h4><a href="mailto:example@email.com">example@mail.com</a></div></div>

<% include ./partials/footer %>