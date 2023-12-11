import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
})
export class SimpleDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SimpleDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null],
    });
  }

  public addCharacter() {
    console.log(this.form.get('username')?.value);
    this.dialogRef.close(this.form.get('username')?.value);
  }
}
