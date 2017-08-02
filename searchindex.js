// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Master_Teasers.html", "Untitled Page", "untitled page news videos more shtus shtick quizzes boo snews totally real announcements fact checked shabbat this week to end on tuesday​plot twist recount reveals hillel president is actually write in candidate avi singer​ quot soon by you picked up hbo trending now ", "");
   this[database_length++] = new SearchPage("New_Hillel_Building.html", "New Hillel Building", "new hillel building lorem ipsum dolor sit amet consectetur adipiscing elit integer nec odio praesent libero sed cursus ante dapibus diam nisi nulla quis sem at nibh elementum imperdiet duis sagittis mauris fusce tellus augue semper porta massa vestibulum lacinia arcu eget class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos curabitur sodales ligula in dignissim nunc tortor pellentesque aenean quam scelerisque maecenas mattis convallis tristique proin ut vel egestas porttitor morbi lectus risus iaculis suscipit luctus non ac turpis aliquet metus ullamcorper tincidunt euismod quisque volutpat condimentum velit nam urna neque facilisi fringilla suspendisse potenti feugiat mi consequat sapien etiam ultrices justo eu magna lacus vitae pharetra auctor interdum primis faucibus orci et posuere cubilia curae molestie dui blandit congue pede facilisis laoreet donec viverra malesuada enim est pulvinar sollicitudin cras id nisl felis venenatis commodo ultricies accumsan pretium fermentum nullam purus aliquam mollis vivamus consectetuer title tagline date author summary social media links go here photo goes ", "");
   this[database_length++] = new SearchPage("Master_Content.html", "Untitled Page", "untitled page news videos more shtus shtick quizzes boo snews totally real announcements fact checked shabbat this week to end on tuesday​plot twist recount reveals hillel president is actually write in candidate avi singer​ quot soon by you picked up hbo trending now ", "");
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "your website title untitled page lorem ipsum dolor sit amet consectetur adipiscing elit integer nec odio praesent libero sed cursus ante dapibus diam nisi nulla quis sem at nibh elementum imperdiet duis sagittis mauris fusce tellus augue semper porta massa vestibulum lacinia arcu eget class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos curabitur sodales ligula in dignissim nunc tortor pellentesque aenean quam scelerisque maecenas mattis convallis tristique proin ut vel egestas porttitor morbi lectus risus iaculis suscipit luctus non ac turpis aliquet metus ullamcorper tincidunt euismod quisque volutpat condimentum velit nam urna neque facilisi fringilla suspendisse potenti feugiat mi consequat sapien etiam ultrices justo eu magna lacus vitae pharetra auctor interdum primis faucibus orci et posuere cubilia curae molestie dui blandit congue pede facilisis laoreet donec viverra malesuada enim est pulvinar sollicitudin cras id nisl felis venenatis commodo ultricies accumsan pretium fermentum nullam purus aliquam mollis vivamus consectetuer brandeis just leaked the blueprints for hillel building and it’s going to be epic it looks like ridgewood but with nicer bathrooms more water slides august following million dollar donation from eli cohn now has money than knows what do although no official plans have been announced create inside sources confirm that on its way social media links go here photo goes share this friends nbsp ", "");
   return this;
}
