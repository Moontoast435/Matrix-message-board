/**
* @jest-environment jsdom
*/

const { expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const { describe } = require("yargs");
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
                icon1=document.querySelector("#icon1")
                icon2=document.querySelector("#icon2")
                icon3=document.querySelector("#icon3")
                icon4=document.querySelector("#icon4")
                icon5=document.querySelector("#icon5")
                icon6=document.querySelector("#icon6")
                icon7=document.querySelector("#icon7")
                icon8=document.querySelector("#icon8")
                h2_1=document.querySelector('#sidebarH2_1')
                h2_2=document.querySelector('#sidebarH2_2')
                h2_3=document.querySelector('#sidebarH2_3')
                h2_4=document.querySelector('#sidebarH2_4')
                h2_5=document.querySelector('#sidebarH2_5')
                h2_6=document.querySelector('#sidebarH2_6')
                h2_7=document.querySelector('#sidebarH2_7')
                h2_8=document.querySelector('#sidebarH2_8')

            })

            it("has a home tag", ()=>{
                expect(h2_1).toBeTruthy;
                expect(h2_1.textContent).toEqual('Home')
                
            })


            it("has a explore tag", ()=>{
                expect(h2_2).toBeTruthy;
                expect(h2_2.textContent).toEqual('Explore')
                
            })


            it("has a notification tag", ()=>{
                expect(h2_3).toBeTruthy;
                expect(h2_3.textContent).toEqual('Notifications')
                
            })


            it("has a messages tag", ()=>{
                expect(h2_4).toBeTruthy;
                expect(h2_4.textContent).toEqual('Messages')
                
            })


            it("has a bookmarks tag", ()=>{
                expect(h2_5).toBeTruthy;
                expect(h2_5.textContent).toEqual('Bookmarks')
                
            })


            it("has a lists tag", ()=>{
                expect(h2_6).toBeTruthy;
                expect(h2_6.textContent).toEqual('Lists')
                
            })


            it("has a profile tag", ()=>{
                expect(h2_7).toBeTruthy;
                expect(h2_7.textContent).toEqual('Profile')
                
            })


            it("has a more tag", ()=>{
                expect(h2_8).toBeTruthy;
                expect(h2_8.textContent).toEqual('More')
                
            })

            it("test for span",()=>{
                expect(icon1).toBeTruthy;
                expect(icon1.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon2).toBeTruthy;
                expect(icon2.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon3).toBeTruthy;
                expect(icon3.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon4).toBeTruthy;
                expect(icon4.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon5).toBeTruthy;
                expect(icon5.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon6).toBeTruthy;
                expect(icon6.tagName).toEqual('SPAN')
            })

            it("test for span",()=>{
                expect(icon7).toBeTruthy;
                expect(icon7.tagName).toEqual('SPAN')
            })


            it("test for span",()=>{
                expect(icon8).toBeTruthy;
                expect(icon8.tagName).toEqual('SPAN')
            })


            // it("Explore", ()=>{
            //     expect(sidebarOption).toBeTruthy();
            //     // expect(sidebarOption.className).toEqual("sidebarOption")
            //     // expect(ghead.textContent).toEqual("Home")

            // })


        })


        describe('feed',()=>{
            beforeEach(()=>{
                feedH2=document.querySelector('#feedH2')

            })

            it('title of home',()=>{
                expect(feedH2).toBeTruthy;
                expect(feedH2.textContent).toBe('Home')
            })
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
