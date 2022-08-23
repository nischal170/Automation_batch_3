export class products{
    clickproducts(){
        cy.get("a[title='Product']").click()
        cy.get("a[title='Product Category']").click()
        cy.get("div[id='page-title'] a:nth-child(1)").should("contain","Create Product Category").click()

    }
    addproductcategry(){
        cy.get('#select2-warehouseid-container').type("P{enter}")
      
    cy.get("input[name='icon']").attachFile('example.json')
    cy.get("input[name='background_image']").attachFile('example.json')
    

  

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
        cy.get('#select2-type-container').click()
        cy.get('#select2-type-results').each(($el, index, $list) => {
            //cy.log($el.text(),"**")
            if ($el.text() == 'Category') {
            
              cy.wrap($el).click()
            } 
          })
        
    }
    giveposition(pos){
        cy.get("#position").type(pos,{force:true}).should("have.value",pos)

    }
    givestatus(){
        cy.get("input[value='1']").click()

    }
    submit(){
        cy.get("div[class='col-sm-12'] button[class='btn btn-primary']").click()
    }
    

}