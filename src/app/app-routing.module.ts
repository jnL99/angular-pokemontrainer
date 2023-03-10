import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";
import { LoginPage } from "./pages/login/login.page";
import { PokemonCataloguePage } from "./pages/pokemon-catalogue/pokemon-catalogue.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

//Angular routes.
const routes: Routes = [
    {
        path: "",
        pathMatch:"full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage,
        canActivate: [ LoginGuard ]
    },
    {
        path: "pokemons",
        component: PokemonCataloguePage,
        canActivate: [ AuthGuard ]
    },
    {
        path: "trainer",
        component: TrainerPage,
        canActivate: [ AuthGuard ]
    }
]

@NgModule({
    imports: [
        //Import a module
        RouterModule.forRoot(routes)
    ], 
    exports: [
        //Expose module and its features
        RouterModule
    ] 

})
export class AppRoutingModule{}