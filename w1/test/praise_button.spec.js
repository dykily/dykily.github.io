


describe("点赞测试",function(){
    var praiseBtn = new PraiseButton();
    var thumbBtn = new Thumb();
    it("点赞测试+",function(){

        
        expect(praiseBtn.praise()).toBe(1);
        praiseBtn.getBtn().click();
        expect(praiseBtn.getBtn().innerHTML).toBe("点赞2");
        expect(praiseBtn.praise()).toBe(praiseBtn.getPraise());

    })
    it("大拇指点赞测试+",function(){
        
        expect(thumbBtn.praise()).toBe(1);
        thumbBtn.getBtn().click();
        expect(thumbBtn.getBtn().innerHTML).toBe("大拇指2");
        expect(thumbBtn.praise()).toBe(thumbBtn.getPraise());
        expect(thumbBtn.getPraiseType()).toBe("大拇指");

    })
});
