import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Post } from 'src/app/models/placeholder.posts.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  post: Post;
  erro: any;
  variavel:Post
  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.listaPosts();
    console.log('Teste ',this.variavel);
  }

  listaPosts(){
    this.crudService.getPostagens()
    .subscribe((response: Post) => {
      this.post = response;
      console.log('Resposta recebida ',response);
      console.log('Variavel preenchida ',this.post);
    },(error: any) =>{
      this.erro = error;
      console.log('Erro: ', this.erro);
    });
  }
}
