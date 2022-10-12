import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_namesInput } from './languages-update-without-item-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_namesInput } from './languages-create-without-item-names.input';

@InputType()
export class languagesUpsertWithoutItem_namesInput {

    @Field(() => languagesUpdateWithoutItem_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_namesInput)
    update!: languagesUpdateWithoutItem_namesInput;

    @Field(() => languagesCreateWithoutItem_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_namesInput)
    create!: languagesCreateWithoutItem_namesInput;
}
