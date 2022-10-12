import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesCreateWithoutItemsInput } from './item-names-create-without-items.input';

@InputType()
export class item_namesCreateOrConnectWithoutItemsInput {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_namesCreateWithoutItemsInput)
    create!: item_namesCreateWithoutItemsInput;
}
