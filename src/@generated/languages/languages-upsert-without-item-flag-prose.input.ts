import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_flag_proseInput } from './languages-update-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flag_proseInput } from './languages-create-without-item-flag-prose.input';

@InputType()
export class languagesUpsertWithoutItem_flag_proseInput {

    @Field(() => languagesUpdateWithoutItem_flag_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_flag_proseInput)
    update!: languagesUpdateWithoutItem_flag_proseInput;

    @Field(() => languagesCreateWithoutItem_flag_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flag_proseInput)
    create!: languagesCreateWithoutItem_flag_proseInput;
}
