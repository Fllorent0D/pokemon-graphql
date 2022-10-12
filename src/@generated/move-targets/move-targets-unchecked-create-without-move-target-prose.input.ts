import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { movesUncheckedCreateNestedManyWithoutMove_targetsInput } from '../moves/moves-unchecked-create-nested-many-without-move-targets.input';

@InputType()
export class move_targetsUncheckedCreateWithoutMove_target_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => movesUncheckedCreateNestedManyWithoutMove_targetsInput, {nullable:true})
    moves?: movesUncheckedCreateNestedManyWithoutMove_targetsInput;
}
