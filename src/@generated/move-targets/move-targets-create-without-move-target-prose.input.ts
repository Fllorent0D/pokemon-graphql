import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedManyWithoutMove_targetsInput } from '../moves/moves-create-nested-many-without-move-targets.input';

@InputType()
export class move_targetsCreateWithoutMove_target_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => movesCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutMove_targetsInput;
}
