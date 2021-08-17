// import { screen } from '@testing-library/react';


describe('App Tests', () => {
    let page = global.page

    it('Should search in default data recipe name', async() => {
        await page.type('input', 'pizza')
        expect (await page.$eval('h4', el => el.innerText)).toContain('Recipe: hawaiian pizza')
    })

    it('Should search in default data by ingredient', async() => {
        await page.$eval('input', el => el.value = '');
        await page.type('input', 'bread')
        expect (await page.$$eval('h4', el => el.length)).toEqual(2)
    })
})
