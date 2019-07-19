import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
/*
Template-driven Form: Component

With template-driven forms, most of the code is in the template, but we still need a component to provide the properties for binding and the methods for getting and saving data. Let's take a look. Wow, not much here. 

In the component class, we define the code to manage our form. 

There are two key bits of information here in our class. 

A customer property manages the instance of the customer data that we are binding to in our template. We can use Go to Definition to view the definition of the customer data model here. We are using a class and not an interface in this case because we want to create a new instance of this class for the new customer information. 

The other important bit of code here is the save method. Our template binds to this method, which is executed when the user submits the form. We pass in the form model from the template so we can check the form state and view its values. For example, we could skip saving if the user clicks Save without making any changes by checking the forms dirty property. It is here that we would call a service to save our data to a back-end server. We'll see how to build save functionality later in this course. The bottom line here is that the template-driven form's approach minimizes the component class code we need to write, but it is heavy on the template code. Each control takes a full page of HTML. When using template-driven forms, Angular automatically creates the form model. We can then use that to track form and control state, and the ngModel two-way binging takes care of keeping our class properties in sync. But often in a real application forms are more complex than this. Let's look at some of these scenarios.


Complex Scenarios

Our story begins a week ago when our team met with marketing to understand the requirements for a sign-up feature. We then developed a first prototype of the form and are presenting it to them today. We show them the form and how well it validates the customer's entries per their specifications. And when we click the Send me your catalog button, it allows the customer to put in a mailing address to receive our catalog. This prompts our first change request. Can we allow multiple addresses they ask? It seems that our customers often want to receive catalogs at both their home and work and may also want to ensure their subordinates get catalogs too. Who wouldn't want more catalogs? This generates some additional ideas. Can we watch what the user types into the street address and provide suggestions? This would make it easier for the user to send the catalog to multiple people at the same company. Then from the back of the room we get a question. Can we see that first name validation again? We show them. I don't like that the customer sees an error when they type in one character. Can't we wait until they stop typing to determine if they've entered enough characters? They continue, many of our customers also like to receive notifications from us via email or a text message. Can we ask for their preference and add a phone number? Be sure to make the phone number required only if they pick notifications via text message. We take our list of change requests and head back to our office. Implementing these change requests sounds like we'll end up with a complex set of HTML that will be difficult to build and maintain over time. There has to be another way. As we've just seen, template-driven forms is mostly just HTML and is easy to use. But as soon as we start handling more complex scenarios, things get harder and messier. Scenarios, such as dynamically adding input elements to the form, such as multiple address blocks, adding code to watch what the user types and reacting accordingly, waiting validation until the user stops typing, providing different validation rules for different situations, and what if your team prefers working with immutable data, that means you need to forgo two-way data binding. What then? These scenarios are where the reactive forms approach really shines, as we'll see through the remainder of this course.
*/


