//
// sample contacts creation
// WARNING: this file should only be used in a emulator, not on your phone
// you could erase all of your contacts.
//

var BASE_CONTACTS = [
	{'displayName': 'Marie Testu', 'phoneNumber':'06 89 34 57 33', 'email': 'mtestu@hotmail.com', 'photoUrl': 'http://m4.licdn.com/mpr/mpr/shrink_100_100/p/4/000/145/015/1a4c5ed.jpg'},
	{'displayName': 'Philippe Dubert', 'phoneNumber':'06 57 33 89 34', 'email': 'pdubert@gmail.com', 'photoUrl': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/015/017/174ca01.jpg'},
	{'displayName': 'Francois Damien', 'phoneNumber':'06 89 68 34 56', 'email': 'fdamien@wanadoo.fr', 'photoUrl': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/0cc/12c/1c01ee7.jpg'},
	{'displayName': 'Etienne Lemoine', 'phoneNumber':'06 88 45 38 52', 'email': 'elemoine@gmail.com', 'photoUrl': 'http://media02.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/035/0e3/0920046.jpg'},
	{'displayName': 'Khalid Alaoui', 'phoneNumber':'06 23 78 45 98', 'email': 'khalid@hotmail.com', 'photoUrl': 'http://media02.linkedin.com/mpr/mpr/shrink_60_60/p/3/000/016/28f/1a70407.jpg'},
	{'displayName': 'Pierre Levert', 'phoneNumber':'06 99 23 77 12', 'email': 'plevert@wanadoo.fr', 'photoUrl': 'http://media03.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/0fe/1aa/15318f6.jpg'},
	{'displayName': 'Antoine Dumont', 'phoneNumber':'06 12 67 34 98', 'email': 'dumont@gmail.com', 'photoUrl': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/1/000/01a/2ab/2e8bbcc.jpg'},
	{'displayName': 'Basile Imbert', 'phoneNumber':'06 90 56 88 32', 'email': 'bimbert@live.com', 'photoUrl': 'http://media03.linkedin.com/mpr/mpr/shrink_60_60/p/3/000/04f/378/07a868b.jpg'},
	{'displayName': 'Kevin Dupont', 'phoneNumber':'06 98 67 23 45', 'email': 'kdupont@wanadoo.fr', 'photoUrl': 'http://media03.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/0bc/325/12ee256.jpg'},
	{'displayName': 'Celine Tarto', 'phoneNumber':'06 92 67 34 34', 'email': 'ctarto@gmail.com', 'photoUrl': 'http://media02.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/101/3f0/2055d3a.jpg'},
	{'displayName': 'Christelle Corrot', 'phoneNumber':'06 07 55 39 88', 'email': 'corrotc@hotmail.com', 'photoUrl': 'http://media03.linkedin.com/mpr/mpr/shrink_60_60/p/2/000/105/2fd/11558a7.jpg'},
	{'displayName': 'Gaelle Lapince', 'phoneNumber':'06 12 13 78 99', 'email': 'lapince@gmail.com', 'photoUrl': 'http://media03.linkedin.com/mpr/mpr/shrink_60_60/p/1/000/124/35f/2dedc0b.jpg'},
	{'displayName': 'Cécile Bolac', 'phoneNumber':'06 23 89 34 23', 'email': 'bolacc@gmail.com', 'photoUrl': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/3/000/106/32d/0774cbb.jpg'},
	{'displayName': 'Magalie Lepetit', 'phoneNumber':'06 99 34 48 55', 'email': 'mlepetit@live.com', 'photoUrl': 'http://media01.linkedin.com/mpr/mpr/shrink_60_60/p/3/000/128/3df/389f78d.jpg'}
];

function delContacts() {
	// WARNING: find all contacts and DELETE thems !
	navigator.contacts.find(['displayName'], function(contacts) {
		// delete all contacts !
		for (var i=0; i<contacts.length;i++) contacts[i].remove();
	}, function() {
		navigator.notification.alert("error getting phone contacts");
	});
}

function createContact(contactInfo) {
	// creates a single contact
	var ct = navigator.contacts.create({
		'displayName': contactInfo.displayName
	});
	ct.phoneNumbers = [ new ContactField('mobile', contactInfo.phoneNumber, true) ];
	ct.emails = [ new ContactField('work', contactInfo.email, true) ];
	ct.photos = [ new ContactField('url', contactInfo.photoUrl) ];
	ct.save();
}

function createContacts() {
	// create initial contact list
	for (var i=0; i<BASE_CONTACTS.length;i++)  createContact(BASE_CONTACTS[i]);
	navigator.notification.alert(BASE_CONTACTS.length + " contacts created");
}
