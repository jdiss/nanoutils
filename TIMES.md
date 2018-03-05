## Nanoutils method's time
| Method  | Lib   |    10000 |  100000 |  1000000 |
| ------- | ----- | -------- | ------- | -------- |
| allPass | nano  |   0.04ms |  0.11ms |   1.18ms |
|         | ramda |   0.36ms |  3.74ms |  42.17ms |
|         | diff  |  -0.32ms | -3.63ms | -40.99ms |
|         |       |  -89.66% | -96.99% |  -97.19% |
| ------- | ----- | -------- | ------- | -------- |
| concat  | nano  |   0.00ms |  0.02ms |   0.77ms |
|         | ramda |   0.00ms |  0.02ms |   0.69ms |
|         | diff  |  +0.00ms | +0.00ms |  +0.08ms |
|         |       |  +46.45% |  +9.22% |  +11.75% |
| ------- | ----- | -------- | ------- | -------- |
| mean    | nano  |   0.04ms |  0.22ms |   1.92ms |
|         | ramda |   0.08ms |  0.63ms |   6.22ms |
|         | diff  |  -0.04ms | -0.40ms |  -4.30ms |
|         |       |  -54.20% | -64.34% |  -69.12% |
| ------- | ----- | -------- | ------- | -------- |
| median  | nano  |   0.33ms |  4.62ms |  49.47ms |
|         | ramda |   0.30ms |  4.35ms |  52.01ms |
|         | diff  |  +0.04ms | +0.27ms |  -2.53ms |
|         |       |  +12.27% |  +6.13% |   -4.87% |
| ------- | ----- | -------- | ------- | -------- |
| sum     | nano  |   0.02ms |  0.19ms |   1.85ms |
|         | ramda |   0.06ms |  0.61ms |   5.67ms |
|         | diff  |  -0.04ms | -0.42ms |  -3.82ms |
|         |       |  -66.21% | -69.45% |  -67.32% |
| ------- | ----- | -------- | ------- | -------- |
| zipWith | nano  |   0.05ms |  0.08ms |   1.86ms |
|         | ramda |   0.01ms |  0.07ms |   1.82ms |
|         | diff  |  +0.04ms | +0.01ms |  +0.05ms |
|         |       | +489.24% | +12.79% |   +2.54% |
| ------- | ----- | -------- | ------- | -------- |

| Method | Lib   |        0% |       50% |      100% |
| ------ | ----- | --------- | --------- | --------- |
| union  | nano  |   35.48ms |   22.49ms |   15.42ms |
|        | ramda |    1.00ms |    0.82ms |    0.64ms |
|        | diff  |  +34.48ms |  +21.67ms |  +14.78ms |
|        |       | +3439.09% | +2646.30% | +2292.84% |
| ------ | ----- | --------- | --------- | --------- |