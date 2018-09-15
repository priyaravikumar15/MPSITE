import { Component, Output, EventEmitter ,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MSite';

  @Output()
  acount = new EventEmitter<number>();

  updateaddcart(e:number)
  {
    return this.acount.emit(e);
  }
}
