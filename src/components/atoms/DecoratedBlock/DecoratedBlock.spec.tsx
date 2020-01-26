import React from "react";

import DecoratedBlock from "./DecoratedBlock";
import TestRenderer, { ReactTestInstance, ReactTestRenderer } from "react-test-renderer";
import EffectiveBlock from "../EffectiveBlock/EffectiveBlock";

describe("DecoratedBlock", () => {
  const testRenderer: ReactTestRenderer = TestRenderer.create(
    <DecoratedBlock>
      <span id="child1">子要素1</span>
      <div id="child2">子要素2</div>
    </DecoratedBlock>
  );
  const testInstance: ReactTestInstance = testRenderer.root;

  it("子要素が正しいか", () => {
    expect(testInstance.findByProps({ id: "child1" }).props.children).toBe("子要素1");
    expect(testInstance.findByProps({ id: "child2" }).props.children).toBe("子要素2");
  });
});
