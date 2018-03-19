const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () =>{
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Carlos', 30);
        expect(spy).toHaveBeenCalledWith('Carlos', 30);
    });


    it('should call saveUser with user object', () => {
        var email = 'carlos@teste.com';
        var password = '123456';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
})
