import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_species_flavor_textInput } from './pokemon-species-create-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_textInput } from './pokemon-species-create-or-connect-without-pokemon-species-flavor-text.input';
import { pokemon_speciesUpsertWithoutPokemon_species_flavor_textInput } from './pokemon-species-upsert-without-pokemon-species-flavor-text.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput } from './pokemon-species-update-without-pokemon-species-flavor-text.input';

@InputType()
export class pokemon_speciesUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_species_flavor_textInput)
    create?: pokemon_speciesCreateWithoutPokemon_species_flavor_textInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_textInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_species_flavor_textInput;

    @Field(() => pokemon_speciesUpsertWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutPokemon_species_flavor_textInput)
    upsert?: pokemon_speciesUpsertWithoutPokemon_species_flavor_textInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput)
    update?: pokemon_speciesUpdateWithoutPokemon_species_flavor_textInput;
}
