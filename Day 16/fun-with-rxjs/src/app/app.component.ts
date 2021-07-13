import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isShowingReader = true;

	toggleReader(){
		this.isShowingReader = !this.isShowingReader;
	}

  	createIntervalObservable() : Observable<number>{
    	return interval(1000);
  	}

	createCustomObservable(): Observable<number>{
		return new Observable<number>(observer => {
			
			observer.next(100);

			setTimeout(() => observer.next(200), 2000);
			setTimeout(() => observer.next(500), 5000);
			setTimeout(() => observer.next(700), 8000);
			setTimeout(() => observer.complete(), 10000);
		})
	}
	
	createCustomSubject(): Observable<number>{
		let subject = new Subject<number>();

		subject.next(100);

		setTimeout(() => subject.next(200), 2000);
		setTimeout(() => subject.next(500), 5000);
		setTimeout(() => subject.next(700), 8000);
		setTimeout(() => subject.complete(), 10000);

		return subject;
	}

	createCustomBehaviorSubject(): Observable<number>{
		let subject = new BehaviorSubject<number>(100);

		//subject.next(100);
		setTimeout(() => subject.next(200), 2000);
		setTimeout(() => subject.next(500), 5000);
		setTimeout(() => subject.next(700), 8000);
		setTimeout(() => subject.complete(), 10000);

		return subject;
	}

	createCustomReplaySubject(): Observable<number>{
		let subject = new ReplaySubject<number>();

		subject.next(100);
		setTimeout(() => subject.next(200), 2000);
		setTimeout(() => subject.next(500), 5000);
		setTimeout(() => subject.next(700), 8000);
		setTimeout(() => subject.complete(), 10000);

		return subject;
	}

  	createObserver(id: string): Observer<number>{
		return {
			next: val => console.log(`observer ${id}: next ${val}`),
			complete: () => console.log(`observer ${id}: completed`),
			error: err => console.log(`observer ${id}: error ${err}`) 
		};
  	}

  	go(){
		let observer1 = this.createObserver('A');
		let observer2 = this.createObserver('B');
		let observer3 = this.createObserver('C');

		let observable = this.createCustomReplaySubject();

		observable.subscribe(observer1);

		setTimeout(() => {
			observable.subscribe(observer2)
		}, 2500);

		setTimeout(() => {
			observable.subscribe(observer3)
		}, 12500);
 	}
}
