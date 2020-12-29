import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import hotkeys from 'hotkeys-js';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const rawFile = new XMLHttpRequest();
    rawFile.open('GET', 'file:///C:/demo/1.txt', false);
    // tslint:disable-next-line: only-arrow-functions
    rawFile.onreadystatechange = function() {
                const allText = rawFile.responseText;
                alert(allText);
    };
    rawFile.send(null);
  }

  onSubmit(form: NgForm) {
    alert('Your Response is Submitted.');
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId : Math.random(),
      id: Math.random(),
      title: form.value.Username
    }).subscribe(res => {
      console.log(res);
    }, error => {
        console.log('Something Went Wrong');
    });
  }
}
