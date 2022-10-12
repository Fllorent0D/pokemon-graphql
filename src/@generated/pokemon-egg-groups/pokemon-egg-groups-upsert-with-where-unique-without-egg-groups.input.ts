import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsWhereUniqueInput } from './pokemon-egg-groups-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_egg_groupsUpdateWithoutEgg_groupsInput } from './pokemon-egg-groups-update-without-egg-groups.input';
import { pokemon_egg_groupsCreateWithoutEgg_groupsInput } from './pokemon-egg-groups-create-without-egg-groups.input';

@InputType()
export class pokemon_egg_groupsUpsertWithWhereUniqueWithoutEgg_groupsInput {

    @Field(() => pokemon_egg_groupsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_egg_groupsWhereUniqueInput)
    where!: pokemon_egg_groupsWhereUniqueInput;

    @Field(() => pokemon_egg_groupsUpdateWithoutEgg_groupsInput, {nullable:false})
    @Type(() => pokemon_egg_groupsUpdateWithoutEgg_groupsInput)
    update!: pokemon_egg_groupsUpdateWithoutEgg_groupsInput;

    @Field(() => pokemon_egg_groupsCreateWithoutEgg_groupsInput, {nullable:false})
    @Type(() => pokemon_egg_groupsCreateWithoutEgg_groupsInput)
    create!: pokemon_egg_groupsCreateWithoutEgg_groupsInput;
}
