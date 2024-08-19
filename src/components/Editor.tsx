import React, { useEffect, useRef } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/chart/dist/toastui-chart.css";
import chartPlugin from "@toast-ui/editor-plugin-chart";
import initialMarkdown from "./initialMarkdown";

const MyEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      new Editor({
        el: editorRef.current,
        height: "auto",
        initialEditType: "markdown",
        previewStyle: "vertical",
        initialValue: initialMarkdown, 
        plugins: [
          [
            chartPlugin,
            { minWidth: 100, maxWidth: 600, minHeight: 100, maxHeight: 300 },
          ],
        ],
      });
    }
  }, []);

  return (
    <div>
      <div id="editor" ref={editorRef} />
    </div>
  );
};

export default MyEditor;
