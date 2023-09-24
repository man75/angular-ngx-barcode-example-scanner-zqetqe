import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  @ViewChild('scanner', { static: false }) scanner: BarecodeScannerLivestreamComponent;
  barcode: string;

  ngAfterViewInit() {
    this.scanner.start();
  }

  onValueChanges(result: any) {
    this.barcode = result.codeResult.code;
  }
}
