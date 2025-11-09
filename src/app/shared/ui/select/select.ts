import { Component } from '@angular/core';
import { ChevronTop } from "../../icons/chevron-top/chevron-top";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [ChevronTop, FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
  selectedOption: string = 'all';
  isOpen: boolean = false;
  private closeTimeout: any;

  toggleSelect(): void {
    this.isOpen = !this.isOpen;

    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    
    if (this.isOpen) {
      this.closeTimeout = setTimeout(() => {
        this.isOpen = false;
        const selects = document.querySelectorAll('.select-native');
        selects.forEach(select => (select as HTMLSelectElement).blur());
      }, 5000);
    }
  }
}
