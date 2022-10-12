import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateNestedManyWithoutMove_targetsInput } from '../move-target-prose/move-target-prose-create-nested-many-without-move-targets.input';
import { movesCreateNestedManyWithoutMove_targetsInput } from '../moves/moves-create-nested-many-without-move-targets.input';

@InputType()
export class move_targetsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_target_proseCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    move_target_prose?: move_target_proseCreateNestedManyWithoutMove_targetsInput;

    @Field(() => movesCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutMove_targetsInput;
}
