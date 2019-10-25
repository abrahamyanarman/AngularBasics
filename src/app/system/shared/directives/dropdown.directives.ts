import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector:'[hmDropDown]'
})
export class DropdownDirectives {

  @HostBinding('class.open')isOpen = false;

  @HostListener('click') onClick(){
    this.isOpen = !this.isOpen;
  }
}

