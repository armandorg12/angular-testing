import { greet{ from './greet';
describe ('greet',()	{ //gree suit
	it('should include name in the message ', ()	{
		expect(greet('angel')).toCOntain('angel');
	})
})
