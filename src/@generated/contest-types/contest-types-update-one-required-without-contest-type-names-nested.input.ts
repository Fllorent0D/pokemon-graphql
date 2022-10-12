import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutContest_type_namesInput } from './contest-types-create-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutContest_type_namesInput } from './contest-types-create-or-connect-without-contest-type-names.input';
import { contest_typesUpsertWithoutContest_type_namesInput } from './contest-types-upsert-without-contest-type-names.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { contest_typesUpdateWithoutContest_type_namesInput } from './contest-types-update-without-contest-type-names.input';

@InputType()
export class contest_typesUpdateOneRequiredWithoutContest_type_namesNestedInput {

    @Field(() => contest_typesCreateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutContest_type_namesInput)
    create?: contest_typesCreateWithoutContest_type_namesInput;

    @Field(() => contest_typesCreateOrConnectWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutContest_type_namesInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutContest_type_namesInput;

    @Field(() => contest_typesUpsertWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesUpsertWithoutContest_type_namesInput)
    upsert?: contest_typesUpsertWithoutContest_type_namesInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;

    @Field(() => contest_typesUpdateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesUpdateWithoutContest_type_namesInput)
    update?: contest_typesUpdateWithoutContest_type_namesInput;
}
