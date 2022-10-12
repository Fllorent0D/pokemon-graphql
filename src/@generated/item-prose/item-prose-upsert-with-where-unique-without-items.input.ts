import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_proseUpdateWithoutItemsInput } from './item-prose-update-without-items.input';
import { item_proseCreateWithoutItemsInput } from './item-prose-create-without-items.input';

@InputType()
export class item_proseUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;

    @Field(() => item_proseUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_proseUpdateWithoutItemsInput)
    update!: item_proseUpdateWithoutItemsInput;

    @Field(() => item_proseCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_proseCreateWithoutItemsInput)
    create!: item_proseCreateWithoutItemsInput;
}
