// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

export default class Config{

    static playing:boolean = false
    //选中的id
    static checkedId:number = 0
    //选中巡逻方向 0拐弯,1左右,2上下
    static checkPatrol:number = 0
    //选中速度
    static checkSpeed:number = 1

    //当前关卡
    static nowStage:number = 0
    static stageDatas:Array<any> = [
        {"0-0":{"id":101},"0-5":{"id":101},"0-8":{"id":101},"1-1":{"id":101},"1-4":{"id":101},"1-5":{"id":101},"1-7":{"id":101},"1-9":{"id":101},"2-1":{"id":101},"2-3":{"id":101},"2-6":{"id":101},"2-7":{"id":101},"2-9":{"id":101},"3-2":{"id":101},"3-3":{"id":101},"3-9":{"id":101},"4-6":{"id":101},"4-7":{"id":101},"4-9":{"id":101},"5-0":{"id":101},"5-3":{"id":101},"5-5":{"id":101},"6-4":{"id":101},"6-5":{"id":101},"6-8":{"id":101},"6-9":{"id":101},"7-0":{"id":101},"7-4":{"id":101},"8-1":{"id":101},"8-4":{"id":101},"9-2":{"id":101},"9-4":{"id":101},"10-2":{"id":101},"10-4":{"id":101},"11-2":{"id":101},"11-4":{"id":101},"12-2":{"id":101},"12-4":{"id":101},"12-9":{"id":101},"13-2":{"id":101},"13-4":{"id":101},"13-8":{"id":101},"13-9":{"id":101},"14-1":{"id":101},"14-4":{"id":101},"14-9":{"id":101},"15-0":{"id":101},"15-5":{"id":101},"15-6":{"id":101},"16-2":{"id":101},"16-3":{"id":101},"16-5":{"id":101},"17-2":{"id":101},"17-3":{"id":101},"17-5":{"id":101},"17-7":{"id":101},"17-8":{"id":101},"18-2":{"id":101},"18-3":{"id":101},"18-5":{"id":101},"18-7":{"id":101},"18-8":{"id":101},"19-2":{"id":101},"19-3":{"id":101},"19-7":{"id":101},"19-8":{"id":101},"19-9":{"id":101},"8-9":{"id":101},"8-7":{"id":101},"9-6":{"id":101},"1-0":{"id":204},"2-4":{"id":200},"3-1":{"id":202},"3-5":{"id":206},"3-6":{"id":200},"3-7":{"id":200},"5-4":{"id":201},"5-6":{"id":201},"5-9":{"id":200},"6-0":{"id":205},"7-5":{"id":210},"7-6":{"id":201},"8-6":{"id":202},"9-5":{"id":202},"10-3":{"id":200},"10-5":{"id":201},"11-3":{"id":200},"12-3":{"id":200},"13-5":{"id":202},"14-3":{"id":201},"14-5":{"id":201},"15-3":{"id":201},"15-4":{"id":201},"16-4":{"id":200},"16-9":{"id":202},"17-0":{"id":200},"17-4":{"id":200},"17-6":{"id":200},"17-9":{"id":202},"18-0":{"id":200},"18-4":{"id":200},"18-6":{"id":200},"18-9":{"id":204},"19-0":{"id":200},"19-1":{"id":205},"19-6":{"id":200},"9-7":{"id":202},"12-8":{"id":200},"11-8":{"id":200},"11-7":{"id":200},"12-7":{"id":200},"6-3":{"id":12,"patrol":1,"speed":3},"7-9":{"id":12,"patrol":2,"speed":1},"15-9":{"id":11,"patrol":2,"speed":1},"9-9":{"id":11,"patrol":2},"13-7":{"id":12,"patrol":2},"11-5":{"id":1,"speed":3},"12-5":{"id":2,"speed":3}}
        ,{"0-5":{"id":101},"0-7":{"id":101},"0-8":{"id":101},"0-9":{"id":101},"1-0":{"id":101},"1-5":{"id":101},"1-9":{"id":101},"2-0":{"id":101},"2-2":{"id":101},"2-3":{"id":101},"2-5":{"id":101},"2-7":{"id":101},"2-9":{"id":101},"3-0":{"id":101},"3-1":{"id":101},"3-2":{"id":101},"3-5":{"id":101},"3-8":{"id":101},"3-9":{"id":101},"4-0":{"id":101},"4-5":{"id":101},"4-6":{"id":101},"5-0":{"id":101},"5-2":{"id":101},"5-3":{"id":101},"5-5":{"id":101},"5-6":{"id":101},"6-0":{"id":101},"6-2":{"id":101},"6-3":{"id":101},"6-5":{"id":101},"6-8":{"id":101},"6-9":{"id":101},"7-0":{"id":101},"7-5":{"id":101},"7-9":{"id":101},"8-5":{"id":101},"8-7":{"id":101},"8-8":{"id":101},"9-1":{"id":101},"9-4":{"id":101},"10-4":{"id":101},"11-2":{"id":101},"11-3":{"id":101},"11-4":{"id":110},"11-5":{"id":101},"12-6":{"id":101},"12-7":{"id":101},"12-9":{"id":101},"13-0":{"id":101},"13-1":{"id":101},"13-2":{"id":101},"13-6":{"id":101},"14-4":{"id":101},"14-5":{"id":101},"14-6":{"id":101},"14-8":{"id":101},"14-9":{"id":101},"15-0":{"id":101},"15-4":{"id":101},"15-7":{"id":101},"16-0":{"id":101},"16-4":{"id":101},"16-7":{"id":101},"16-8":{"id":101},"17-0":{"id":101},"17-1":{"id":101},"17-4":{"id":101},"18-0":{"id":101},"18-5":{"id":101},"18-6":{"id":101},"18-7":{"id":101},"19-0":{"id":101},"19-1":{"id":101},"19-2":{"id":101},"19-3":{"id":101},"19-5":{"id":101},"19-6":{"id":101},"19-7":{"id":101},"0-4":{"id":205},"1-8":{"id":206},"2-1":{"id":203},"2-8":{"id":204},"4-1":{"id":201},"6-6":{"id":211},"7-8":{"id":202},"9-2":{"id":200},"9-8":{"id":202},"10-2":{"id":200},"10-6":{"id":200},"10-7":{"id":200},"10-9":{"id":202},"11-0":{"id":201},"11-8":{"id":200},"14-7":{"id":205},"15-1":{"id":200},"15-2":{"id":200},"15-5":{"id":200},"15-6":{"id":200},"15-8":{"id":204},"16-1":{"id":200},"16-2":{"id":200},"16-5":{"id":200},"16-6":{"id":200},"17-5":{"id":201},"17-7":{"id":202},"17-8":{"id":202},"18-1":{"id":210},"0-0":{"id":12,"patrol":2,"speed":1},"4-9":{"id":10,"patrol":2,"speed":1},"5-1":{"id":11,"patrol":1,"speed":1},"5-9":{"id":12,"patrol":2,"speed":1},"8-4":{"id":11,"patrol":1,"speed":1},"9-9":{"id":10,"speed":1},"10-8":{"id":10,"speed":1},"14-3":{"id":11,"patrol":2,"speed":1},"0-6":{"id":2,"speed":3},"19-4":{"id":1,"speed":3}}
        ,{"0-9":{"id":101},"0-8":{"id":101},"0-7":{"id":101},"0-6":{"id":101},"0-0":{"id":101},"0-1":{"id":101},"0-2":{"id":101},"0-3":{"id":101},"2-9":{"id":101},"2-8":{"id":101},"2-7":{"id":101},"2-6":{"id":101},"2-5":{"id":101},"2-0":{"id":101},"2-1":{"id":101},"2-2":{"id":101},"5-1":{"id":101},"5-0":{"id":101},"5-4":{"id":101},"5-7":{"id":101},"5-8":{"id":101},"7-8":{"id":101},"7-7":{"id":101},"7-6":{"id":101},"7-5":{"id":101},"7-4":{"id":101},"7-3":{"id":101},"7-2":{"id":101},"7-1":{"id":101},"9-6":{"id":101},"9-7":{"id":101},"9-8":{"id":101},"10-8":{"id":101},"11-8":{"id":101},"10-9":{"id":112},"12-9":{"id":101},"10-4":{"id":101},"11-4":{"id":101},"10-3":{"id":101},"10-2":{"id":101},"10-1":{"id":101},"12-0":{"id":101},"12-2":{"id":101},"13-2":{"id":101},"13-4":{"id":111},"14-5":{"id":101},"14-4":{"id":101},"14-3":{"id":101},"14-2":{"id":101},"14-1":{"id":101},"14-0":{"id":101},"15-1":{"id":101},"15-2":{"id":101},"15-3":{"id":101},"15-4":{"id":101},"15-5":{"id":101},"15-0":{"id":110},"15-9":{"id":101},"15-8":{"id":101},"19-6":{"id":101},"18-6":{"id":101},"18-4":{"id":101},"19-4":{"id":101},"1-8":{"id":200},"1-7":{"id":200},"3-9":{"id":202},"3-8":{"id":202},"3-7":{"id":202},"4-9":{"id":202},"4-8":{"id":202},"4-7":{"id":202},"3-2":{"id":201},"3-1":{"id":201},"3-0":{"id":201},"4-2":{"id":201},"4-1":{"id":201},"4-0":{"id":201},"6-1":{"id":202},"6-8":{"id":201},"13-9":{"id":202},"14-9":{"id":201},"11-7":{"id":200},"10-7":{"id":200},"10-6":{"id":200},"11-6":{"id":200},"13-0":{"id":202},"15-6":{"id":205},"18-5":{"id":206},"19-5":{"id":200},"19-7":{"id":201},"19-8":{"id":201},"19-3":{"id":202},"19-2":{"id":202},"17-2":{"id":205},"1-6":{"id":11,"patrol":2},"1-3":{"id":12,"patrol":2},"8-5":{"id":11,"patrol":1},"11-9":{"id":11,"patrol":1},"11-0":{"id":12,"patrol":2},"16-9":{"id":10,"patrol":2},"16-8":{"id":12,"patrol":2},"17-8":{"id":10,"patrol":2},"0-5":{"id":1,"speed":3},"0-4":{"id":2,"speed":3}}
    ]
    //编辑的关卡
    static editData:any = 
    {"7-6":{"id":1,"speed":3},"11-6":{"id":2,"speed":3}}
    // {"0-0":101,"0-1":101,"0-2":101,"0-3":101,"0-4":101,"0-5":101,"0-6":101,"0-7":101,"0-8":101,"0-9":101,"0-10":101,"0-11":101,"1-0":101,"1-1":101,"1-2":101,"1-3":101,"1-4":101,"1-5":101,"1-6":101,"1-7":101,"1-8":101,"1-9":101,"1-10":101,"1-11":101,"2-0":101,"2-1":101,"2-2":101,"2-3":101,"2-4":101,"2-5":101,"2-6":101,"2-7":101,"2-8":101,"2-9":101,"2-10":101,"2-11":101,"3-0":101,"3-1":101,"3-2":101,"3-3":101,"3-4":101,"3-5":101,"3-6":101,"3-7":101,"3-8":101,"3-9":101,"3-10":101,"3-11":101,"4-0":101,"4-1":101,"4-2":101,"4-3":101,"4-4":101,"4-5":101,"4-6":101,"4-7":101,"4-8":101,"4-9":101,"4-10":101,"4-11":101,"5-0":101,"5-1":101,"5-2":101,"5-3":101,"5-4":101,"5-5":101,"5-6":101,"5-7":101,"5-8":101,"5-9":101,"5-10":101,"5-11":101,"6-0":101,"6-1":101,"6-2":101,"6-3":101,"6-4":101,"6-5":101,"6-6":101,"6-7":101,"6-8":101,"6-9":101,"6-10":101,"6-11":101,"7-0":101,"7-1":101,"7-2":101,"7-3":101,"7-4":101,"7-5":101,"7-6":101,"7-7":101,"7-8":101,"7-9":101,"7-10":101,"7-11":101,"8-0":101,"8-1":101,"8-2":101,"8-3":101,"8-4":101,"8-5":101,"8-6":101,"8-7":101,"8-8":101,"8-9":101,"8-10":101,"8-11":101,"9-0":101,"9-1":101,"9-2":101,"9-3":101,"9-4":101,"9-5":101,"9-6":101,"9-7":101,"9-8":101,"9-9":101,"9-10":101,"9-11":101,"10-0":101,"10-1":101,"10-2":101,"10-3":101,"10-4":101,"10-5":101,"10-6":101,"10-7":101,"10-8":101,"10-9":101,"10-10":101,"10-11":101,"11-0":101,"11-1":101,"11-2":101,"11-3":101,"11-4":10,"11-5":101,"11-6":101,"11-7":101,"11-8":101,"11-9":101,"11-10":101,"11-11":101,"12-0":101,"12-1":101,"12-2":101,"12-3":10,"12-4":101,"12-5":101,"12-6":101,"12-7":101,"12-8":101,"12-9":101,"12-10":101,"12-11":101,"13-0":101,"13-1":101,"13-2":101,"13-3":101,"13-4":101,"13-5":10,"13-6":101,"13-7":101,"13-8":101,"13-9":101,"13-10":101,"13-11":101,"14-0":101,"14-1":101,"14-2":101,"14-3":101,"14-4":101,"14-5":101,"14-6":101,"14-7":101,"14-8":101,"14-9":101,"14-10":101,"14-11":101,"15-0":101,"15-1":101,"15-2":101,"15-3":101,"15-4":101,"15-5":101,"15-6":101,"15-7":101,"15-8":101,"15-9":101,"15-10":101,"15-11":101,"16-0":101,"16-1":101,"16-2":101,"16-3":101,"16-4":101,"16-5":101,"16-6":101,"16-7":101,"16-8":101,"16-9":101,"16-10":101,"16-11":101,"17-0":101,"17-1":101,"17-2":101,"17-3":101,"17-4":101,"17-5":101,"17-6":101,"17-7":101,"17-8":101,"17-9":101,"17-10":101,"17-11":101,"18-0":101,"18-1":101,"18-2":101,"18-3":101,"18-4":101,"18-5":101,"18-6":101,"18-7":101,"18-8":101,"18-9":101,"18-10":101,"18-11":101,"19-0":101,"19-1":101,"19-2":101,"19-3":101,"19-4":101,"19-5":101,"19-6":101,"19-7":101,"19-8":101,"19-9":101,"19-10":101,"19-11":101}
    // {"13-5":10,"12-3":10,"11-4":10,"10-6":101,"12-6":101,"13-6":101,"14-5":101,"14-4":101,"14-3":101,"13-2":101,"11-2":101,"10-4":101,"9-5":101}

    static wNumber:number = 20//24
    static hNumber:number = 10//12
    static unit:number = 60//50

    //角色速度
    static speedHero:number = 3
    //敌人速度
    static speedEnemy:number = 1
    //敌人暂停的帧数
    static pauseFrame:number = 150
    //生成道具间隔时间
    static refreshPaustToolFrame:number = 150

    //当前关卡豆子数量
    static soybeanNumber:number = 0

    static roles = {
        //角色1
        1:{
            unit:56,
            group:"hero",
            zIndex:99,
            speed:Config.speedHero
        },
        //角色2
        2:{
            unit:56,
            group:"hero",
            zIndex:99,
            speed:Config.speedHero
        },
        //敌人0
        10:{
            unit:56,
            boxSizeH:28,
            group:"enemy",
            zIndex:88,
            speed:Config.speedEnemy
        },
        //敌人1
        11:{
            unit:56,
            boxSizeH:28,
            group:"enemy",
            zIndex:88,
            speed:Config.speedEnemy
        },
        //敌人2
        12:{
            unit:56,
            group:"enemy",
            zIndex:88,
            speed:Config.speedEnemy
        },
        //墙
        101:{
            unit:60,
            group:"obstacle",
            zIndex:66,
        },
        //冰冻生成器1
        110:{
            unit:60,
            group:"default",
            zIndex:66,
        },
        //冰冻生成器1
        111:{
            unit:60,
            group:"default",
            zIndex:66,
        },
        //冰冻生成器2
        112:{
            unit:60,
            group:"default",
            zIndex:66,
        },
        //食物0
        200:{
            unit:30,
            group:"food",
            zIndex:77,
        },
        //食物1
        201:{
            unit:30,
            group:"food",
            zIndex:77,
        },
        //食物2
        202:{
            unit:30,
            group:"food",
            zIndex:77,
        },
        //换位
        203:{
            unit:56,
            group:"food",
            zIndex:77,
            boxSize:1
        },
        //传送
        204:{
            unit:56,
            group:"device",
            zIndex:77,
            boxSize:1
        },
        //门开关
        205:{
            unit:56,
            group:"device",
            zIndex:77,
            boxSize:1
        },
        //门
        206:{
            unit:60,
            group:"obstacle",
            zIndex:77,
        },
        //冰冻0
        210:{
            unit:56,
            group:"food",
            zIndex:77,
            boxSize:5
        },
        //冰冻1
        211:{
            unit:56,
            group:"food",
            zIndex:77,
            boxSize:5
        },
        //冰冻2
        212:{
            unit:56,
            group:"food",
            zIndex:77,
            boxSize:5
        },
    }

}
window["Config"] = Config
