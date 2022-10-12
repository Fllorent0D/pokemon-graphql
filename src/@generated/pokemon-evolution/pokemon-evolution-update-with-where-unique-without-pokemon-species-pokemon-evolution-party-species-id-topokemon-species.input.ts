import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput } from './pokemon-evolution-update-without-pokemon-species-pokemon-evolution-party-species-id-topokemon-species.input';

@InputType()
export class pokemon_evolutionUpdateWithWhereUniqueWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput)
    data!: pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_party_species_idTopokemon_speciesInput;
}
