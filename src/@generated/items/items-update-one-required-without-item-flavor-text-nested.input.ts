import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_flavor_textInput } from './items-create-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_flavor_textInput } from './items-create-or-connect-without-item-flavor-text.input';
import { itemsUpsertWithoutItem_flavor_textInput } from './items-upsert-without-item-flavor-text.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutItem_flavor_textInput } from './items-update-without-item-flavor-text.input';

@InputType()
export class itemsUpdateOneRequiredWithoutItem_flavor_textNestedInput {

    @Field(() => itemsCreateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => itemsCreateWithoutItem_flavor_textInput)
    create?: itemsCreateWithoutItem_flavor_textInput;

    @Field(() => itemsCreateOrConnectWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_flavor_textInput)
    connectOrCreate?: itemsCreateOrConnectWithoutItem_flavor_textInput;

    @Field(() => itemsUpsertWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => itemsUpsertWithoutItem_flavor_textInput)
    upsert?: itemsUpsertWithoutItem_flavor_textInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => itemsUpdateWithoutItem_flavor_textInput)
    update?: itemsUpdateWithoutItem_flavor_textInput;
}
