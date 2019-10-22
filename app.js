const cloudinary = require('cloudinary'),
    fs = require('fs');

cloudinary.config({
    cloud_name: 'weepec',
    api_key: '891136331775541',
    api_secret: '8BqgiIbiP9fa7pC-WLFqDqoNESI'
});


public_ids = [];
console.log("Working");
(function next(next_cursor) {
    console.log("Wait....", next_cursor);
    let options = { type: 'upload', prefix: 'albummascota/', max_results: 500};
    if (next_cursor) options.next_cursor = next_cursor;
    cloudinary.v2.api.resources(options, function (error, results) {
        if (results.hasOwnProperty("next_cursor")) {
            results.resources.map((result) => {
                let public_id = result.public_id.split('albummascota/')[1];
                public_ids.push(public_id);
            });
            return next(results.next_cursor);
        }
        let data = JSON.stringify(public_ids, null, 2);
        fs.writeFileSync('resources_albummascota.json', data);
        console.log("Ready...");
        return;
    });
})();