export class products{
    clickproducts(){
        cy.get("a[title='Product']").click()
        cy.get("a[title='Product Category']").click()
        cy.get("div[id='page-title'] a:nth-child(1)").should("contain","Create Product Category").click()

    }
    addproductcategry(){
        cy.get('#select2-warehouseid-container').type("P{enter}")
    }
    
    addimages(icon,background){
    cy.get("input[name='icon']").attachFile(icon)
    cy.get("input[name='background_image']").attachFile(background)
    

    }
    giveCategory(cat){
        cy.get("input[placeholder='==== Select Parent Category =====']").type(cat).should("have.value",cat)
    }


    givetitle(title){
        cy.get("#title").type(title).should("have.value",title)

    }
    givedescription(string){
        cy.get('#description').type(string).should("have.value",string)

    }
    givetype(){

        //if html is given in select form type
        //use this cy.get('select[name='type]').select("Category With Profile",{force:true})
        //use this in case of no html given
        cy.get('.select2-selection[aria-controls="select2-type-container"]').click().then(res=>{
            cy.get('.select2-search__field').type("Category With Profile")
            cy.get('.select2-results').contains('Category With Profile').click()
        })
       
    }
    giveposition(pos){
        cy.get("#position").type(pos,).should("have.value",pos)

    }
    givestatus(){
        cy.get("input[value='1']").click()

    }
    submit(){
        cy.get("div[class='col-sm-12'] button[class='btn btn-primary']").click()
    }
    

}