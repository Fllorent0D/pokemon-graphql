import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';
import { Type } from 'class-transformer';
import { contest_type_namesUpdateWithoutContest_typesInput } from './contest-type-names-update-without-contest-types.input';
import { contest_type_namesCreateWithoutContest_typesInput } from './contest-type-names-create-without-contest-types.input';

@InputType()
export class contest_type_namesUpsertWithWhereUniqueWithoutContest_typesInput {

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:false})
    @Type(() => contest_type_namesWhereUniqueInput)
    where!: contest_type_namesWhereUniqueInput;

    @Field(() => contest_type_namesUpdateWithoutContest_typesInput, {nullable:false})
    @Type(() => contest_type_namesUpdateWithoutContest_typesInput)
    update!: contest_type_namesUpdateWithoutContest_typesInput;

    @Field(() => contest_type_namesCreateWithoutContest_typesInput, {nullable:false})
    @Type(() => contest_type_namesCreateWithoutContest_typesInput)
    create!: contest_type_namesCreateWithoutContest_typesInput;
}
