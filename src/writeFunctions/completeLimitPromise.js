/** 实现有并行限制的Promise调度器问题 */
class Scheduler {
    constructor() {
        this.quene = []
        this.maxCount = 5
        this.runCounts = 0
    }

    /** 往队列插入Promise Generator函数 */
    add(promiseCreator) {
        this.quene.push(promiseCreator)
    }

    /** 启动函数，将promise们启动起来 */
    taskStart() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request()
        }
    }

    /** 每次从队列中取出Promise Generator并执行，此Promise执行完成之后应该调用递归调用request函数做到执行下一个Promise */
    request() {
        if (!this.quene || !this.quene.length || this.runCounts >= this.maxCount) { return }

        this.runCounts ++

        this.quene.shift()().then(() => {
            this.runCounts --
            this.request()
        })
    }
}

const timeout = time => new Promise(resolve => { setTimeout(resolve, time) } )

const scheduler = new Scheduler()

const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
scheduler.taskStart()