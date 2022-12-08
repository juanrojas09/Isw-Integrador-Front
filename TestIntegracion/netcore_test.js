Feature('netcore');



const expect = require('chai').expect;
const {I} = inject();

Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('https://isw3-integrador-production.up.railway.app/');
	expect(res.status).to.eql(200);
});

/*Scenario('Verify return value', async () => {
	const res = await I.sendGetRequest('https://isw3-integrador-production.up.railway.app/');
	//console.log(res);
    expect(res.status).to.eql(200);
	expect(res.data.message).to.eql('Ruta default del proyecto integrador de ISW3');
});*/

Scenario('Verify return data', async () => {
	const res = await I.sendGetRequest('https://isw3-integrador-production.up.railway.app/juan');
	//console.log(res);
	expect(res.status).to.eql(200);
});
