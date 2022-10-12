import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_category_proseInput } from './languages-create-without-item-category-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_category_proseInput } from './languages-create-or-connect-without-item-category-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_category_proseInput {

    @Field(() => languagesCreateWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_category_proseInput)
    create?: languagesCreateWithoutItem_category_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_category_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_category_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_category_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
