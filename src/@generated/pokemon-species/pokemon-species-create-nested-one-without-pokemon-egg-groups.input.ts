import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_egg_groupsInput } from './pokemon-species-create-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput } from './pokemon-species-create-or-connect-without-pokemon-egg-groups.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedOneWithoutPokemon_egg_groupsInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput)
    create?: pokemon_speciesCreateWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;
}
