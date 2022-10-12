import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateWithoutItem_pocket_namesInput } from './item-pockets-create-without-item-pocket-names.input';

@InputType()
export class item_pocketsCreateOrConnectWithoutItem_pocket_namesInput {

    @Field(() => item_pocketsWhereUniqueInput, {nullable:false})
    @Type(() => item_pocketsWhereUniqueInput)
    where!: item_pocketsWhereUniqueInput;

    @Field(() => item_pocketsCreateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => item_pocketsCreateWithoutItem_pocket_namesInput)
    create!: item_pocketsCreateWithoutItem_pocket_namesInput;
}
