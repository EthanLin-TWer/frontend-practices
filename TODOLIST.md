# TODOLIST

## tasking

- tasking(:15min)
- schema
  - parser should take a schema config, including:
    * [ ] (5min:10min) [|] each schema has a type
    - each schema has a default value associated with it
    - multiple schemas
- flags
  - parser should be able to receive an argument list that contains only one arg
    - requirement: arg parser should be able to answer the value of a flag using flagname
    - a flag should have only one character proceeding with a minus '-'
    - a flag can have a boolean value separated with a space after the name
    - a flag can have no value which should then use default value in the schema
    - a flag can have a number value
    - a flag can have no value which should then use default value in the schema
    - a flag can have a string value
    - a flag can have no value which should then use default value in the schema
    - should throw error when flag name is not recognized in the schema list
  - parser should be able to receive an argument list that contains multiple args

## requirements

The arguments passed to the program consist of flags and values.

- Flags should be one character, preceded by a minus sign
- Each flag should have zero, or one value associated with it
- This parser takes a schema specifying the number and types of flags the program expects
- This parser takes a schema specifying the values of the flags the program expects
- It will verify that the arguments match the schema.
- The program can then ask the args parser for each of the values, using the names of the flags
- The values are returned with the correct types, as specified in the schema.
- If a flag mentioned in the schema is missing in the arguments, a suitable default value should be returned.
- If the arguments given do not match the schema, it is important that a good error message is given, explaining exactly what is wrong.

## concepts

```javascript
const parser = new ArgsParser(schema)
const args = parser.parse(actualArgumentList)

expect(args.get('p')).toEqual(8080)
```
