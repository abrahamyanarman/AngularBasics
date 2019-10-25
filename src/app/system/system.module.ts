import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {SystemComponent} from "./system.component";
import {BillPageComponent} from './bill-page/bill-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {DropdownDirectives} from "./shared/directives/dropdown.directives";
import {BillCardComponent} from './bill-page/bill-card/bill-card.component';
import {CurrencyCardComponent} from './bill-page/currency-card/currency-card.component';
import {BillService} from "./shared/services/bill.service";
import {HistoryChartComponent} from "./history-page/history-chart/history-chart.component";
import {HistoryDetailComponent} from "./history-page/history-detail/history-detail.component";
import {HistoryEventsComponent} from "./history-page/history-events/history-events.component";
import {HistoryFilterComponent} from "./history-page/history-filter/history-filter.component";
import {AddCategoryComponent} from "./records-page/add-category/add-category.component";
import {AddEventComponent} from "./records-page/add-event/add-event.component";
import {EditCategoryComponent} from "./records-page/edit-category/edit-category.component";
import {MomentPipe} from "./shared/pipes/moment.pipe";
import {FilterPipe} from "./shared/pipes/filter.pipe";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CategoriesService} from "./shared/services/categories.service";
import {EventsService} from "./shared/services/events.service";
import {DropdownDirective} from "./shared/directives/dropdown.directive";


@NgModule({
  declarations: [
    SystemComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirectives,
    BillCardComponent,
    CurrencyCardComponent,
    HistoryChartComponent,
    HistoryDetailComponent,
    HistoryEventsComponent,
    HistoryFilterComponent,
    AddCategoryComponent,
    AddEventComponent,
    EditCategoryComponent,
    MomentPipe,
    FilterPipe,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    SystemRoutingModule
  ],
  providers:[
    BillService,
    CategoriesService,
    EventsService
  ]
})
export class SystemModule {

}
