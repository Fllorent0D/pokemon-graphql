import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textUpdateWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-update-without-pokemon-species.input';
import { pokemon_species_flavor_textCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-text-create-without-pokemon-species.input';

@InputType()
export class pokemon_species_flavor_textUpsertWithWhereUniqueWithoutPokemon_speciesInput {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => pokemon_species_flavor_textUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateWithoutPokemon_speciesInput)
    update!: pokemon_species_flavor_textUpdateWithoutPokemon_speciesInput;

    @Field(() => pokemon_species_flavor_textCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textCreateWithoutPokemon_speciesInput)
    create!: pokemon_species_flavor_textCreateWithoutPokemon_speciesInput;
}
