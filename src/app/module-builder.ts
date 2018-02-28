import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

function createModule(sandboxMeta) {
    return NgModule({
        imports: [BrowserModule, ...sandboxMeta.imports],
        declarations: [sandboxMeta.type, ...sandboxMeta.declarations],
        providers: [...sandboxMeta.providers],
        entryComponents: [sandboxMeta.type]
    })(class {
        ngDoBootstrap(app) {
            const compEl = document.createElement('app-hello');
            document.body.appendChild(compEl);
            const comp = sandboxMeta.type;
            app.bootstrap(comp);
        }
    });
}

export function getSandbox(path) {
    switch (path) {
        case 'hello':
            return import('./hello/hello.component.sandbox')
                .then(function (sandbox) {
                    const meta = sandbox.default.serialize('./hello/hello.component.sandbox');
                    return createModule(meta);
                });
    }
}
