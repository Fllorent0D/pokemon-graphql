import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput } from '../egg-group-prose/egg-group-prose-unchecked-create-nested-many-without-egg-groups.input';

@InputType()
export class egg_groupsUncheckedCreateWithoutPokemon_egg_groupsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput, {nullable:true})
    egg_group_prose?: egg_group_proseUncheckedCreateNestedManyWithoutEgg_groupsInput;
}
