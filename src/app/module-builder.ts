import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

function createModule(sandboxMeta) {
    const hostComp = createComponent(sandboxMeta);
    return NgModule({
        imports: [BrowserModule, ...sandboxMeta.imports],
        // TODO: optional declareComponent
        declarations: [hostComp, sandboxMeta.type, ...sandboxMeta.declarations],
        providers: [...sandboxMeta.providers],
        entryComponents: [hostComp]
    })(class {
        ngDoBootstrap(app) {
            // TODO: Destroy other app instances
            const compEl = document.createElement('playground-host');
            document.body.appendChild(compEl);
            app.bootstrap(hostComp);
        }
    });
}

function createComponent(meta) {
    // TODO: Rename key
    const scenario = meta.scenarios.find(s => s.key === 1);

    return Component({
        selector: 'playground-host',
        template: scenario.template,
        styles: scenario.styles,
        providers: scenario.providers
    })(class {
        constructor() {
            Object.assign(this, scenario.context);
        }
    })
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
