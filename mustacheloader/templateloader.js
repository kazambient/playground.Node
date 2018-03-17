require('fs');
require('Mustache');
/*
things that need to happen

1.  keep vars for thing like
        directories and structure
        files and partials
            names last moded 

2.  Cache control of some sort...Registry
        though Mustache caches parsed templates and partials
        it does not load them or know if they have changed
        implemented as an app Singleton one list to rule them all.
        Mustache uses Node global We want to avoid this 
        at min this will be the registry class


3.  House keeping of some sort
        loading of 
        reloading
        updating
        saving
        deleting
        controlling access to

        most of this is just a wrapper and some utility functions
        around the fs module

        combine with a regitry of template files and voila GTG 

4.  Once completed and bug free ;? the main concern is speed and memory improvements
        at writing this my current version of node is 8.9.4

5.  I know there will be lots of room for improvement
    I know Im probabley re inventing the wheel
    But its My Wheel i created it I know it

*/