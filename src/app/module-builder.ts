import { NgModule } from "@angular/core";

function createModule(sandboxMeta) {
    return NgModule({
        imports: [...sandboxMeta.imports],
        declarations: [sandboxMeta.type, ...sandboxMeta.declarations],
        providers: [...sandboxMeta.providers]
    })(class {});
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
