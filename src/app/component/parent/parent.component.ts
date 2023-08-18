import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Data } from './data.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  data = new BehaviorSubject<Data[]>(
    [{ id: 1, name: 'Item 1', description: 'This is Item 1 description.' },
    { id: 2, name: 'Item 2', description: 'This is Item 2 description.' }]
  );

  get data$() {
    return this.data.asObservable();
  }

  get dataValue() {
    return this.data.getValue();
  }

  addNewItem() {
    const newId = (this.dataValue.length + 1);
    const newItem: Data = {
      id: newId,
      name: `Item ${newId}`,
      description: `This is Item ${newId} description.`
    };
    this.data.next([...this.dataValue, newItem]);
  }

}
