function elt(type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs) {
      node.setAttribute(a, attrs[a])
    }
    for (let child of children) {
      if (typeof child != "string") node.appendChild(child)
      else node.appendChild(document.createTextNode(child))
    }
    return node
}

function renderSJDON(element, root) {
    if (!Array.isArray(element)) return
    if (typeof element[0] !== 'string') return

    let c = 0
    let children = []
    let attrs, text
    for (let i = 1; i < element.length; i++) {
      if (Array.isArray(element[i])) children[c++] = element[i]
      else if (typeof element[i] === 'object' && typeof attrs === 'undefined') attrs = element[i]
      else if (typeof element[i] === 'string' && typeof text === 'undefined') text = element[i]
    }

    let newElement
    if (typeof text !== 'undefined') newElement = elt(element[0], attrs, text)
    else newElement = elt(element[0], attrs)

    root.appendChild(newElement)

    for (c in children) {
      renderSJDON(children[c], newElement)
    }
}