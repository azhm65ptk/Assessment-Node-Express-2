### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

  JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services.

  JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session).


- What is the signature portion of the JWT?  What does it do?
  The JWT token itself is a string comprising three parts:

  Header: metadata about token (signing algorithm used & type of token)
  Payload: data to be stored in token (typically an object)
  Often, this will store things like the user ID
  This is encoded, not encrypted — don’t put secret info here!
  Signature: version of header & payload, signed with secret key

- If a JWT is intercepted, can the attacker see what's inside the payload?
  No

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  ##Creating Tokens
    jwt.sign(payload, secret-key, jwt-options)
      payload: object to store as payload of token
      secret-key: secret string used to “sign” token
      jwt-options is optional object of settings for making the token
    This returns the token (a string)

  ###Decoding / Verifying Tokens
    jwt.decode(token)
      Return the payload from the token (works without secret key. Remember, the tokens are signed, not enciphered!)

    jwt.verify(token, secret-key)
      Verify token signature and return payload is valid. If not, raise error.

- Compare and contrast unit, integration and end-to-end tests.

      A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.
      End_to_End test is : is a methodology used for ensuring that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes.

- What is a mock? What are some things you would mock?
  Mocking is primarily used in unit testing
  An object under test may have dependencies on other (complex) objects
  To isolate the behavior, you replace other objects by mocks that simulate their behavior
  This is useful if the real objects are impractical to incorporate into the unit test.
  You can mock the following things:
      AJAX requests
      Reading/Writing to files
      Impure functions like Math.random


- What is continuous integration?
  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

  The goal is to build better software by developing and testing in smaller increments.


- What is an environment variable and what are they used for?
  You can use environment variables to store information that you want to reference in your workflow. You reference environment variables within a workflow step or an action, and the variables are interpolated on the runner machine that runs your workflow. Commands that run in actions or workflow steps can create, read, and modify environment variables.

- What is TDD? What are some benefits and drawbacks?
  TDD means test written development.
  Write tests first - they will fail!
  Only write the code necessary to get the tests to pass
  Focus on completing the task/user story at hand
  As you write more code, keep running tests and make sure they are passing
  Red, Green, Refactor

    Your tests fail (red)
    You write the code to get the tests to pass (green)
    You refactor!

- What is the value of using JSONSchema for validation?
  The primary strength of JSON Schema is that it generates clear, human- and machine-readable documentation. It's easy to accurately describe the structure of data in a way that developers can use for automated validation. This makes work easier for developers and testers, but the benefits go beyond productivity.

- What are some ways to decide which code to test?
  Instead of testing the database, test the API
  Make sure you write the tests.
  Stay consistent with what you are testing

- What does `RETURNING` do in SQL? When would you use it?
  The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. RETURNING helps avoid another roundtrip to the database, easeri to retrive the data you want.

- What are some differences between Web Sockets and HTTP?
  HTTP is a pretty wordy, heavy protocol.So many things in headers!
  HTTP is stateless.Ask for answer, get answer, hang up connection

  Websockets are tiny and stateful — they stay connected!
  They’re often used for “tell the browser something has changed”


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Flask, simple and easier to use. It is powerful microframework to test RESTfuls APIs.

