import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateWithoutPokemon_egg_groupsInput } from './egg-groups-create-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput } from './egg-groups-create-or-connect-without-pokemon-egg-groups.input';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';

@InputType()
export class egg_groupsCreateNestedOneWithoutPokemon_egg_groupsInput {

    @Field(() => egg_groupsCreateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsCreateWithoutPokemon_egg_groupsInput)
    create?: egg_groupsCreateWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput)
    connectOrCreate?: egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:true})
    @Type(() => egg_groupsWhereUniqueInput)
    connect?: egg_groupsWhereUniqueInput;
}
