/**
 * A graph of nodes representing points in space.
 * Available in worker threads.
 */
declare class PointGraph {
  /**
   * Create a new PointGraph.
   * @param squareRootCacheSize The number of integers to cache the square root of for use in findShortestPath. If the square of the Euclidean distance between two node positions is >= this number, the square root will have to be calculated on the fly, leading to much longer processing time.
   * @noSelf
   */
  static new(squareRootCacheSize: number): PointGraph;

  /**
   * Get the number of nodes in the graph.
   */
  getSize(): number;

  
  
}
