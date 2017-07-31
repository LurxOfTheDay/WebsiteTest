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
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "untitled page videos news lists lorem ipsum dolor sit amet consectetur adipiscing elit integer nec odio praesent libero sed dignissim lacinia nunc curabitur tortor pellentesque nibh aenean quam in scelerisque sem at maecenas mattis convallis tristique proin ut ligula vel egestas porttitor morbi lectus risus iaculis suscipit quis luctus non massa fusce ac turpis aliquet mauris nulla metus ullamcorper tincidunt euismod quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos nam ante urna neque diam cursus facilisi fringilla suspendisse potenti feugiat mi tellus consequat imperdiet vestibulum sapien etiam ultrices justo eu magna lacus vitae pharetra auctor interdum augue eget primis faucibus orci et posuere cubilia curae molestie dui blandit congue elementum pede facilisis laoreet donec viverra malesuada enim est pulvinar sollicitudin cras id nisl felis venenatis sodales nisi commodo ultricies accumsan pretium ", "");
   this[database_length++] = new SearchPage("page2.html", "Untitled Page", "untitled page lorem ipsum dolor sit amet consectetur adipiscing elit integer nec odio praesent libero sed cursus ante dapibus diam nisi nulla quis sem at nibh elementum imperdiet duis sagittis mauris fusce tellus augue semper porta massa vestibulum lacinia arcu eget class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos curabitur sodales ligula in dignissim nunc tortor pellentesque aenean quam scelerisque maecenas mattis convallis tristique proin ut vel egestas porttitor morbi lectus risus iaculis suscipit luctus non ac turpis aliquet metus ullamcorper tincidunt euismod quisque volutpat condimentum velit nam urna neque facilisi fringilla suspendisse potenti feugiat mi consequat sapien etiam ultrices justo eu magna lacus vitae pharetra auctor interdum primis faucibus orci et posuere cubilia curae molestie dui blandit congue pede facilisis laoreet donec viverra malesuada enim est pulvinar sollicitudin cras id nisl felis venenatis commodo ultricies accumsan pretium fermentum nullam purus aliquam mollis vivamus consectetuer ", "");
   return this;
}
