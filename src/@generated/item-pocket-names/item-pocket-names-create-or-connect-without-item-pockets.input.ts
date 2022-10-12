import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateWithoutItem_pocketsInput } from './item-pocket-names-create-without-item-pockets.input';

@InputType()
export class item_pocket_namesCreateOrConnectWithoutItem_pocketsInput {

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;

    @Field(() => item_pocket_namesCreateWithoutItem_pocketsInput, {nullable:false})
    @Type(() => item_pocket_namesCreateWithoutItem_pocketsInput)
    create!: item_pocket_namesCreateWithoutItem_pocketsInput;
}
