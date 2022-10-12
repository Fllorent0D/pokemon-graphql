import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutContest_type_namesInput } from './languages-create-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutContest_type_namesInput } from './languages-create-or-connect-without-contest-type-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutContest_type_namesInput {

    @Field(() => languagesCreateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutContest_type_namesInput)
    create?: languagesCreateWithoutContest_type_namesInput;

    @Field(() => languagesCreateOrConnectWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutContest_type_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutContest_type_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
