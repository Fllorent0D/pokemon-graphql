import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEgg_group_proseInput } from '../languages/languages-create-nested-one-without-egg-group-prose.input';
import { egg_groupsCreateNestedOneWithoutEgg_group_proseInput } from '../egg-groups/egg-groups-create-nested-one-without-egg-group-prose.input';

@InputType()
export class egg_group_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEgg_group_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEgg_group_proseInput;

    @Field(() => egg_groupsCreateNestedOneWithoutEgg_group_proseInput, {nullable:false})
    egg_groups!: egg_groupsCreateNestedOneWithoutEgg_group_proseInput;
}
