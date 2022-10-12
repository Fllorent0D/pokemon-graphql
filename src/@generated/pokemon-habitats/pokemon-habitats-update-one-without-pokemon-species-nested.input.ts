import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitatsCreateWithoutPokemon_speciesInput } from './pokemon-habitats-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-habitats-create-or-connect-without-pokemon-species.input';
import { pokemon_habitatsUpsertWithoutPokemon_speciesInput } from './pokemon-habitats-upsert-without-pokemon-species.input';
import { pokemon_habitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { pokemon_habitatsUpdateWithoutPokemon_speciesInput } from './pokemon-habitats-update-without-pokemon-species.input';

@InputType()
export class pokemon_habitatsUpdateOneWithoutPokemon_speciesNestedInput {

    @Field(() => pokemon_habitatsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_habitatsCreateWithoutPokemon_speciesInput)
    create?: pokemon_habitatsCreateWithoutPokemon_speciesInput;

    @Field(() => pokemon_habitatsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_habitatsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: pokemon_habitatsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => pokemon_habitatsUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_habitatsUpsertWithoutPokemon_speciesInput)
    upsert?: pokemon_habitatsUpsertWithoutPokemon_speciesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    connect?: pokemon_habitatsWhereUniqueInput;

    @Field(() => pokemon_habitatsUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => pokemon_habitatsUpdateWithoutPokemon_speciesInput)
    update?: pokemon_habitatsUpdateWithoutPokemon_speciesInput;
}
