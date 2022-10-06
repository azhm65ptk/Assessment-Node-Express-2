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


- What is continuous integration?

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
