describe('Проверка авторизации', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
        cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
         })
    it('Востановление пароля', function () {
    	cy.visit('https://login.qa.studio/'); // Зашел на сайт
    	cy.get('#forgotEmailButton').click(); // Нажал "Забыли пароль"
    	cy.get('#mailForgot').type('maxim@qa.studio'); // Ввел емейл
    	cy.get('#restoreEmailButton').click(); // Нажали на кнопку "Отправить код"
    	cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
    	cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
    	cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
    	 })


    it('Правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввел НЕверный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
    	cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
    	 })

    it('НЕправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('g_erman@dolnikov.ru'); // Ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
    	cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
    	 })


    it('Логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
    	cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
    	 })


    it('Правильный логин с разными регистрами и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел верный логин с разными регистрами
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажимаю войти
        cy.get('#messageHeader').should('be.visible') // Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Крестик виден пользователю
    	cy.get('#exitMessageButton > .exitIcon').click(); // Нажал на крестик
    	 })



    })

    
       
