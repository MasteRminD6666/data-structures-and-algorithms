'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}


class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(value) {
        let payload = new Vertex(value);
        this.adjacencyList.set(payload, []);

        return payload;
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {

        if (
            !this.adjacencyList.has(startVertex) &&
            !this.adjacencyList.has(endVertex)
        ) {
            throw new Error('Vertex Error');
        }
        let neighbors = this.adjacencyList.get(startVertex);
        let newEdge = new Edge(endVertex, weight);
        neighbors.push(newEdge);
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            throw new Error('GET NEIGHBOR ERROR :: Invalid vertex');
        }

        return [...this.adjacencyList.get(vertex)];
    }

    breadthFirst(startVertex) {
        const queue = [];
        const visitedNodes = new Set();

        queue.push(startVertex);
        visitedNodes.add(startVertex);

        while (queue.length) {
            const current = queue.shift();

            let neighbors = this.getNeighbors(current);

            for (let edge of neighbors) {
                let neighbor = edge.vertex;

                if (!visitedNodes.has(neighbor)) {
                    queue.push(neighbor);
                    visitedNodes.add(neighbor);
                } else {
                    continue;
                }
            }
        }

        return visitedNodes;
    }

    getNodes() {
        return this.adjacencyList;
    }

    size() {
        if (this.adjacencyList.size === 0) {
            return null;
        } else {
            return this.adjacencyList.size;
        }
    }
}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(A, B);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(F, G);
graph.addDirectedEdge(G, H);
graph.addDirectedEdge(H, F);

module.exports = Graph;
