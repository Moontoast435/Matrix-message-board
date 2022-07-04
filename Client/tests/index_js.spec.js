


const { expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const { describe } = require("yargs");
const {canvasBackground} = require('../Assets/index.js')
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("test for index.js", ()=> {
    beforeEach(()=> {
        document.documentElement.innerHTML = html.toString();
        app=require('../Assets/index.js')
    });


    describe('canvas',()=>{
        it('has a canvas variable',()=>{
            const canvas=document.querySelector("canvas");
            expect(canvas).toBeTruthy;

        })
    })

    

});


//need to install canvas, jest-canvas-mock packages to test 
