import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesUpdateWithoutPokemon_speciesInput } from './pokemon-species-names-update-without-pokemon-species.input';
import { pokemon_species_namesCreateWithoutPokemon_speciesInput } from './pokemon-species-names-create-without-pokemon-species.input';

@InputType()
export class pokemon_species_namesUpsertWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;

    @Field(() => pokemon_species_namesUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateWithoutPokemon_speciesInput)
    update!: pokemon_species_namesUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_namesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_namesCreateWithoutPokemon_speciesInput)
    create!: pokemon_species_namesCreateWithoutPokemon_speciesInput;
}
