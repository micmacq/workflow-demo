import React from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
  BaseEdge, getSmoothStepPath, type EdgeProps 
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

 
function AnimatedSVGEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
 
  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <circle r="10" fill="#ff0073">
        <animateMotion dur="2s" repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
}

const initialNodes2 = [
  { id: '1', position: { x: -100, y: -200 }, data: { label: 'A' } },
  { id: '2', position: { x: 100, y: 200 }, data: { label: 'B' } },
];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const initialEdges2 = [
  { id: '1->2', type: 'animatedSvg', source: '1', target: '2' },
];

const FlowPreview = ({initialNodes = initialNodes2, initialEdges = initialEdges2}) => {
  console.log(initialNodes, initialEdges);
  const _initialEdges = [...initialEdges || initialNodes];
  _initialEdges[0].type = 'animatedSvg';
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className='flow-preview' style={{height: 300}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowPreview;
