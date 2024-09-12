import { Component } from '@angular/core';
import { CodeGeneratorComponent } from '../../features/code-generator/code-generator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CodeGeneratorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
