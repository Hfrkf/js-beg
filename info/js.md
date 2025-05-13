javascript->synchronous(line by line 
            excution of the code take place)
           ->single threaded(execution occurs only at runtime whenever it is being called)
this all is for default js

execution control->execute one line of code at a tym
-console log->1
-console log->2
.
.
.
js engine: call stack      memory heap
each operation waits for the last one to complete before execution

Blocking Code(synchronize)
->block the flow of the program
->read file sync

Non Blocking Code(asynchronize)
->does not block execution
->read file async 
