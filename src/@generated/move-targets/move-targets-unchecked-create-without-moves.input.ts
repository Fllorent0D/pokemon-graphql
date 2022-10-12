import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_target_proseUncheckedCreateNestedManyWithoutMove_targetsInput } from '../move-target-prose/move-target-prose-unchecked-create-nested-many-without-move-targets.input';

@InputType()
export class move_targetsUncheckedCreateWithoutMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_target_proseUncheckedCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    move_target_prose?: move_target_proseUncheckedCreateNestedManyWithoutMove_targetsInput;
}
