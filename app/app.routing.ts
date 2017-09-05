import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes =[
	{ path:"", component: HomeComponent },
	{ path:"login", component: LoginComponent },
	{ path:"list", component: ListComponent }
];

export const navigatableComponents=[
	HomeComponent, LoginComponent, ListComponent
]