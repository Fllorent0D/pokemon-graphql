import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutContest_type_namesInput } from './contest-types-create-without-contest-type-names.input';

@InputType()
export class contest_typesCreateOrConnectWithoutContest_type_namesInput {

    @Field(() => contest_typesWhereUniqueInput, {nullable:false})
    @Type(() => contest_typesWhereUniqueInput)
    where!: contest_typesWhereUniqueInput;

    @Field(() => contest_typesCreateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutContest_type_namesInput)
    create!: contest_typesCreateWithoutContest_type_namesInput;
}
