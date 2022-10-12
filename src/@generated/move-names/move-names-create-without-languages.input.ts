import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMove_namesInput } from '../moves/moves-create-nested-one-without-move-names.input';

@InputType()
export class move_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => movesCreateNestedOneWithoutMove_namesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_namesInput;
}
