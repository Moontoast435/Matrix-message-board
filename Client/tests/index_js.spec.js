
/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
// require('jest-canvas-mock');
// const { canvasBackground } = require('../Assets/index.js');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


let app;


let canvas;
let ctx;
describe('allPosts', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        // app = require('../Assets/index.js')
        // canvas = document.createElement("canvas");
        // ctx = canvas.getContext("2d");
        // canvas.width = 400;
        // canvas.height = 300;
        // ctx.setTransform(1, 2, 3, 4, 5, 6);
        // const createElement = document.createElement.bind(document);
        // document.createElement = (tagName) => {
        //     if (tagName === 'canvas') {
        //         return {
        //             getContext: () => ({}),
        //             measureText: () => ({})
        //         };
        //     }
        //     return createElement(tagName);
        // };
    })

    
    describe('draw', () => {
        let canvas, ctx;
        beforeEach(function() {
            
            // canvas = document.querySelector('canvas');
            // ctx = canvas.getContext('2d');
        });
    
        it(`should return the shape's path`, function() {
            // const shapePath = draw(ctx);
            // expect(shapePath instanceof Path2D).toBeTruthy();

            const canvas=document.querySelector("canvas");
            expect(canvas).toBeTruthy;
            // expect(typeof draw).toBe('function');

        });
    
        // it(`should draw a house on the canvas using the main ctx`, function() {
        //     draw(ctx);
        //     const events = ctx.__getEvents();
    
        //     expect(events).toMatchSnapshot();
        // });
    });

   

    
   
    
    
})
