//custom tasks definitions
module.exports = function(appData) {
  //remove views task
  // appData.app.taskRegUtils.removeTask('views');

  //create a task
  /*appData.taskReg['copy'] = {
    fn() {
      // task body...
      // remember to return a promise
    }
  }
  //add the task as a dependency: build task, before images dependency
  appData.app.taskRegUtils.addDep('copy', 'build', 'images', true);*/
  //create a task
  // appData.taskReg['styles:vendor'] = {
  //   fn() {
  //     // var stream = '';
  //     var stream = appData.gulp.src(appData.dirs.vendor + 'styles/**' + '/*.css')
  //     .pipe(appData.gulp.dest('/css'));

  //     //you can also access config, e.g. check if dev vs. prod mode
  //     //console.log(appData.config.main.isDev);
  //     if(appData.config.main.isDev){
  //       //minimize file
  //     }

  //     // //currently all tasks must return a promise

  //     // return appData.app.streamToPromise(stream);
  //   },
  //   deps: ['styles', ['style:vendor']]
  // };
  //add the task as a dependency: build task, before images dependency
  // appData.app.taskRegUtils.addDep('styles:vendor', 'build', 'styles', true);
};
