import * as THREE from './three.js-dev/build/three.module.js';

const leftEyeArray = new Array(4);
const rightEyeArray = new Array(4);
const leftEye = new Array(4);
const LeftEyeHorizenLineMaterial = new THREE.LineBasicMaterial({color: 0xff0000});
const LeftEyeVerticalLinematerial = new THREE.LineBasicMaterial({color: 0x00ff00});
const RightEyeHorizenLineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff});
const RightEyeVerticalLinematerial = new THREE.LineBasicMaterial({color: 0x00ffff});

export class Line{
    constructor(intersects, pointZ, horizon, EyeIndex){//horizon: 水平為true垂直為false
        console.log(EyeIndex);
        if(horizon){//畫橫線
            if(EyeIndex % 2 == 1){
                let points = [];
                // let eyeXY = [intersects.x , intersects.y];  //存取眼睛座標
                points.push(new THREE.Vector3(0, intersects, pointZ));
                points.push(new THREE.Vector3(1000, intersects, pointZ));

                let geometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineL = new THREE.Line(geometry, LeftEyeHorizenLineMaterial);
                lineL.name = EyeIndex;
                // scene.add(lineL);
                leftEyeArray[EyeIndex] = lineL;
                this.line = lineL;
            }else{
                let points = [];
                points.push(new THREE.Vector3(0, intersects, pointZ));
                points.push(new THREE.Vector3(-1000, intersects, pointZ));

                let geometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineR = new THREE.Line(geometry, RightEyeHorizenLineMaterial);
                lineR.name = EyeIndex;
                //scene.add(lineR);
                rightEyeArray[EyeIndex] = lineR;
                this.line = lineR;
            }
        }
        else{//畫直線
            if(EyeIndex % 2 == 1){
                let points = [];
                // let eyeXY = [intersects.x , intersects.y];  //存取眼睛座標
                points.push(new THREE.Vector3(intersects, 0, pointZ));
                points.push(new THREE.Vector3(intersects, 1000, pointZ));

                let geometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineL = new THREE.Line(geometry, LeftEyeVerticalLinematerial);
                lineL.name = EyeIndex;
                // scene.add(lineL);
                rightEyeArray[EyeIndex] = lineL;
                this.line = lineL;
            }else{
                let points = [];
                points.push(new THREE.Vector3(intersects, 0, pointZ));
                points.push(new THREE.Vector3(intersects, 1000, pointZ));

                let geometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineR = new THREE.Line(geometry, RightEyeVerticalLinematerial);
                lineR.name = EyeIndex;
                //scene.add(lineR);
                rightEyeArray[EyeIndex] = lineR;
                this.line = lineR;
            }
        }
    }

    getLightEyeArray(){
        return leftEyeArray;
    }

    getRightEyeArray(){
        return rightEyeArray;
    }

    getLeftEyePoints(){
        return leftEye;
    }

    show(scene){
        //console.log(scene);
        scene.add(this.line);
    }

    remove(scene){
        for(let i = scene.children.length-1; i >= 0; i--){
            if(scene.children[i].type == 'Line'){
                let obj = scene.children[i];
                scene.remove(obj);
            }
        }
    }
}