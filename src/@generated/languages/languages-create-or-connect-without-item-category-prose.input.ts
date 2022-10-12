import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_category_proseInput } from './languages-create-without-item-category-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_category_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_category_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_category_proseInput)
    create!: languagesCreateWithoutItem_category_proseInput;
}
