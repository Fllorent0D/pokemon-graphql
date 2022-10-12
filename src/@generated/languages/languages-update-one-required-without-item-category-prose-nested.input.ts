import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_category_proseInput } from './languages-create-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_category_proseInput } from './languages-create-or-connect-without-item-category-prose.input';
import { languagesUpsertWithoutItem_category_proseInput } from './languages-upsert-without-item-category-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_category_proseInput } from './languages-update-without-item-category-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_category_proseNestedInput {

    @Field(() => languagesCreateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_category_proseInput)
    create?: languagesCreateWithoutItem_category_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_category_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_category_proseInput;

    @Field(() => languagesUpsertWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_category_proseInput)
    upsert?: languagesUpsertWithoutItem_category_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_category_proseInput)
    update?: languagesUpdateWithoutItem_category_proseInput;
}
