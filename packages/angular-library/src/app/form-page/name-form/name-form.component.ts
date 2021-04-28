import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameFormComponent implements OnInit {

  
  constructor() {
  }
  
  @Input()
  control: any = { value: '' }

  @Input()
  onChange: (val) => void


  testValue = "hello name"


  ngOnInit(): void {
  }


  handleInputChange(event) {
    const onChange = this.onChange

    if (typeof onChange === 'function') {

      onChange(event.target.value)
    }
  }

}
