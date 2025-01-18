'My name is: ';
'My name is: '

'Mukul Joshi';
'Mukul Joshi'

'My name is: ' + 'Mukul Joshi';
'My name is: Mukul Joshi'

'Total cost: $' + (5 + 3)
'Total cost: $8'

`Total cost: $${5 + 3}`;
'Total cost: $8'

alert(`Total cost: $${5 + 3}`);

'Total cost: ' + ((599 + 295) / 100);
'Total cost: 8.94'

`Total cost: $${((599 + 295) / 100)}`
'Total cost: $8.94'

alert(`Total cost: $${((599 + 295) / 100)}`);

alert(`Total cost: $${((599 + 295) / 100)}\n Thank you, come again!`);

`Items (${2 + 2}): $${((2095 + 799) * 2) / 100}`;
'Items (4): $57.88'
`Shipping & handling: $${(499 + 499) / 100}`;
'Shipping & handling: $9.98'
`Total before tax: $${(((2095 + 799) * 2) + (499 + 499)) / 100}`
'Total before tax: $67.86'
`Estimated tax(10%): $${Math.round((((2095 + 799) * 2) + (499 + 499)) * 0.1) / 100}`
'Estimated tax(10%): $6.79'
`Order total: $${((((2095 + 799) * 2) + (499 + 499)) + Math.round((((2095 + 799) * 2) + (499 + 499)) * 0.1)) / 100}`
'Order total: $74.65'