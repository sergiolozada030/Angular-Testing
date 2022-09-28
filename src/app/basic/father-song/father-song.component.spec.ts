import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatherSongComponent } from './father-song.component';

describe('FatherSongComponent', () => {
  let component: FatherSongComponent;
  let fixture: ComponentFixture<FatherSongComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSongComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FatherSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('No debe mostrar botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0);
  });

  it('debe aparecer 2 botones si hay cliente', () => {
    component.cliente = { id: 1, name: 'James Cole' };
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('debe de emitir al hacer click en eliminar', () => {
    component.cliente = { id: 1, name: 'James Cole' };
    fixture.detectChanges();
    const btnEliminar = compiled.querySelector('#eliminar');
    jest.spyOn(component.deleteCliente, 'emit');
    btnEliminar?.dispatchEvent(new Event('click'));
    expect(component.deleteCliente.emit).toHaveBeenCalled();
  });

  it('debe emitir nuevos valores al hacer click en cambiar id ', () => {
    component.cliente = { id: 1, name: 'James Cole' };
    fixture.detectChanges();
    jest.spyOn(component.updateCliente, 'emit');
    const btnCambiarId = compiled.querySelector('#update');
    btnCambiarId?.dispatchEvent(new Event('click'));
    expect(component.updateCliente.emit).toHaveBeenCalledWith({
      id: 2,
      name: 'James Cole',
    });
  });
});
