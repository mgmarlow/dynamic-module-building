export function sandboxOf(type: any, config: any): SandboxBuilder {
    return new SandboxBuilder(type, config);
}

export class SandboxBuilder {
    private _scenarios: any[] = [];
    private _scenarioCounter = 0;

    constructor(private _type: any,
        private _config: { [key: string]: any; } = {}) {
    }

    add(description: string, config: any) {
        let key = ++this._scenarioCounter;
        this._scenarios.push(Object.assign({}, config, { key }));
        return this;
    }

    serialize(sandboxPath: string): any {
        return {
            key: sandboxPath,
            type: this._type,
            scenarios: this._scenarios,
            imports: this._config.imports || [],
            declarations: this._config.declarations || [],
            providers: this._config.providers || [],
            declareComponent: this._config.declareComponent !== undefined ? this._config.declareComponent : true,
        };
    }
}