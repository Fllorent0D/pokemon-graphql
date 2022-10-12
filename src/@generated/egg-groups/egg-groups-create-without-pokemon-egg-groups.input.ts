import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseCreateNestedManyWithoutEgg_groupsInput } from '../egg-group-prose/egg-group-prose-create-nested-many-without-egg-groups.input';

@InputType()
export class egg_groupsCreateWithoutPokemon_egg_groupsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => egg_group_proseCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    egg_group_prose?: egg_group_proseCreateNestedManyWithoutEgg_groupsInput;
}
