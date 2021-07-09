icons install
    npm install react-icons --save

Use?
    import { FaBeer } from 'react-icons/fa';
        class Question extends React.Component {
        render() {
        return <h3> Lets go for a <FaBeer />? </h3>
        }
    }


Random Person--
  code--e.target.classList.contains('icon')
    above example "icon" is className 
  
  clasList--
    The classList property returns the class name(s) of an element, as a DOMTokenList object.
    This property is useful to add, remove and toggle CSS classes on an element.
    The classList property is read-only, however, you can modify it by using the add() and remove() methods.

  contains (class) --
    contains(class)	Returns a Boolean value, indicating whether an element has the specified class name.
    
    Possible values:
          true - the element contains the specified class name
          false - the element does not contain the specified class name
