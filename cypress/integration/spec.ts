describe('Custom Input Form Component', () => {

  const typeComponent = 'app-text-field-form'

  beforeEach(() => {
    cy.visit('/')
  })

  it('Default', () => {
    cy.get(typeComponent).contains('Another name')
  })

  it('Filled', () => {
    const foo = 'Hello, World';
    cy.get(typeComponent).type(foo)
    cy.get(`${typeComponent} > input`).should('have.value', foo)
  })

  it('Active', () => {
    const foo = 'Hello, World';
    cy.get(`${typeComponent} > input`).first().focus()
    cy.get(`${typeComponent} > input`).should('have.css', 'border', '1px solid rgb(146, 119, 255)')
  })
})
