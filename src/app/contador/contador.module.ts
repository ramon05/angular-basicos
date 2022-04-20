import { NgModule } from '@angular/core';
import { ContadorComponet } from './contador/contador.component';




@NgModule({
    declarations:[
        ContadorComponet
    ],
    exports:[
        ContadorComponet
    ],
    imports:[

    ],
    providers:[]
})
export class ContadorModule{

}



