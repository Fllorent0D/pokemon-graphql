import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocketsCreateWithoutItem_pocket_namesInput } from './item-pockets-create-without-item-pocket-names.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateOrConnectWithoutItem_pocket_namesInput } from './item-pockets-create-or-connect-without-item-pocket-names.input';
import { item_pocketsUpsertWithoutItem_pocket_namesInput } from './item-pockets-upsert-without-item-pocket-names.input';
import { item_pocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { item_pocketsUpdateWithoutItem_pocket_namesInput } from './item-pockets-update-without-item-pocket-names.input';

@InputType()
export class item_pocketsUpdateOneRequiredWithoutItem_pocket_namesNestedInput {

    @Field(() => item_pocketsCreateWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => item_pocketsCreateWithoutItem_pocket_namesInput)
    create?: item_pocketsCreateWithoutItem_pocket_namesInput;

    @Field(() => item_pocketsCreateOrConnectWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => item_pocketsCreateOrConnectWithoutItem_pocket_namesInput)
    connectOrCreate?: item_pocketsCreateOrConnectWithoutItem_pocket_namesInput;

    @Field(() => item_pocketsUpsertWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => item_pocketsUpsertWithoutItem_pocket_namesInput)
    upsert?: item_pocketsUpsertWithoutItem_pocket_namesInput;

    @Field(() => item_pocketsWhereUniqueInput, {nullable:true})
    @Type(() => item_pocketsWhereUniqueInput)
    connect?: item_pocketsWhereUniqueInput;

    @Field(() => item_pocketsUpdateWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => item_pocketsUpdateWithoutItem_pocket_namesInput)
    update?: item_pocketsUpdateWithoutItem_pocket_namesInput;
}
