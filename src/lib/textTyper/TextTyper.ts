type queueItme = () => Promise<void>;
type textTyperType = {
  loop: boolean;
  deleteSpeed: number;
  typeSpeed: number;
};

export default class TextTyper {
  parent: any;
  loop: boolean;
  deleteSpeed: number;
  typeSpeed: number;
  queue = [] as Array<queueItme>;
  element = document.createElement('div') as HTMLElement;

  constructor(parent: any, { loop, deleteSpeed, typeSpeed }: textTyperType) {
    this.parent = parent.append(this.element);
    this.loop = loop;
    this.deleteSpeed = deleteSpeed;
    this.typeSpeed = typeSpeed;
  }

  typeText(txt: string) {
    this.addToQueue((resolve) => {
      let i = 0;
      const interVal = setInterval(() => {
        this.element.append(txt[i])
        i++
        if (i >= txt.length) {
          clearInterval(interVal);
          resolve()
        }
      }, this.typeSpeed)
    })
    return this;
  }

  deleteAllText(time: number) {
    this.addToQueue((resolve) => {
      const interVal = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        )
        if (this.element.innerText.length === 0) {
          clearInterval(interVal)
          resolve()
        }
      }, time)
    })
    return this
  }

  deleteChar(charNumber: number) {
    this.addToQueue((resolve) => {
      let i = 0;
      const interVal = setInterval(() => {
        i++;
        this.element.innerText = this.element?.innerText.substring(0,
          this.element.innerText.length - 1
        )
        if (i >= charNumber) {
          clearInterval(interVal);
          resolve()
        }
      }, this.deleteSpeed)
    })
    return this
  }

  pauseFor(duration: number) {
    this.addToQueue((resolve) => {
      setTimeout(resolve, duration)
    })
    return this
  }

  async start() {
    let cb = this.queue.shift();
    while (cb) {
      if (typeof cb !== 'function') break;
      await cb();
      if (this.loop) this.queue.push(cb)
      cb = this.queue.shift()
    }
  }

  addToQueue(cb: (resolve: () => void) => void) {
    this.queue.push(() => new Promise(cb))
  }
}