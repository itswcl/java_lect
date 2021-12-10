- Library Repository Interface
    - extends CRUD repository
    - @Repository
    - <Library, Long>
    - List<Library> findAll();

- Library Service Class
    - @Service
    - CRUD
    - @Autowired

- Library controller could stay same place with book
    - @Autowired private LibService libService;
    - @GetMapping("/library/new")
    - public String createLib(@ModelAttribute("lib") Library library, Model model) {
        List<Library> allLib = libService.allLibraries();
        model.addAttribute("allLibraries", allLib)
        return "/library/new.jsp";
        }
    # check if link properly
    - @PostMapping("/libraries")
    - public String libMethod
        (@Valid @ModelAttribute("lib") Library library, BindingResult result, Model model) {
            if (result.hasErrors()) {
                List<Library> allLib = libService.allLibraries();
                model.addAttribute("allLibraries", allLib)
                return "/library/new.jsp";
            } else {
                // calling service method
                libService.createLibrary(library);
            }
        return "redirect:/library/new"
        }


- JSP
    - create library /library/new
    - add form:form action="/libraries" modelAttribute="lib">
    - form:errors path="*"/>
    - <form:label path="name"></form:label> and <form:input path="name">
    - <c:forEach items="${allLibraries}" var="l">
        <c:out value="${l.getName()}"/>

- on create book route
    - pass in all the libraries to select option
    - model.addAttribute("allLibs", library.allLibraries());
    <form:select path="Library">
        <c:forEach items="${allLibs}" var="l">
        <form:option value="${l.getId()}">
            ${l.getName()}
        </form:option>
        </c:forEach>
    </form:select>