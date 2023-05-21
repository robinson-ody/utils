# Utility Function

Collection of functions to help with small task that you use frequently.

## Thousand Separator

Usage example:

```
const num = thousandSeparator({ numbers: 100000 });
// num: 100.000
```

You can also add custom separator (default is '.')

```
const num = thousandSeparator({ numbers: 100000, separator: ',' });
// num: 100,000
```

You can also define custom empty placeholder (default is '-')

```
const num = thousandSeparator({ numbers: '', empty_placeholder: '0' });
// num: '0'
```

## Get Random Number

Usage example:

```
const randomNumber = getRandomNumber({ min: 1, max: 10 })
```

The result is inclusive from min value to the max value.
For instance if you input min: 1 and max: 10
The result can be ranging from anthing between 1 and 10