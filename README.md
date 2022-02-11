# Angular Extended Diagnostics Demo

This is a demo of Angular extended diagnostics. In v13.2, Angular added extended
diagnostics which flag possible mistakes in Angular templates as warnings. The
[`app.component.ts` file](/src/app/app.component.ts#L5-L13) demos the two
diagnostics introduced in 13.2
([invalid banana in box](https://angular.io/extended-diagnostics/NG8101) and [nullish coalescing not nullable](https://angular.io/extended-diagnostics/NG8102)).

![A VSCode editor open to an Angular template. The code editor raises two
warnings within the template which the developer quickly fixes. The code gists
which raise the errors is here:
https://github.com/dgp1130/Angular-Extended-Diagnostics-Demo/blob/c6be7909cb6d52294154c7c7ad3fc38a1ad7e64a/src/app/app.component.ts#L5-L13](/demo.gif)

These diagnostics are warnings by default but
[can be configured](https://angular.io/extended-diagnostics#configuration) in
the `tsconfig.json`.

Angular configurations can be combined with extended diagnostics to present
multiple build types with different strictness. A developer build could treat
all diagnostics as informational warnings to avoid impeding the edit/refresh
workflow while a continuous integration (CI) build could treat all diagnostics
as hard errors. This is done in this repository with the `ci` configuration.

```bash
# Developer builds, extended diagnostics are warnings.
ng serve
ng build -c development

# Build for CI, extended diagnostics are errors.
ng build -c ci
```

This is implemented by defining a custom `ci` configuration in `angular.json`
which uses `tsconfig.ci.json` and sets all extended diagnostics to errors.

https://github.com/dgp1130/Angular-Extended-Diagnostics-Demo/blob/277ab3b3764264caff166f2dd995b32576df36f9/angular.json#L64-L66

https://github.com/dgp1130/Angular-Extended-Diagnostics-Demo/blob/277ab3b3764264caff166f2dd995b32576df36f9/tsconfig.ci.json#L4-L6

Fore more information about extended diagnostics, check out the Angular
[blog post](https://blog.angular.io/angular-extended-diagnostics-53e2fa19ece9)
on the topic!
