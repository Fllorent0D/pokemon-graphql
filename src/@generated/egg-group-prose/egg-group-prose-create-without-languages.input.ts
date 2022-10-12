import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_groupsCreateNestedOneWithoutEgg_group_proseInput } from '../egg-groups/egg-groups-create-nested-one-without-egg-group-prose.input';

@InputType()
export class egg_group_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => egg_groupsCreateNestedOneWithoutEgg_group_proseInput, {nullable:false})
    egg_groups!: egg_groupsCreateNestedOneWithoutEgg_group_proseInput;
}
