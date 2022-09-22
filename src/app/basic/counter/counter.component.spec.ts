import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe hacer match con el snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('increseBy basado en el argumento', () => {
    component.increaseBy(1);
    expect(component.counter).toEqual(1);
  });

  it('Al hacer click debe aumentar o decrementar el valor', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();

    expect(component.counter).toEqual(1);

    buttons[1].click();
    buttons[1].click();

    expect(component.counter).toEqual(-1);
  });

  it('Al ejecutar increaseBy actualiza el html', () => {
    component.increaseBy(2);
    fixture.detectChanges();

    const h1 = compiled.querySelector('h2');
    expect(h1?.textContent).toContain('2');
  });
});
