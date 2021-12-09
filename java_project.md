1. create project
2. dependency for pom.xml
3. application-properties
    - update schema name
    - update password
4. create schema on MySQL workbench (utf8)
5. add WEB-INF folder
6. add packages on com.wei.xxxx
    - modes, services, repositories, controllers
7. create the model file to add all these Class
    - name XXXX.java and follows
        - @Entity
        - @Table(name="schemaNameInputHere")
    - member variable adding in such as id, name,number etc
    @Id
    @GeneratedValue
    Long id
    @NotNull
    @Size
    # this is for other member variable besides id
    @Column(updatable=false) # this is for createdAt only
    @DateTimeFormat(pattern="yyyy-mm-dd")
    Date createdAt
    Date updatedAt (no need column updatable false)
    - constructor, getter and setter
    - constructor two 1. empty 2. with only the String info required
    - remember to add protect void onXXX() {this.XXXAt = new Date()} for createdAt and updatedAt
    - check the table links on SQL (rerun the app)
8. create repository interface
    - name XXXRepositories.java
    - extend CrudRepo <Book, Long>
                    <Model, Id pass in>
    - @Repository on top
    - List<modelName> findAll();
9. create service Class
    - name XXXService.java
    - @Service
	- @Autowired
	- private LanguageRepository languageRepository;
    - add full CRUD method
        - readAll, readOne, Create, Update, Delete
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
    - route for edit page
    - route for edit request
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
12. edit jsp page
    add isErrorPage
    add hidden request put

