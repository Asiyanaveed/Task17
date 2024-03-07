var guest_list = ['Bilal', 'Owais', 'faisal', 'fahim'];
var not_present = 'Fahim';
var new_guest = 'Abbo';
guest_list[3] = new_guest;
guest_list.unshift('Ali', 'Ahsun', 'Burhan');
console.log('\n Unfortunately we cannot  arrange big table only two people allow. ');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Brother ".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Brother' + guest_list[i] + ',\n Yes you are still  invited on today dinner.\n Thank you\n ');
}
guest_list.splice(0, 2);
console.log(guest_list);
