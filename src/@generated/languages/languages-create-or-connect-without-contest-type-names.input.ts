import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutContest_type_namesInput } from './languages-create-without-contest-type-names.input';

@InputType()
export class languagesCreateOrConnectWithoutContest_type_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutContest_type_namesInput)
    create!: languagesCreateWithoutContest_type_namesInput;
}
