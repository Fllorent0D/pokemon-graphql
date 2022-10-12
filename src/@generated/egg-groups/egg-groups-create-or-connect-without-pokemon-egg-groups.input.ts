import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsWhereUniqueInput } from './egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateWithoutPokemon_egg_groupsInput } from './egg-groups-create-without-pokemon-egg-groups.input';

@InputType()
export class egg_groupsCreateOrConnectWithoutPokemon_egg_groupsInput {

    @Field(() => egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => egg_groupsWhereUniqueInput)
    where!: egg_groupsWhereUniqueInput;

    @Field(() => egg_groupsCreateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => egg_groupsCreateWithoutPokemon_egg_groupsInput)
    create!: egg_groupsCreateWithoutPokemon_egg_groupsInput;
}
