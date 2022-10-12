import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_categoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { item_categoriesUpdateWithoutItem_pocketsInput } from './item-categories-update-without-item-pockets.input';

@InputType()
export class item_categoriesUpdateWithWhereUniqueWithoutItem_pocketsInput {

    @Field(() => item_categoriesWhereUniqueInput, {nullable:false})
    @Type(() => item_categoriesWhereUniqueInput)
    where!: item_categoriesWhereUniqueInput;

    @Field(() => item_categoriesUpdateWithoutItem_pocketsInput, {nullable:false})
    @Type(() => item_categoriesUpdateWithoutItem_pocketsInput)
    data!: item_categoriesUpdateWithoutItem_pocketsInput;
}
