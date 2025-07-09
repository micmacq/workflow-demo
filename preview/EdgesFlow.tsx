import React from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background,
} from '@xyflow/react';
import {Button} from 'antd';
import {useState} from 'react';

import '@xyflow/react/dist/style.css';

import { AnimatedSVGEdge } from './AnimatedSVGEdge';

// const initialNodes = [
//   { id: '1', position: { x: -100, y: -200 }, data: { label: 'A' } },
//   { id: '2', position: { x: 100, y: 200 }, data: { label: 'B' } },
// ];

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const initialEdges = [
  { id: '1->2', type: 'animatedSvg', source: '1', target: '2' },
];

const EdgesFlow = ({ initialNodes, initialEdges }) => {
  console.log(initialNodes, initialEdges);
  const _initialEdges = [...initialEdges];
  _initialEdges[0].type = 'animatedSvg';
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: 600, height: 400 }}>
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

export default EdgesFlow;
