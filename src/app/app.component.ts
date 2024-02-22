import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.sample1();
    this.sample2();
    this.sample3();
    this.sample4(3000);
    this.sample5();
  }

  sample2() {
    const promise = new Promise((r, e) => {
      r('test promise');
    });

    const result = promise.then((_) => {
      console.log('sample2 promise result:', _);
    });
  }

  async sample1() {
    const promises = [
      new Promise((resolve, _reject) =>
        setTimeout(() => resolve('promise 1'), 3000)
      ),
      new Promise((resolve, _reject) =>
        setTimeout(() => resolve('promise 2'), 1000)
      ),
      new Promise((resolve, _reject) =>
        setTimeout(() => resolve('promise 3'), 1000)
      ),
      new Promise((_resolve, reject) =>
        setTimeout(() => reject('promise4 xatolik yuzaga keldi'), 4000)
      ),
      new Promise((_resolve, reject) =>
        setTimeout(() => reject('promise5 da xatolik yuzaga keldi'), 2000)
      ),
    ];

    try {
      const results = await Promise.all(promises);
      console.log('success natijalar:', results);
    } catch (errors) {
      console.error('Rejected natijalar:', errors);
    }
  }

  sample3(){
    let promise1 = new Promise((resolve, _reject) =>
      setTimeout(() => resolve('promise 1'), 3000)
    );

    let promise2 =new Promise((resolve, _reject) =>
      setTimeout(() => resolve('promise 2'), 1000)
    );
    let promise3 = new Promise((_resolve, reject) =>
      setTimeout(() => reject('promise3 xatolik yuzaga keldi'), 4000)
    );
    
    let result =Promise.all([promise1, promise2, promise3]).then(_=>{
      console.log("success:",_);
      
    }).catch(_=>{
      console.log("error:",_);
      
    });
  }
  sample4(waitTime:number){
    let promise = new Promise((a,b)=>{
      setTimeout(()=>{
        a("sample4 string object");
      }, waitTime);
    });
    let result = promise.then((_)=>{
      console.log(_);
    })
  }
  sample5(){
    let promise1 = new Promise((resolve, _reject) =>
      setTimeout(() => resolve('promise 1'), 3000)
    );

    let promise2 =new Promise((resolve, _reject) =>
      setTimeout(() => resolve('promise 2'), 1000)
    );
    let promise3 = new Promise((_resolve, reject) =>
      setTimeout(() => reject('promise3 xatolik yuzaga keldi'), 4000)
    );
    let promises = [promise1, promise2, promise3];
    promises.forEach(f=>{
      f.then(_=>{
        console.log("sample5 result, success:",_);
        
      }).catch(_=>{
        console.log("sample5 result, error:",_);
        
      });

    });
  }
}
