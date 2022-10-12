import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_textUpdateWithoutItemsInput } from './item-flavor-text-update-without-items.input';
import { item_flavor_textCreateWithoutItemsInput } from './item-flavor-text-create-without-items.input';

@InputType()
export class item_flavor_textUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;

    @Field(() => item_flavor_textUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_flavor_textUpdateWithoutItemsInput)
    update!: item_flavor_textUpdateWithoutItemsInput;

    @Field(() => item_flavor_textCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_flavor_textCreateWithoutItemsInput)
    create!: item_flavor_textCreateWithoutItemsInput;
}
