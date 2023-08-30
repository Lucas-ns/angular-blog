import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://disneyplusbrasil.com.br/wp-content/uploads/2021/04/Capitao-America-na-Lua-1024x576.jpg';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá mundo!';
  constructor() {}

  ngOnInit(): void {}
}
