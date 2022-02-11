import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Invalid banana in box</h2>
    <app-favorite-fruit ([fruit])="favoriteFruit"></app-favorite-fruit>
    <!-- Fix me with \`[(fruit)]="favoriteFruit"\`! -->

    <h2>Nullish coalescing not nullable</h2>
    <div>{{ userName ?? 'root' }}</div>
    <!-- Fix me with \`{{ userName }}\`! -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteFruit = 'banana';
  userName = 'root';
}

@Component({
  selector: 'app-favorite-fruit',
  template: `<div>My favorite fruit is: {{fruit}}</div>`,
})
export class FavoriteFruitComponent {
  @Input() fruit: string = '';
  @Output() fruitChange = new EventEmitter<string>();
}
