import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_species_proseInput } from './pokemon-species-create-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput } from './pokemon-species-create-or-connect-without-pokemon-species-prose.input';
import { pokemon_speciesUpsertWithoutPokemon_species_proseInput } from './pokemon-species-upsert-without-pokemon-species-prose.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutPokemon_species_proseInput } from './pokemon-species-update-without-pokemon-species-prose.input';

@InputType()
export class pokemon_speciesUpdateOneRequiredWithoutPokemon_species_proseNestedInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_proseInput)
    create?: pokemon_speciesCreateWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesUpsertWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutPokemon_species_proseInput)
    upsert?: pokemon_speciesUpsertWithoutPokemon_species_proseInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_proseInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_proseInput)
    update?: pokemon_speciesUpdateWithoutPokemon_species_proseInput;
}
