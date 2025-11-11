import { Component, input, output } from '@angular/core';
import { ChevronTop } from "../../icons/chevron-top/chevron-top";
import { FormsModule } from '@angular/forms';
import { selectType } from '../../types/select.types';

@Component({
  selector: 'app-select',
  imports: [ChevronTop, FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class Select {
  isOpen: boolean = false;
  private closeTimeout: any;

  currentFilter = input<selectType>('all');
  filterChange = output<selectType>();

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const filter = selectElement.value as selectType;
    this.filterChange.emit(filter);
  }

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
