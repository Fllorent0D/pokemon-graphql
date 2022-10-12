import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_flag_proseInput } from '../languages/languages-create-nested-one-without-move-flag-prose.input';
import { move_flagsCreateNestedOneWithoutMove_flag_proseInput } from '../move-flags/move-flags-create-nested-one-without-move-flag-prose.input';

@InputType()
export class move_flag_proseCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_flag_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_flag_proseInput;

    @Field(() => move_flagsCreateNestedOneWithoutMove_flag_proseInput, {nullable:false})
    move_flags!: move_flagsCreateNestedOneWithoutMove_flag_proseInput;
}
