import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-evolution-update-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species.input';
import { pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput } from './pokemon-evolution-create-without-pokemon-species-pokemon-evolution-evolved-species-id-topokemon-species.input';

@InputType()
export class pokemon_evolutionUpsertWithWhereUniqueWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput {

    @Field(() => pokemon_evolutionWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    where!: pokemon_evolutionWhereUniqueInput;

    @Field(() => pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    update!: pokemon_evolutionUpdateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput;

    @Field(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput)
    create!: pokemon_evolutionCreateWithoutPokemon_species_pokemon_evolution_evolved_species_idTopokemon_speciesInput;
}
