import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-create-nested-many-without-egg-groups.input';

@InputType()
export class egg_groupsUncheckedCreateWithoutEgg_group_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput;
}
