import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_target_proseInput } from '../languages/languages-create-nested-one-without-move-target-prose.input';

@InputType()
export class move_target_proseCreateWithoutMove_targetsInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_target_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_target_proseInput;
}
