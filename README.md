# quick-timing

## About

You want to measure a function

Ex. Let's measure the `targetFunction()`

```javascript
const value = targetFunction()
```

In many cases has next code.

```javascript
performance.mark('start')
const value = targetFunction()
performance.mark('end')
performance.measure('targetFunction', 'start', 'end')
```

Just use this...

```javascript
import { measure } from 'quick-timing'

const value = measure(() => targetFunction())
```

> Like a `useMemo` interface in React.

## LICENSE

MIT
