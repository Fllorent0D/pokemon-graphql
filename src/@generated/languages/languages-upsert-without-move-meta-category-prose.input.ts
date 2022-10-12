import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutMove_meta_category_proseInput } from './languages-update-without-move-meta-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutMove_meta_category_proseInput } from './languages-create-without-move-meta-category-prose.input';

@InputType()
export class languagesUpsertWithoutMove_meta_category_proseInput {

    @Field(() => languagesUpdateWithoutMove_meta_category_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutMove_meta_category_proseInput)
    update!: languagesUpdateWithoutMove_meta_category_proseInput;

    @Field(() => languagesCreateWithoutMove_meta_category_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutMove_meta_category_proseInput)
    create!: languagesCreateWithoutMove_meta_category_proseInput;
}
