import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutItem_category_proseInput } from './languages-update-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_category_proseInput } from './languages-create-without-item-category-prose.input';

@InputType()
export class languagesUpsertWithoutItem_category_proseInput {

    @Field(() => languagesUpdateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutItem_category_proseInput)
    update!: languagesUpdateWithoutItem_category_proseInput;

    @Field(() => languagesCreateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_category_proseInput)
    create!: languagesCreateWithoutItem_category_proseInput;
}
