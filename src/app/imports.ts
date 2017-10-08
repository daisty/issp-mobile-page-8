// Component
import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { MyRadioComponent } from '../components/my-radio/my-radio';
import { MyBackComponent } from '../components/my-back/my-back';
import { ReviewReasonComponent } from '../components/reviewReason/reviewReason';
import { AreasSelect } from '../components/test/test';


// Pipes
import { StatusPipe } from '../pipes/status.pipes';
import { ColorPipe } from '../pipes/color/color';
import { TimePipe } from '../pipes/time.pipes';
import { SexPipe } from '../pipes/sex/sex';
import { CustomerPipe } from '../pipes/customer.pipes'

// Providers
import { ToastService } from '../providers/util/toast.service';
import { GlobalData } from '../providers/GlobalData';
import { ContactsProvider } from '../providers/contacts';

export const COMPONENTS = [
    AccordionListComponent,
    MyRadioComponent,
    MyBackComponent,
    ReviewReasonComponent,
    AreasSelect
];
export const PIPES = [
  StatusPipe,
  ColorPipe,
  TimePipe,
  SexPipe,
  CustomerPipe
];

export const PROVIDERS = [
    ToastService,
    GlobalData,
    ContactsProvider
];