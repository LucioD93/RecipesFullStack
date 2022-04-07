describe('App Tests', () => {
    let page = global.page

    it('Should search in default data recipe name', async() => {
        await page.type('input', 'pizza')
        expect (await page.$eval('h4', el => el.innerText)).toContain('Hawaiian Pizza')
    })

    it('Should search in default data by ingredient', async() => {
        await page.$eval('input', el => el.value = '');
        await page.type('input', 'bread')
        expect (await page.$$eval('h4', el => el.length)).toEqual(2)
    })

    it('Should not return any data and display empty recipes label', async() => {
        await page.$eval('input', el => el.value = '');
        await page.type('input', 'I do not exists')
        expect (await page.$$eval('h4', el => el.length)).toEqual(0)
        expect (await page.$eval('.emptyRecipesLabel', el => el.innerText)).toEqual("We are sorry. We don't have any recipes matching your search.")
    })
    
    it('Should add a new ingredient', async() => {
        await page.type('#recipeNameInput', 'Sushi')
        await page.type('#recipeIngredientInput', 'Rice')
        await page.click('input[type=submit]')
        await page.$eval('input', el => el.value = '');
        await page.type('input', 'sushi')
        expect (await page.$eval('h4', el => el.innerText)).toContain('Sushi')
    })
})
