## Test Cases for EPICBET main page

Designed two positive cases, one negative and one mocked test case.
Added prettier formatting and test reporting to CI.

### Case 1. Check all header elements are visible on main page

| Number | Steps                                          | Expected result                   |
|:-------|:-----------------------------------------------|:----------------------------------|
| 1      | Load web page link                             | Web page loads successfully       |
| 2      | Check header is visible                        | Header is visible                 |
| 3      | Check buttons on header are visible            | All buttons on header are visible |

### Case 2. Verify that search returns at least 1 result

| Number | Steps                  | Expected result                                |
|:-------|:-----------------------|:-----------------------------------------------|
| 1      | Load web page link     | Web page loads successfully                    |
| 2      | Click on search bar    | Search module opens successfully               |
| 3      | Click on casino button |                                                |
| 4      | Input search term      | Search module returns at least 1 search result |

### Case 3. Verify that login with invalid credentials will show alert

| Number | Steps                            | Expected result                                       |
|:-------|:---------------------------------|:------------------------------------------------------|
| 1      | Load web page link               | Web page loads successfully                           |
| 2      | Click on login bar               | Login module opens successfully                       |
| 3      | Click on login with email button |                                                       |
| 4      | Input fake email and password    |                                                       |
| 5      | Click login button               | Login module shows alert that credentials are invalid |

### Case 4. Verify that login with valid credentials will return jwt (Mocked)

| Number | Steps                            | Expected result                            |
|:-------|:---------------------------------|:-------------------------------------------|
| 1      | Load web page link               | Web page loads successfully                |
| 2      | Click on login bar               | Login module opens successfully            |
| 3      | Click on login with email button |                                            |
| 4      | Input email and password         |                                            |
| 5      | Click login button               | Login is successful, jwt token is received |