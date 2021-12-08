1. create project
2. dependency for pom.xml
3. application-properties
    - update schema name
    - update password
4. add schema on MySQL workbench (utf8)
    - c
5. add WEB-INF folder
6. add packages on com.wei.xxxx
    - modes, services, repositories, controllers
7. create the model file to add all these Class
    - name XXXX.java
    - constructor, getter and setter
    - check the table links on SQL (rerun the app)
8. create repository interface
    - name XXXRepositories.java
    - extend CrudRepo <Book, Long>
                    <Model, Id pass in>
    - @Repository on top
    - findAll
9. create service Class
    - name XXXService.java
    - @Service
10. Controller
    - XXXController.java
    - @Controller
    - dependency injection
        - @Autowired
        - private XXXService xxxxService
    - @RequestMapping("/")
        # public String index() {
        # return "index.jsp"
    - form route render
        # (@ModelAttribute("book") Book book)
        same as below
        # (Model model)
        # Book book = new Book();
        # model.addAttribute("book", book);
    - form route execute
        # @PostMapping
        - @Valid @ModelAttribute("book") Book book, BindingResult result
        - validate the object and check result
    - route for display all
        # index(Model model)
        List<Book> allbooks = bookService.allboks();
        model.addAttribute("allbooks", allbooks);
# tip - control + click to see the original location for the stuff

11. create the jsp file from index.jsp to test out first route from Controller
    1. form create
    - add new.jsp
    - add form in new.jsp
    - Jsp modelAttribute="book" (link from the Controller (@ModelAttribute("book") Book book))
    - path="XXXXX" match the member attributes @NotNull from Model
# from route render the form on JSP and fill out the form sent to form route execute
    2. display all
    - c:out and c:forEach

