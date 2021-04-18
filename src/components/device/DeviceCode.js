import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { saveAs } from "file-saver";

import { BrowserQRCodeSvgWriter } from "@zxing/browser";
import SideNavDevice from "./SideNavDevice";

let svgElement;
let isDone = false;
const codeWriter = new BrowserQRCodeSvgWriter();

const DeviceCode = () => {
  useEffect(() => {
    isDone = false;

    console.log("ZXing code writer initialized");
    svgElement = codeWriter.writeToDom("#qr-result", "test123", 400, 400);
    isDone = true;
  });

  const downloadCode = () => {
    isDone = false;
    console.log("ja");
    svgElement = document.querySelector("#qr-result > svg");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgData]);
    saveAs(blob, "device-name.svg");
    isDone = true;
  };

  return (
    <>
      <SideNavDevice />
      <section className="qr-content">
        <pre>
          <code id="qr-result"></code>
        </pre>
        <Button
          label="Download"
          className={isDone ? "p-disabled" : null}
          onClick={downloadCode}
        />
      </section>
    </>
  );
};

export default DeviceCode;
