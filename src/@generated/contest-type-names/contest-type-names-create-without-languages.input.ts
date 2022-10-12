import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateNestedOneWithoutContest_type_namesInput } from '../contest-types/contest-types-create-nested-one-without-contest-type-names.input';

@InputType()
export class contest_type_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    flavor?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => contest_typesCreateNestedOneWithoutContest_type_namesInput, {nullable:false})
    contest_types!: contest_typesCreateNestedOneWithoutContest_type_namesInput;
}
