import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_category_proseUpdateWithoutLanguagesInput } from './item-category-prose-update-without-languages.input';

@InputType()
export class item_category_proseUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => item_category_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_category_proseWhereUniqueInput)
    where!: item_category_proseWhereUniqueInput;

    @Field(() => item_category_proseUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => item_category_proseUpdateWithoutLanguagesInput)
    data!: item_category_proseUpdateWithoutLanguagesInput;
}
