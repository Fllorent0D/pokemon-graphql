import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutContest_type_namesInput } from '../languages/languages-create-nested-one-without-contest-type-names.input';

@InputType()
export class contest_type_namesCreateWithoutContest_typesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    flavor?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => languagesCreateNestedOneWithoutContest_type_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutContest_type_namesInput;
}
