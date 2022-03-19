// import { Timestamp } from './timestamp.model';
import { Timestamp } from 'firebase/firestore';

export interface DocumentBase {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
