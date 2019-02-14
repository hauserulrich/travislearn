const fact=require('../../www/js/fancymath.js');
test
('FACTORIAL calculate', () =>
	{
		let res=fact(3);
		expect(res).toBe(6);
	}
)