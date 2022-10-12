import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_mapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_mapCreateWithoutItemsInput } from './item-flag-map-create-without-items.input';

@InputType()
export class item_flag_mapCreateOrConnectWithoutItemsInput {

    @Field(() => item_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_mapWhereUniqueInput)
    where!: item_flag_mapWhereUniqueInput;

    @Field(() => item_flag_mapCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_flag_mapCreateWithoutItemsInput)
    create!: item_flag_mapCreateWithoutItemsInput;
}
