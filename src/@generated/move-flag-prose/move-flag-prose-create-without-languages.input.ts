import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsCreateNestedOneWithoutMove_flag_proseInput } from '../move-flags/move-flags-create-nested-one-without-move-flag-prose.input';

@InputType()
export class move_flag_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => move_flagsCreateNestedOneWithoutMove_flag_proseInput, {nullable:false})
    move_flags!: move_flagsCreateNestedOneWithoutMove_flag_proseInput;
}
