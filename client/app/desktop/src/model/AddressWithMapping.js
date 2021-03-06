Ext.define("Df.model.AddressWithMapping", {
	extend: "Ext.data.Model",

	fields: [ {
		name: "id",
		mapping: 0
	}, {
		name: "lastName",
		mapping: 1
	}, {
		name: "firstName",
		mapping: 2
	}, {
		name: "street",
		mapping: 3
	}, {
		name: "zip",
		mapping: 4
	}, {
		name: "city",
		mapping: 5
	}, {
		name: "country",
		mapping: 6
	}, {
		name: "lat",
		mapping: 7
	}, {
		name: "lng",
		mapping: 8
	}, {
		name: "email",
		mapping: 9
	}, {
		name: "dob",
		type: 'date',
		mapping: function(data) {
		    return new Date(data[10] * 86400000);
		}
	} ]
});