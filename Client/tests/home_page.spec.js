/**
* @jest-environment jsdom
*/

const { expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", ()=> {
    beforeEach(()=> {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () =>{
        it('has a title', ()=>{
            const title = document.querySelector("head title");
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Pick a Pill")
        })
    })

    describe("body", () => {
        describe('header', () => {
            let header;
            let nav, heading;

            beforeEach(() => {
                p = document.querySelector("p");
                imgRedPill = document.querySelector(".redpill");
                imgBluePill = document.querySelector(".bluepill");
                morphimg=document.querySelector(".morph");

                // heading = header.querySelector("h1");
            })

            it("exists", () => {
                expect(p).toBeTruthy();
                expect(p.textContent).toEqual("PICK A PILL");
            })

            it("has the right title", () => {
                expect(imgRedPill).toBeTruthy();
                expect(imgRedPill.title).toEqual("Red Pill");
                expect(imgBluePill).toBeTruthy();
                expect(imgBluePill.title).toEqual("Blue Pill");
            })

            it("has an image of morph", ()=>{
                expect(morphimg).toBeTruthy();
                expect(morphimg.title).toEqual("Morpheus");

            })
            
        })


    })
})


//so far all test passed, we will add any additional test if needed
