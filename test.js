import { expect } from 'chai'
import agent from 'superagent-bluebird-promise'
import mysql from 'mysql'


describe('tests', () => {
	it('should connect to db', done => {
		var con = mysql.createConnection({
			host: "localhost",
			user: "jon@localhost",
			password: "password",
			insecureAuth : true
		  });
	  
		  con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
			done()
		  });
	})
	it('should instantiate zoho sdk without errors', done => {
		var ZCRMRestClient = require('zcrmsdk')
		ZCRMRestClient.initialize().then(res => {
			var input ={};
			input.module = "Leads";
			var params = {};
			params.page = 0;
			params.per_page = 5;
			input.params = params;
			ZCRMRestClient.API.MODULES.get(input).then(function(response){
				console.log(response)
                
            })
		})
	})
})