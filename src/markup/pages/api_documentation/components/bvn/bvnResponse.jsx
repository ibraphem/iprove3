import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const ResponseComponent = () => {
  const codeString = 
`
{
    "status": "success",
    "data": {
      "fieldMatches":{
        "firsname":false,
        "lastname":false,
        "dob":false
      }
      "bvn": 10000000001,
      "firstname": "John",
      "lastname": "Doe",
      "middlename": "Jane"
      "phone": "08066676673",
      "gender": "female"
      "birthdate": "04-04-1944",
      "photo": "Base64 Encoded",
      "maritalStatus": "Single",
      "lgaOfResidence": "Surulere",
      "lgaOfOrigin": "Ijebu ode",
      "residentialAddress": "1 jameson street",
      "stateOfOrigin": "Ogun State",
      "enrollmentBank": "058",
      "enrollmentBranch": "BODIJA",
      "nameOnCard": "JOHN DOE",
      "title": "Mr",
      "levelOfAccount": "Level 2 - Medium Level Accounts",
    } 
  }
`;
  return (
    <SyntaxHighlighter language="json" showLineNumbers={true} theme={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ResponseComponent;