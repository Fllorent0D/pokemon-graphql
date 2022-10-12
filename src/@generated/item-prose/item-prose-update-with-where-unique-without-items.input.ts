import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_proseUpdateWithoutItemsInput } from './item-prose-update-without-items.input';

@InputType()
export class item_proseUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;

    @Field(() => item_proseUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_proseUpdateWithoutItemsInput)
    data!: item_proseUpdateWithoutItemsInput;
}
