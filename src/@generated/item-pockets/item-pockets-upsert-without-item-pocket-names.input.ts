import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsUpdateWithoutItem_pocket_namesInput } from './item-pockets-update-without-item-pocket-names.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateWithoutItem_pocket_namesInput } from './item-pockets-create-without-item-pocket-names.input';

@InputType()
export class item_pocketsUpsertWithoutItem_pocket_namesInput {

    @Field(() => item_pocketsUpdateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => item_pocketsUpdateWithoutItem_pocket_namesInput)
    update!: item_pocketsUpdateWithoutItem_pocket_namesInput;

    @Field(() => item_pocketsCreateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => item_pocketsCreateWithoutItem_pocket_namesInput)
    create!: item_pocketsCreateWithoutItem_pocket_namesInput;
}
