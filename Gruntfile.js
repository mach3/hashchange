
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	var info = grunt.file.readJSON("component.json");
	var options = {
		splitBanners : true,
		banner : grunt.file.read("./src/banner.js").replace("{{version}}", info.version)
	};

	grunt.initConfig({
		uglify : {
			dist : {
				options : options,
				src : ["./src/hashchange.js"],
				dest : "dist/hashchange.min.js"
			}
		},
		concat : {
			dist : {
				options : options,
				src : ["./src/hashchange.js"],
				dest : "dist/hashchange.js"
			}
		}
	});

	grunt.registerTask("default", ["concat", "uglify"]);

};
