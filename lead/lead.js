var myApp = angular.module("myApp", []);

myApp.directive('myCustomer', function() {
  return {
    template: '<h1>Click here to download report</h1>'
  };
});

myApp.service("ContactService" , function(){
	var uid = 1;
	var contacts = [{id : 0,
					 'name' : 'Tom',
					 'regno' : '18It062',
           'year' : '2',
					 'phone' : '911-91-199-999',
           'category' : 'hostel',
           'queries' : 'nil'}];
	
	
	// Save Service for sving new contact and saving existing edited contact.
	this.save = function(contact)  
	{
		if(contact.id == null)                       
		{
			contact.id = uid++;
			contacts.push(contact);
		}
		else
		{
			for(i in contacts)
			{
				if(contacts[i].id == contact.id)
				{
					contacts[i] = contact;
				}
			}
		}
	}
	
	// serach for a contact
	
	this.get = function(id)
	{
		for(i in contacts )
		{
			if( contacts[i].id == id)
			{
				return contacts[i];
			}
		}
	}
	
	//Delete a contact
	this.delete = function(id)
	{
		for(i in contacts)
			{
				if(contacts[i].id == id)
				{
					contacts.splice(i,1);
				}
			}
	}
	
	//Show all contacts
	this.list = function()
	{
		return contacts;
	}		
});


myApp.factory('random', function() { 
            var randomObject = {}; 
            var months = ["Mr.XXX", "Mr.YYY", "Ms.preethi", "Ms.Kirthana", "Ms.Aruna", "Ms.Swethaa", "Mr.AVT"];
            var number = Math.floor(Math.random() * months.length);
            randomObject.generate = function() { 
                return months[number]; 
            }; 
            return randomObject; 
        }); 
        

      
////Controller area .....
	
myApp.controller("ContactController" , function($scope , ContactService, random){

		
		$scope.contacts = ContactService.list();
		
		$scope.saveContact = function()
		{
			ContactService.save($scope.newcontact);
			$scope.newcontact = {};
		}
		
		$scope.generateRandom = function()
		 { 
                $scope.randomNumber = random.generate();
            }

		$scope.delete = function(id)
		{
			ContactService.delete(id);
			if($scope.newcontact.id == id)
				{
					$scope.newcontact = {};
				}
		}
		
		$scope.edit = function(id)
		{
			$scope.newcontact = angular.copy(ContactService.get(id));
		}

		$scope.count = function()
		{
			ContactService.save($scope.newcontact);
			$scope.newcontact = {};
		}
		

});
myApp.controller("ChildController" , function($scope )
	{
	$scope.orderByMe = function(x) 
			{
                  $scope.myOrderBy = x;
              }
	});