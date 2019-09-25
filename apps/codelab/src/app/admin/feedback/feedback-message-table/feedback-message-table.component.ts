import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Message } from '@codelab/feedback/src/lib/message';

const clearTags = (value: string) => value.replace(/<[^>]+>/g, '').replace(/Angular Codelab \/ /, '');
const clearAllTags = (values: Message[]) =>
  values.map((m: Message) => ({ ...m, header: clearTags(m.header || 'No header') }))

@Component({
  selector: 'codelab-feedback-message-table',
  templateUrl: './feedback-message-table.html',
  styleUrls: ['./feedback-message-table.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackMessageTableComponent implements OnInit {
  @Output() closeMessage = new EventEmitter<{
    message: Message;
    reason: string;
  }>();
  @Output() takeMessage = new EventEmitter<{ message: Message }>();
  @ViewChild(MatMenuTrigger, { static: false }) private trigger: MatMenuTrigger;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input('dataSource')
  set dataSource(values: Message[]) {
    this._dataSource = new MatTableDataSource(clearAllTags(values));
  }
  _dataSource: MatTableDataSource<Message>;

  closeReasons = [
    { name: '[Duplicate]', reason: '[Duplicate]' },
    { name: '[No fix]', reason: '[No fix]' },
    { name: '[Done]', reason: '[Done]' },
    { name: '[Nice message]', reason: '[Nice message, though not a real bug]' },
    { name: '[Can\'t reproduce]', reason: '[Can\'t reproduce]' }
  ];

  tableColumns = ['comment', 'name', 'header', 'timestamp', 'actions'];

  ngOnInit() {
    this._dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'timestamp':
          return new Date(item.timestamp).toISOString();
        default:
          return item[property];
      }
    };
    this._dataSource.sort = this.sort;
  }

  onSelectCloseReason(closeReason) {
    this.closeMessage.emit({
      message: this.trigger.menuData.message,
      reason: closeReason
    });
  }

  onSelectTake() {
    this.takeMessage.emit({ message: this.trigger.menuData.message });
  }
}
