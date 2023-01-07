# Utility Function

Collection of functions to help with small task that you use frequently.

## Thousand Separator

Usage example:

```
const num = thousand_separator({ numbers: 100000 });
// num: 100.000
```

You can also add custom separator (default is '.')

```
const num = thousand_separator({ numbers: 100000, separator: ',' });
// num: 100,000
```

You can also define custom empty placeholder (default is '-')

```
const num = thousand_separator({ numbers: '', empty_placeholder: '0' });
// num: '0'
```
