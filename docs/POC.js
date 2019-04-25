

Decoratable = {
    Component: HTMLDomElement
    accept: function(decorator) {

    },
    apply: function() {
        // App the classNames and insert the styles into head
    }
}

DecoratorFactory = function(name, styles, ...decorators) {
    let decorator = function(Decoratable) {
        forEach(d : decorators) {
            Decoratable.accept(d);
        }
        newDecorator = Object.clone(Decoratable);
        newDecorator.className.apply(name) // .compent-original ... .dec1 .dec2 .name  
        newDecorator.styles = {
            name { // If it is a general class then just use name, if it is specific to this class then component-original__name is the name
                 xxx: xxx
            }
        }
    }

    decorator.name =  name;
    decorator.styles = styles;

    return decorator;
}