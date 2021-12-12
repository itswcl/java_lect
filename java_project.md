1. create project
2. dependency for pom.xml
3. application-properties
    - update schema name
    - update password
4. create schema on MySQL workbench (utf8)
5. add WEB-INF folder
6. add packages on com.wei.xxxx
    - models, services, repositories, controllers
7. create the model file to add all these Class
    - name XXXX.java and follows
        - @Entity
        - @Table(name="table_name")
    - member variable adding in such as id, name,number etc
    @Id
    @GeneratedValue
    Long id
    @NotNull
    @Size
    # this is for other member variable besides id
    @Column(updatable=false) # this is for createdAt only
    @DateTimeFormat(pattern="yyyy-mm-dd")
    @PrePersist
	protected void onCreate() {this.createdAt = new Date();}
	@PreUpdate (no need column updatable false)
	protected void onUpdate() {this.updatedAt = new Date();}

    - constructor, getter and setter
    - constructor two 1. empty 2. with only the String info required
    - remember to add protect void onXXX() {this.XXXAt = new Date()} for createdAt and updatedAt
    - check the table links on SQL (rerun the app)

- ONE Class (1)
    - @Entity
    - @Table(name="Libraries")
    - @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id;
    - @NotNull @Size(min=3, max=200, message="message to sent if invalidated")
    - private String name;
    - private String location;
    # ---- Constructor
    - public Library() {}
    # ----   1 : M -------
    - @OneToMany(mappedBy="bookLibrary", fetch = FetchType.LAZY)
    - private List<Book> books
    - making getter setter for above
    # checking SQL to make sure the relationship
    # each class has own Repository and Service

- MANY Class (M)
    # ----   M : 1 -------
    - @ManyToOne(fetch = FetchType.LAZY)
    - @JoinColumn(name="library_id")
    - private Library bookLibrary;
    - making getter setter for above
    # checking SQL to make sure the relationship
    # each class has own Repository and Service

8. create repository interface for both MANY and ONE
    - MANY INTERFACE and ONE INTERFACE
    - name XXXRepositories.java
    - @Repository on top
    - extend CrudRepo <Book, Long>
                    <Model, Id pass in>
    - List<modelName> findAll();

9. create service Class for both MANY and ONE
    - name XXXService.java
    - @Service
	- @Autowired
	- private XXXXXRepository xxxxxRepository;
    - add full CRUD method
        - readAll, readOne, Create, Update, Delete # CRUD
	# READ ALL
	public List<Ninja> displayNinjas() {return ninjaRepo.findAll();}
	# READ ONE
	public Ninja displayNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if (optionalNinja.isPresent()) {
			return optionalNinja.get();
            } else {return null;}
	}
	# UPDATE ONE
	# CREATE ONE , this will be using as UPDATE as WELL
	public Ninja createNinja(Ninja ninja) {return ninjaRepo.save(ninja);}
	# DELETE ONE
	public void removeNinja(Long id) {ninjaRepo.deleteById(id);}

10. Controller
    - XXXController.java
    - @Controller
    - dependency injection for both class
        @Autowired
        private XXXXXService xxxxxService;
        @Autowired
        private XXXXXService xxxxxService;

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
    - route for edit request * remember to use {id} after @PutMapping("/xxxx/{id}")
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

