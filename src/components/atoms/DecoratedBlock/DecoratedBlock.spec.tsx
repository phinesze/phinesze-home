import React from "react";

import DecoratedBlock from "./DecoratedBlock";
import TestRenderer, { ReactTestInstance, ReactTestRenderer } from "react-test-renderer";

describe("DecoratedBlock", () => {
  const testRenderer: ReactTestRenderer = TestRenderer.create(
    <DecoratedBlock>
      子要素部分
      <div>子要素</div>
    </DecoratedBlock>
  );
  const testInstance: ReactTestInstance = testRenderer.root;
  console.log(testInstance.findByType("div"));
  it("テスト1", () => {
    expect(121).toBe(121);
  });
});
