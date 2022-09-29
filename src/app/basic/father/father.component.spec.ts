import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FatherSongComponent } from '../father-song/father-song.component';
import { FatherComponent } from './father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSongComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al llamar el onSetClient debe mostrar el nuevo nombre en el html', () => {
    component.onSetClient('Andres Perea');
    fixture.detectChanges();

    const codeHtml = compiled.querySelector('.pt-1');
    expect(codeHtml?.textContent).toContain('Andres Perea');
    expect(codeHtml?.textContent).toContain('name');
  });

  it('debe eliminar los datos del cliente al emitir deleteCliente (hijo)', () => {
    const data = { id: 1, name: 'Cristiano' };
    component.cliente = data;
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSongComponent)
    );
    const sonComponent: FatherSongComponent = sonDebugElement.componentInstance;

    sonComponent.deleteCliente.emit();
    expect(component.cliente).toBe(undefined);
  });

  it('debe actualizar los datos del cliente al emitir updateCliente (hijo)', () => {
    const data = { id: 1, name: 'Cristiano' };
    component.cliente = data;
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(
      By.directive(FatherSongComponent)
    );
    const sonComponent: FatherSongComponent = sonDebugElement.componentInstance;

    sonComponent.updateCliente.emit({ id: 1, name: 'Cristiano' });
    expect(component.cliente).toEqual({ id: 1, name: 'Cristiano' });
  });
});
