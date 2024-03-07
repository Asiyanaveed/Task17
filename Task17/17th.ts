let guest_list :string[]=['Bilal','Owais','faisal','fahim'];
let not_present :string='Fahim';
let new_guest: string='Abbo';
guest_list[3]=new_guest;
guest_list.unshift('Ali','Ahsun','Burhan');
console.log('\n Unfortunately we cannot  arrange big table only two people allow. ')
while(guest_list.length>2){
let remove_guest =guest_list.pop();
console.log(`Sorry Brother ${remove_guest} you are not invited for dinner.`);
}
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Brother'+ guest_list[i] +',\n Yes you are still  invited on today dinner.\n Thank you\n ');
}
guest_list.splice(0,2);
console.log (guest_list);

