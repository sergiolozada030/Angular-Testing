import { PokemonService } from './../service/pokemon.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharizardComponent } from './charizard.component';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar un loading al inicio', () => {
    const p = compiled.querySelector('p');
    expect(p?.textContent).toEqual('Loading...');
  });

  it('Debe cargar la informacion del pokemon inmediatamente', () => {
    const data = {
      name: 'charizardo',
      sprites: {
        front_default: 'https//:pokemon.png',
      },
    };

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(req.request.method).toBe('GET');
    req.flush(data);
    fixture.detectChanges();

    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');
    expect(h3?.textContent?.toLowerCase()).toEqual(data.name.toLowerCase());
    expect(img?.src).toContain(data.sprites.front_default);
    expect(img?.alt).toBe(data.name);
  });
});
