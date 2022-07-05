/**
* @jest-environment jsdom
*/

const { expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../forum.html"), "utf8");


describe("forum.html",()=> {
    beforeEach(()=> {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head',()=>{
        it('has a title',()=>{
            const title = document.querySelector("head title");
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Matrix Media");
        })
    })

    describe("body",()=>{
        describe('sidebar',()=>{
            let sidebar;
            
            beforeEach(()=> {
                sidebarOptionActive= document.querySelector(".sidebarOption.active")
                sidebarOption= document.querySelector("#sidebarOption")
            })

            it("HOME", ()=>{
                expect(sidebarOptionActive).toBeTruthy();
                expect(sidebarOptionActive.className).toEqual("sidebarOption active")
                
            })

            // it("Explore", ()=>{
            //     expect(sidebarOption).toBeTruthy();
            //     // expect(sidebarOption.className).toEqual("sidebarOption")
            //     // expect(ghead.textContent).toEqual("Home")

            // })


        })

        // describe("feed", ()=>{
        //     beforeEach(()=>{
        //         feedHeader=document.querySelector(".feed__header")

        //     })

        //     it("feed",()=>{
        //         expect(feedHeader).toBeTruthy();
        //         expect(feedHeader.text).toEqual("Home")

        //     })

        // })

    })
})
