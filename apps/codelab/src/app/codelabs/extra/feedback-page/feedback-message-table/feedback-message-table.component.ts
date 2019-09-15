import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'codelab-feedback-message-table',
  templateUrl: './feedback-message-table.html',
  styleUrls: ['./feedback-message-table.css'],
})
export class FeedbackMessageTableComponent implements OnInit {
  @Input() dataSource = [];
  @Output() onClose = new EventEmitter<{ message: any, reason: string }>();
  @Output() onTake = new EventEmitter<{ message: any }>();

  @ViewChild(MatMenuTrigger, { static: false }) private trigger: MatMenuTrigger;

  closeReasons = [
    { name: '[Duplicate]', reason: '[Duplicate]' },
    { name: '[No fix]', reason: '[No fix]' },
    { name: '[Done]', reason: '[Done]' },
    { name: '[Nice message]', reason: '[Nice message, though not a real bug]' },
    { name: '[Can\'t reproduce]', reason: '[Can\'t reproduce]' }
  ];

  tableColumns = ['comment', 'name', 'header', 'timestamp', 'actions'];

  ngOnInit() {

  }

  clearTags(value: string) {
    return value.replace(/<[^>]+>/g, '').replace(/Angular Codelab \/ /, '');
  }


  onSelectCloseReason(closeReason) {
    //console.log('Close', closeReason, this.trigger.menuData.message);
    this.onClose.emit({message:this.trigger.menuData.message, reason: closeReason})
    //this.createClosedIssue(this.trigger.menuData.message, closeReason);
  }
  onSelectTake() {
    this.onTake.emit({message:this.trigger.menuData.message});
  }

}
