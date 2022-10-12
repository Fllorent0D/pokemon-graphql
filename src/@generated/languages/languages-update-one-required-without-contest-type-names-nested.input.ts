import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutContest_type_namesInput } from './languages-create-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutContest_type_namesInput } from './languages-create-or-connect-without-contest-type-names.input';
import { languagesUpsertWithoutContest_type_namesInput } from './languages-upsert-without-contest-type-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutContest_type_namesInput } from './languages-update-without-contest-type-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutContest_type_namesNestedInput {

    @Field(() => languagesCreateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutContest_type_namesInput)
    create?: languagesCreateWithoutContest_type_namesInput;

    @Field(() => languagesCreateOrConnectWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutContest_type_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutContest_type_namesInput;

    @Field(() => languagesUpsertWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutContest_type_namesInput)
    upsert?: languagesUpsertWithoutContest_type_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutContest_type_namesInput)
    update?: languagesUpdateWithoutContest_type_namesInput;
}
