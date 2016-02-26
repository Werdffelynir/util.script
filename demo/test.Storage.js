(function (){

    var res = null;

    if(!Util.Storage('data-123')){

    	var data132 = {
    		id: 123,
    		name: 'jopa'
    	};

    	res = Util.Storage('data-123', data132);

    	console.log('Set data', res);
    }
    else{
    	res = Util.Storage('data-123');
    	console.log('Get data', res);


    	res = Util.Storage('data-123', false);
    	console.log('Remove data', res);


    	res = Util.Storage('data-123');
    	console.log('After remove data', res);

    }

})();

