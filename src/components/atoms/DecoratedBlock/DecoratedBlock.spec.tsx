import React from "react";
import DecoratedBlock from "./DecoratedBlock";
import TestRenderer, { ReactTestRenderer } from "react-test-renderer";

describe("DecoratedBlock", () => {
  const testRenderer: ReactTestRenderer = TestRenderer.create(<DecoratedBlock></DecoratedBlock>);

  it("テスト1", () => {
    expect(121).toBe(121);
  });
});
