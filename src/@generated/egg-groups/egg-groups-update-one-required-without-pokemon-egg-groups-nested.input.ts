import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateWithoutPokemon_egg_groupsInput } from './egg-groups-create-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput } from './egg-groups-create-or-connect-without-pokemon-egg-groups.input';
import { egg_groupsUpsertWithoutPokemon_egg_groupsInput } from './egg-groups-upsert-without-pokemon-egg-groups.input';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { egg_groupsUpdateWithoutPokemon_egg_groupsInput } from './egg-groups-update-without-pokemon-egg-groups.input';

@InputType()
export class egg_groupsUpdateOneRequiredWithoutPokemon_egg_groupsNestedInput {

    @Field(() => egg_groupsCreateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsCreateWithoutPokemon_egg_groupsInput)
    create?: egg_groupsCreateWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput)
    connectOrCreate?: egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsUpsertWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsUpsertWithoutPokemon_egg_groupsInput)
    upsert?: egg_groupsUpsertWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsWhereUniqueInput, {nullable:true})
    @Type(() => egg_groupsWhereUniqueInput)
    connect?: egg_groupsWhereUniqueInput;

    @Field(() => egg_groupsUpdateWithoutPokemon_egg_groupsInput, {nullable:true})
    @Type(() => egg_groupsUpdateWithoutPokemon_egg_groupsInput)
    update?: egg_groupsUpdateWithoutPokemon_egg_groupsInput;
}
