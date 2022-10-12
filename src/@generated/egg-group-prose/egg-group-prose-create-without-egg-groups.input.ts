import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutEgg_group_proseInput } from '../languages/languages-create-nested-one-without-egg-group-prose.input';

@InputType()
export class egg_group_proseCreateWithoutEgg_groupsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutEgg_group_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutEgg_group_proseInput;
}
