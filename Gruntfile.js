module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            css: {
                options: {
                    sassDir: 'scss/',
                    cssDir: 'stylesheets/',
                }
            }
        },
        concat: {
            options: {
                separator: '',
            },
            css: {
                src: ['stylesheets/barceloneta.css',
                      'stylesheets/bootstrap-icons.css',
                      'stylesheets/complements/jquery.dataTables.css',
                      'stylesheets/complements/select2.css',
                      'stylesheets/complements/select2-bootstrap-5-theme.css',
                      'stylesheets/theme.css'],
                dest: 'stylesheets/theme-concat.css',
            },
            js: {
		src: ['js/main/*.js',
		      'js/complements/*.js'],
                dest: 'js/theme-concat.js',
            }
        },
        cssmin: {
            css : {
                src : ["stylesheets/theme-concat.css"],
                dest : "stylesheets/theme.min.css",
            }
        },
        watch: {
            css: {
                files: [
                    'stylesheets/barceloneta.css',
                    'stylesheets/bootstrap-icons.css',
                    'stylesheets/complements/*',
                    'scss/*',
                    'scss/**/*'
                ],
                tasks: ['compass:css', 'concat:css', 'cssmin:css']
            }
        },
        uglify: {
            js: {
                files: {
                    'js/contents/document_image.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/content/document_image/document_image.js',
                    'js/contents/interactive_template_view.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/content/interactive_template/interactive_template_view.js',
                    'js/contents/interactive_template_edit.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/content/interactive_template/interactive_template_edit.js',
                    'js/controlpanels/resources.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/controlpanels/widgets/resources.js',
                    'js/controlpanels/login_preview.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/cas/login_preview.js',
                    'js/portlets/gw-manage-portlets.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/portlets/manage_portlets/gw-manage-portlets.js',
                    'js/portlets/new_existing_content.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/portlets/new_existing_content/new_existing_content.js',
                    'js/portlets/rss.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/portlets/rss/rss.js',
                    'js/templates/multiple_carousel.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/browser/macros/carousel/multiple_carousel.js',
                    'js/tiles/destacat_principal_youtube.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/tiles/destacats/destacat_principal_youtube.js',
                    'js/tiles/destacat_principal_upctv.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/tiles/destacats/destacat_principal_upctv.js',
                    'js/views/filtered_contents_search.min.js':
                        '../../../../../genweb6.core/src/genweb6/core/browser/views_templates/filtered_contents_search/filtered_contents_search.js',
                }
            },
            mainjs: {
                files: {
                    'js/theme.min.js': 'js/theme-concat.js'
                }
            }
        },
        browserSync: {
            plone: {
                bsFiles: {
                    src : [
                      'stylesheets/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    debugInfo: true,
                    proxy: "localhost:8080/Plone",
                    reloadDelay: 3000,
                    // reloadDebounce: 2000,
                    online: true
                }
            }
        }
    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // CWD to theme folder
    grunt.file.setBase('./src/genweb6/theme/theme');

    // Registered tasks: grunt watch
    grunt.registerTask('default', ["browserSync:plone", "watch"]);
    grunt.registerTask('bsync', ["browserSync:html", "watch"]);
    grunt.registerTask('plone-bsync', ["browserSync:plone", "watch"]);
    grunt.registerTask('minify', ["uglify:js", "concat:js", "uglify:mainjs"]);
};
