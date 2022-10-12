import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsUpdateWithoutPokemon_egg_groupsInput } from './egg-groups-update-without-pokemon-egg-groups.input';
import { Type } from 'class-transformer';
import { egg_groupsCreateWithoutPokemon_egg_groupsInput } from './egg-groups-create-without-pokemon-egg-groups.input';

@InputType()
export class egg_groupsUpsertWithoutPokemon_egg_groupsInput {

    @Field(() => egg_groupsUpdateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => egg_groupsUpdateWithoutPokemon_egg_groupsInput)
    update!: egg_groupsUpdateWithoutPokemon_egg_groupsInput;

    @Field(() => egg_groupsCreateWithoutPokemon_egg_groupsInput, {nullable:false})
    @Type(() => egg_groupsCreateWithoutPokemon_egg_groupsInput)
    create!: egg_groupsCreateWithoutPokemon_egg_groupsInput;
}
