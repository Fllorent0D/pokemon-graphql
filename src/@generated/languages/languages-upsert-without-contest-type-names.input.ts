import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutContest_type_namesInput } from './languages-update-without-contest-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutContest_type_namesInput } from './languages-create-without-contest-type-names.input';

@InputType()
export class languagesUpsertWithoutContest_type_namesInput {

    @Field(() => languagesUpdateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutContest_type_namesInput)
    update!: languagesUpdateWithoutContest_type_namesInput;

    @Field(() => languagesCreateWithoutContest_type_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutContest_type_namesInput)
    create!: languagesCreateWithoutContest_type_namesInput;
}
