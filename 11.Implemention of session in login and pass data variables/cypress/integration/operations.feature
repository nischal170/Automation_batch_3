Feature:operations
    Mathematical operations
    Scenario:Add Two Numbers
        And add 3 and 5
    Scenario:Subtract Two Numbers
        And subtract 7 and 3
    Scenario:Multiply Two Numbers
        And Multiply 468 and 87
    Scenario:Divide Two Numbers
        And Divide 5378 by 784

    Scenario:perform operations
        And perform operations
            | firstno | secondno |
            | 5       | 8        |


    Scenario Outline: pass multiple values
        And Enterdatas <firstno> and <secondno>

        Examples:
            | firstno | secondno |
            | 1       | 5        |
            | 46      | 56       |
            | 35      | 64       |
            | 23      | 34       |