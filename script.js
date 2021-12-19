var exercises = [
  'do some pushups',
  'do some squats',
  'do some jumping jacks',
  'do some wall sit',
  'plank for a while',
  'go up and down the stairs',
  'go outside',
];


/**
 * suggest_exercise displays a page suggesting to do an exercise before going to the url passed in parameter
 * @param {url} redirect_url: url to redirect to after the exercise is done 
 */
function suggest_exercise(redirect_url) {

  // Extract the name of the website from the url and show it on the page
  var website = (new URL(redirect_url)).hostname;
  website = website.replace(/^www\./, '').replace(/\.com$/, '');
  template('website', website);

  for (var elem of document.querySelectorAll('button.redirect')) {
    elem.addEventListener('click', function() {
      window.location.href = redirect_url;
    });
  }

  // Show a random exercise
  // If the users wants, another exercise can be displayed
  show_random_exercise();
  document.getElementById('something-else').addEventListener('click', function() {
    show_random_exercise();
    return false;
  });

  document.getElementById('i-did-it').addEventListener('click', function() {
    display('congratulations');
  });

  display('landing');
}

/**
 * show_random_exercise displays a random exercise in the page
 */
var show_random_exercise = function () {
  // shuffle the array of exercises
  exercises.sort(() => Math.random() - 0.5);
  var i = 0;

  function show_next() {
    var exercise = exercises[i];
    document.getElementById('suggestion').innerHTML = exercise;
    i = (i + 1) % exercises.length;
  }

  return show_next;
} ();


/**
 * display the view whose name is passed in parameter and hide the others.
 * @param {str} name 
 */
function display(name) {
  // hide all views
  var all_views =  document.querySelectorAll('.main');
  for (var view of all_views) {
    view.style.display = 'none';
  }

  // show the view with the name passed in parameter
  var element = document.getElementById(name);
  if (element) {
    element.style.display = 'block';
  }
}

/**
 * template function
 * replaces all instances of {{name}} by the value of the data parameter in the page.
 * @param {str} name : name of the template string
 * @param {str} data : value to replace in the template string
 */
function template(name, data) {
  var elements = document.querySelectorAll('*');
  for (var element of elements) {
    if (!element.children.length) {
      if (element.innerHTML.includes('{{ ' + name + ' }}')) {
        var content = element.innerHTML;
        var regex = new RegExp('{{\\s*' + name + '\\s*}}', 'g');
        element.innerHTML = content.replace(regex, data);
      }
    }
  }
}

/**
 * main function
 * called when the page is loaded
 * check if an url is passed in the url
 * If yes, call the function suggest_exercise
 * If no, nothing is done, and the default page is displayed
 */
function main() {
  var url_finder = /^\?url=(.+)$/i
  var matches = location.search.match(url_finder) || [];
  if (matches.length) {
    var full_url = matches[1];
    suggest_exercise(full_url);
  }
}

main();