import React from 'react';
import { Button, Modal } from 'antd';
import { useDnD } from './DnDContext';

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">创建工作流</div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, { type: 'input', name: '开始实验' })
        }
        draggable
      >
        开始实验
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: '实验/树脂合成' })
        }
        draggable
      >
        实验/树脂合成
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: '实验/制漆' })
        }
        draggable
      >
        实验/制漆
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: '实验/老化测试' })
        }
        draggable
      >
        实验/老化测试
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: '实验/xx' })
        }
        draggable
      >
        实验/xx
      </div>
      <div
        className="dndnode"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: '检测' })
        }
        draggable
      >
        检测
      </div>
      <div
        className="dndnode"
        onDragStart={(event) =>
          onDragStart(event, { type: 'default', name: 'xx检测' })
        }
        draggable
      >
        xx检测
      </div>
      <div
        className="dndnode"
        onDragStart={(event) =>
          onDragStart(event, { type: 'output', name: '结束/反馈' })
        }
        draggable
      >
        结束/反馈
      </div>
      <br />
      {/* <Button onClick={() => preview()}>预览流程</Button> */}
    </aside>
  );
};
