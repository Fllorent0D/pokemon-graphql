import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutContest_type_namesInput } from './contest-types-create-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutContest_type_namesInput } from './contest-types-create-or-connect-without-contest-type-names.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class contest_typesCreateNestedOneWithoutContest_type_namesInput {

    @Field(() => contest_typesCreateWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutContest_type_namesInput)
    create?: contest_typesCreateWithoutContest_type_namesInput;

    @Field(() => contest_typesCreateOrConnectWithoutContest_type_namesInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutContest_type_namesInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutContest_type_namesInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;
}
