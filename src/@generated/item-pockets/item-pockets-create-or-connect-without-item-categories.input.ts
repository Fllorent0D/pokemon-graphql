import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateWithoutItem_categoriesInput } from './item-pockets-create-without-item-categories.input';

@InputType()
export class item_pocketsCreateOrConnectWithoutItem_categoriesInput {

    @Field(() => item_pocketsWhereUniqueInput, {nullable:false})
    @Type(() => item_pocketsWhereUniqueInput)
    where!: item_pocketsWhereUniqueInput;

    @Field(() => item_pocketsCreateWithoutItem_categoriesInput, {nullable:false})
    @Type(() => item_pocketsCreateWithoutItem_categoriesInput)
    create!: item_pocketsCreateWithoutItem_categoriesInput;
}
