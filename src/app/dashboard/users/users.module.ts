import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';



@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class UsersModule { }
