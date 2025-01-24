Feature: Login Module
    Invalid and Valid Features
   # Background:Visit Url
      #  Given Url Visit

    Scenario: Valid Login
        And inputvaliddata
        |username|password|
        |automation|123admin@|

    Scenario Outline: all login
    And input dataa "<username>" and "<password>"

    Examples:
    |username|password|
    |automation|ahsajsfg|
    |helloww|wwooorld|
    |automatiion|123admin@|

    Scenario: Invalid Login
        And inputinvaliddata
            |username|password|
            |automatsadion|123admsdjhin@|




