import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsCreateNestedOneWithoutMove_target_proseInput } from '../move-targets/move-targets-create-nested-one-without-move-target-prose.input';

@InputType()
export class move_target_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => move_targetsCreateNestedOneWithoutMove_target_proseInput, {nullable:false})
    move_targets!: move_targetsCreateNestedOneWithoutMove_target_proseInput;
}
