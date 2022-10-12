import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateNestedManyWithoutMove_targetsInput } from '../move-target-prose/move-target-prose-create-nested-many-without-move-targets.input';

@InputType()
export class move_targetsCreateWithoutMovesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_target_proseCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    move_target_prose?: move_target_proseCreateNestedManyWithoutMove_targetsInput;
}
