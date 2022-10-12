import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput } from '../egg-group-prose/egg-group-prose-unchecked-create-nested-many-without-egg-groups.input';
import { pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput } from '../pokemon-egg-groups/pokemon-egg-groups-unchecked-create-nested-many-without-egg-groups.input';

@InputType()
export class egg_groupsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    egg_group_prose?: egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput;

    @Field(() => pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsUncheckedCreateNestedManyWithoutEgg_groupsInput;
}
