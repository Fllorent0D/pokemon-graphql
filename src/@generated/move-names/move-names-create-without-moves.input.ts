import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_namesInput } from '../languages/languages-create-nested-one-without-move-names.input';

@InputType()
export class move_namesCreateWithoutMovesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_namesInput;
}
