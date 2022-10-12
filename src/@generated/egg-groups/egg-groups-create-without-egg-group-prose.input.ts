import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_egg_groupsCreateNestedManyWithoutEgg_groupsInput } from '../pokemon-egg-groups/pokemon-egg-groups-create-nested-many-without-egg-groups.input';

@InputType()
export class egg_groupsCreateWithoutEgg_group_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_egg_groupsCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    pokemon_egg_groups?: pokemon_egg_groupsCreateNestedManyWithoutEgg_groupsInput;
}
