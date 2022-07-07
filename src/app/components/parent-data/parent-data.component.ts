import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; //necessário inicializar valor
  @Input() userData!: {email: string, role: string}; //! (typescript) quer dizer q o dado será iniciado em algum momento

  constructor() { }

  ngOnInit(): void {
  }

}
