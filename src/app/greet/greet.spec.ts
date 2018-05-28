
import { greet} from './greet';
describe ('greet', () => { //greet suit
	it('should include name in the message ', () =>	{
		expect(greet('angel')).toContain('angel');
	})
})
