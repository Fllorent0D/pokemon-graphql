import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateWithoutLanguagesInput } from './item-category-prose-create-without-languages.input';

@InputType()
export class item_category_proseCreateOrConnectWithoutLanguagesInput {

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;

    @Field(() => item_category_proseCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_category_proseCreateWithoutLanguagesInput)
    create!: item_category_proseCreateWithoutLanguagesInput;
}
