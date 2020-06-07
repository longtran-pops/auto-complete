# Coding Test _ FrontEnd Round 1

Complete the AutoComplete Component

### Steps

1. Create your own development branch and check for permission
```sh
git checkout -b your_name/final_version
git push -u origin your_name/final_version
// If you cannot push our own branch, please contact the owner to get the permission
```
2. Implement your solution and create a pull request when you complete ([How to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))

### Requirements

#### Design

The component have 2 versions as shown in the following links:

https://longtran713450.invisionapp.com/prototype/AutoComplete-Interview-R1-ckb4r5gf70034ub018ruvu7md

#### Logic

- When user type, the suggestion list will shows all potential items which matched the input value.
- When user select an item, the input will be filled with the selected item and the suggestion list will be cleared.

### Knowns issues

- KI-01: Sometimes the suggestion list is not matched with the input value.
- KI-02: The API is too slow which make end user feel like the function doesn't work.

### What can you do?

- You can refactor and edit everything As long as your code can full fill all the designs and logic as described above - Except the **Fake API**
- No other libraries or frameworks are allowed. Whatever you need, you will need to write them on your own.

### Acceptance Criteria

The pull request need to:

1. The component must look like the 2 design - mobile & web
2. The component's logic need to be full filled
3. Pull request description should follow this template:
```
Added:
 - General idea of what you have added such as an utility function, base component or so and why do you need to add them.
Refactored
 - General idea of what you have refactored such as move a function from component A to component B and why do you need to do that.
Fixed:
 - `KI-01`: General idea how to fix issue `KI-01`.
 - `KI-02`: General idea how to fix issue `KI-02`.
```