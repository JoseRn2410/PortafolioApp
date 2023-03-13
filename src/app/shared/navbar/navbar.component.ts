import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ocultarMostrar(){
    const mobileMenu = document.querySelector('.navegacion')

    if (mobileMenu?.classList.contains('d-block')) {
      mobileMenu?.classList.remove('d-block')
    } else{
      mobileMenu?.classList.add('d-block')
    }
  }
  



}
