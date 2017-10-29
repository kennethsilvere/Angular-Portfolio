import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductsService } from './products/products.service';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const appRoutes: Routes = [
  { path:'', redirectTo:'about', pathMatch:'full' },
  { path:'products', component: ProductsComponent },
  { path:'about', component: AboutComponent },
  { path:'skills', component: SkillsComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'experience', component: ExperienceComponent },
  { path:'education', component: EducationComponent },
  { path:'aboutapp', component: AboutAppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    AboutAppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
