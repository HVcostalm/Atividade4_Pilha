class Pilha<T> {
    private items: T[] = [];

    public adicionar(item: T): void {
        this.items.push(item);
    }

    public mostrar(): T[] {
        return this.items;
    }

    public remover(): T | undefined {
        return this.items.pop();
    }

    public mostrarElementoTopo(): T | undefined {
        return this.items[this.items.length - 1];
    }

    public tamanho(): number {
        return this.items.length;
    }

    public limpar(): void {
        this.items = [];
    }
}

export {Pilha};