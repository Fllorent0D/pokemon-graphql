import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutBerriesInput } from './items-create-or-connect-without-berries.input';
import { itemsUpsertWithoutBerriesInput } from './items-upsert-without-berries.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutBerriesInput } from './items-update-without-berries.input';

@InputType()
export class itemsUpdateOneRequiredWithoutBerriesNestedInput {

    @Field(() => itemsCreateWithoutBerriesInput, {nullable:true})
    @Type(() => itemsCreateWithoutBerriesInput)
    create?: itemsCreateWithoutBerriesInput;

    @Field(() => itemsCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutBerriesInput;

    @Field(() => itemsUpsertWithoutBerriesInput, {nullable:true})
    @Type(() => itemsUpsertWithoutBerriesInput)
    upsert?: itemsUpsertWithoutBerriesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutBerriesInput, {nullable:true})
    @Type(() => itemsUpdateWithoutBerriesInput)
    update?: itemsUpdateWithoutBerriesInput;
}
