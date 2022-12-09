class Produto {
    constructor(nome, descricao, preco, disponivel) {
      this.nome = nome,
      this.descricao = descricao,
      this.preco = preco,
      this.disponivel = disponivel
    }
    
    // GETTERS
    get nome() {
        return this.nome
    }
    get descricao() {
        return this.descricao
    }
    get preco() {
        return this.preco
    }
    get disponivel() {
        return this.disponivel
    }

    // SETTERS
    set nome(nomeProduto) {
        this._nome= nomeProduto
    }
    set descricao(string) {
        this._descricao= string
    }
    set preco(int) {
        this._preco= int
    }
    set disponivel(boolean) {
        this._disponivel= boolean
    }

  }