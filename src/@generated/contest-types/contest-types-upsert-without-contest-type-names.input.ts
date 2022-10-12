import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesUpdateWithoutContest_type_namesInput } from './contest-types-update-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutContest_type_namesInput } from './contest-types-create-without-contest-type-names.input';

@InputType()
export class contest_typesUpsertWithoutContest_type_namesInput {

    @Field(() => contest_typesUpdateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => contest_typesUpdateWithoutContest_type_namesInput)
    update!: contest_typesUpdateWithoutContest_type_namesInput;

    @Field(() => contest_typesCreateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutContest_type_namesInput)
    create!: contest_typesCreateWithoutContest_type_namesInput;
}
