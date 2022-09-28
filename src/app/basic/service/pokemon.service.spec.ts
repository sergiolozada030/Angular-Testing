import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe traer la informacion del pokemon charizard', (done) => {
    service.getPokemon(6).subscribe((pokemon) => {
      expect(pokemon.name).toEqual('charizard');
      done();
    });
  });
});
