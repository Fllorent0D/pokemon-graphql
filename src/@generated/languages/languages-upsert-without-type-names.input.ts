import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutType_namesInput } from './languages-update-without-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutType_namesInput } from './languages-create-without-type-names.input';

@InputType()
export class languagesUpsertWithoutType_namesInput {

    @Field(() => languagesUpdateWithoutType_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutType_namesInput)
    update!: languagesUpdateWithoutType_namesInput;

    @Field(() => languagesCreateWithoutType_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutType_namesInput)
    create!: languagesCreateWithoutType_namesInput;
}
