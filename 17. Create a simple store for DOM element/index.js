class NodeStore {
  constructor() {
    this._key = '__node_store__' + Math.random().toString(36).substring(2, 15)
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node[this._key] = value
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    node[this._key]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return this._key in node
  }
}
