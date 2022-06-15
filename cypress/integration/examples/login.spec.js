describe("Working with Inputs", () => {
	it("should override the current time", () => {
		const date = new Date(2021, 6, 1).getTime() // return a timestamp

		cy.clock(date)

		cy.log(date)
	})

	it("should load login page", () => {
		cy.visit("http://zero.webappsecurity.com/login.html")

		// Verify that we landed on the correct page
		cy.url().should("include", "login.html")

		// Clear Cookies
		cy.clearCookies({ log: true })

		// Clear Local Storage
		cy.clearLocalStorage("your item", { log: true })
	})

	it("should check if the correct page title is appearing on the browser tab", () => {
		cy.title().should("include", "Zero - Log in")
	})

	it("should fill username", () => {
		cy.get("#user_login").as("username")

		cy.get("@username").clear()

		cy.get("@username").type("Some Invalid Name", { delay: 50 })
	})

	it("should fill password", () => {
		cy.get("#user_password").as("password")

		cy.get("@password").clear()

		cy.get("@password").type("Some Invalid Password", { delay: 50 })
	})

	it("should mark checkbox", () => {
		cy.get('input[type="checkbox"]').click()

		cy.wait(3000)
	})

	it("should submit login form", () => {
		cy.contains("Sign in").click()
	})

	it("should display error message", () => {
		cy.get(".alert-error")
			.should("be.visible")
			.and("contain", "Login and/or password are wrong.")
	})
})
