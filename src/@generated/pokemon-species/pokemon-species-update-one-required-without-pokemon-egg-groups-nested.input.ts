import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_egg_groupsInput } from './pokemon-species-create-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput } from './pokemon-species-create-or-connect-without-pokemon-egg-groups.input';
import { pokemon_speciesUpsertWithoutPokemon_egg_groupsInput } from './pokemon-species-upsert-without-pokemon-egg-groups.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithoutPokemon_egg_groupsInput } from './pokemon-species-update-without-pokemon-egg-groups.input';

@InputType()
export class pokemon_speciesUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput {

    @Field(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_egg_groupsInput)
    create?: pokemon_speciesCreateWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput)
    connectOrCreate?: pokemon_speciesCreateOrConnectWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesUpsertWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesUpsertWithoutPokemon_egg_groupsInput)
    upsert?: pokemon_speciesUpsertWithoutPokemon_egg_groupsInput;

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesUpdateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => pokemon_speciesUpdateWithoutPokemon_egg_groupsInput)
    update?: pokemon_speciesUpdateWithoutPokemon_egg_groupsInput;
}
