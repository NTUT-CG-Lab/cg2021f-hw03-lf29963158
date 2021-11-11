import {Line} from './line.js'


export class Labels{

    constructor(xMin, yMin, xMax, yMax, EyeIndex){
        this.leftEyeVerticalLabelLineArray = new Array(9);
        this.leftEyeHorizonLabelLineArray = new Array(5);
        this.RightVerticalLabelLineArray = new Array(9);
        this.RightHorizonLabelLineArray = new Array(5);

        const pointZ = 24;
        const intervalX = Math.abs(xMax - xMin) / 8;
        const intervalY = Math.abs(yMax - yMin) / 4;
        let Dx = 0, Dy = 0;
        
        console.log(xMin, yMin, xMax, yMax);

        for(let i = 0; i < 9; i++){//左眼垂直
            Dx = intervalX * i;
            this.leftEyeVerticalLabelLineArray[i] = new Line(xMin+Dx, pointZ, false, 1);
        }

        for(let i = 0; i < 5; i++){//左眼水平
            Dy = intervalY * i;
            this.leftEyeHorizonLabelLineArray[i] = new Line(yMin+Dy, pointZ, true, 1);
        }

        for(let i = 0; i < 9; i++){//右眼垂直
            Dx = intervalX * i;
            this.RightVerticalLabelLineArray[i] = new Line(-xMin-Dx, pointZ, false, 2);
        }

        for(let i = 0; i < 5; i++){//右眼水平
            Dy = intervalY * i;
            this.RightHorizonLabelLineArray[i] = new Line(yMin+Dy, pointZ, true, 2);
        }

    }

    show(scene, eyeIndex){
        // console.log(this.leftEyeVerticalLabelLineArray);
        // console.log(this.leftEyeHorizonLabelLineArray);
        // console.log(this.RightVerticalLabelLineArray);
        // console.log(this.RightHorizonLabelLineArray);

        if(eyeIndex % 2 == 1){
            for(let i = 0; i < 9; i++){//左眼垂直
                this.leftEyeVerticalLabelLineArray[i]?.show(scene);
            }
    
            for(let i = 0; i < 5; i++){//左眼水平
                this.leftEyeHorizonLabelLineArray[i]?.show(scene);
            }
    
        }else{
            for(let i = 0; i < 9; i++){//右眼垂直
                this.RightVerticalLabelLineArray[i]?.show(scene);
            }
    
            for(let i = 0; i < 5; i++){//右眼水平
                this.RightHorizonLabelLineArray[i]?.show(scene);
            }
        }
    
    }
    remove(scene, eyeIndex){
        if(eyeIndex % 2 == 1){
            for(let i = 0; i < 9; i++){//左眼垂直
                this.leftEyeVerticalLabelLineArray[i]?.remove(scene);
            }
    
            for(let i = 0; i < 5; i++){//左眼水平
                this.leftEyeHorizonLabelLineArray[i]?.remove(scene);
            }
    
        }else{
            for(let i = 0; i < 9; i++){//右眼垂直
                this.RightVerticalLabelLineArray[i]?.remove(scene);
            }
    
            for(let i = 0; i < 5; i++){//右眼水平
                this.RightHorizonLabelLineArray[i]?.remove(scene);
            }
        }
    }


}