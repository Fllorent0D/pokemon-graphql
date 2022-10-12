import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutVersion_namesInput } from './languages-update-without-version-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutVersion_namesInput } from './languages-create-without-version-names.input';

@InputType()
export class languagesUpsertWithoutVersion_namesInput {

    @Field(() => languagesUpdateWithoutVersion_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutVersion_namesInput)
    update!: languagesUpdateWithoutVersion_namesInput;

    @Field(() => languagesCreateWithoutVersion_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutVersion_namesInput)
    create!: languagesCreateWithoutVersion_namesInput;
}
