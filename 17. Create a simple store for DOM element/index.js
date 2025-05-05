class NodeStore {
  constructor() {
    this.store = new WeakMap()
  }

  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    this.store.set(node, value)
  }

  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store.get(node)
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this.store.has(node)
  }
}
