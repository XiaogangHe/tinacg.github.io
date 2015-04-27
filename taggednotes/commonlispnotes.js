var notes = {
note0: { 
id: "note0", 
title: "Check if argument is an atom or list",
tags: ['atom', 'list', 'lists', 'types', 'atoms'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>(atom x) checks if x is an atom. Returns T or NIL<br>(atom 3)  ; T<br>(atom '())  ; T<br>(atom nil)  ; T<br>(atom (lambda (x) (+ 1 x)))  ; T<br>(atom '(1 2 3))  ; NIL<br><br>(listp x) checks if x is a list or '() or NIL<br>(listp '())  ; T<br>(listp nil)  ; T<br>(listp '(1 2 3))  ; T<br>(listp 3)  ; NIL<br>" },

note1: { 
id: "note1", 
title: "Semicolon and Block comments",
tags: ['comments'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>; comments after some expressions<br>;; normal comments<br>;;; section comments<br>;;;; file-level comments<br><br>#| Block comments<br>  #|<br>    Can be nested<br>  |#<br>|#<br>" },

note2: { 
id: "note2", 
title: "Symbols",
tags: ['symbols'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>Quoting a name to create a symbol automatically uppercases it<br>It is the same as (quote name)<br><br>(intern &quot;some-name&quot;) creates a symbol from a string. It is case-sensitive<br>" },

note3: { 
id: "note3", 
title: "Falsity",
tags: ['falsity', 'nil'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>Anything not NIL is considered true.<br>NOTE: '() is the same as NIL<br><br>(if nil 'yes 'no)  ; NO<br>(if '() 'yes 'no)  ; NO<br>(if 0 'yes 'no)  ; YES<br><br>t is boolean for true<br>" },

note4: { 
id: "note4", 
title: "Calling a function manually",
tags: ['funcall'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>(funcall #'+ 1 2 3)  ; 6<br><br>#' is read &quot;sharp-quote&quot;<br>" },

note5: { 
id: "note5", 
title: "Characters",
tags: ['characters'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>#\\A<br>#\\u03BB  ; Greek lambda<br><br>To print a Unicode character<br>(format t &quot;~a&quot; #\\u03bb)<br>" },

note6: { 
id: "note6", 
title: "Concatenating strings",
tags: ['strings', 'concatenate'],
reference: "24 apr 2015, http://learnxinyminutes.com/docs/common-lisp/",
body: "<br>(concatenate 'string &quot;Common&quot; &quot; &quot; &quot;Lisp&quot; &quot; says \\&quot;Hi\\&quot;&quot;)<br>(format t &quot;~a~%&quot; &quot;He said \\&quot;Bye.\\&quot;&quot;)  ; newline at end<br>" },

numNotes: 7
};