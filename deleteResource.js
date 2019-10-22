const cloudinary = require('cloudinary'),
    resources = require('./results_complement_albummascota.json')

cloudinary.config({
    cloud_name: 'weepec',
    api_key: '891136331775541',
    api_secret: '8BqgiIbiP9fa7pC-WLFqDqoNESI'
});

let public_ids = resources.map( public_id => `albummascota/${public_id}`);


(async() => {
    for (let index = 0; index < Math.ceil(public_ids.length); index += 100) {
        await timeout(3000);
        let end = index + 100;
        let group_ids = public_ids.slice(index, end);
        console.log(index, end);
        cloudinary.v2.api.delete_resources(group_ids, function(err, result){
            // console.log(err);
            // console.log(result);
        }); 
    }
})();

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}